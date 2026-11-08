import * as THREE from 'three';
import { EventBus } from '../utils/EventBus';
import { AudioManager } from './AudioManager';

export interface IInteractable {
  id: string;
  name: string;
  actionPrompt: string;
  object3D: THREE.Object3D;
  canInteract: () => boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onInteract: () => void;
}

/**
 * Universal Interaction Manager for Desktop raycasting and WebXR controller picking.
 */
export class InteractionManager {
  private static instance: InteractionManager;
  private interactables: Map<string, IInteractable> = new Map();
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private currentHovered: IInteractable | null = null;
  private rayOriginCenter: THREE.Vector2 = new THREE.Vector2(0, 0); // Center of screen for Desktop FPS

  private constructor() {
    this.raycaster.far = 4.2; // Maximum reach in meters
  }

  public static getInstance(): InteractionManager {
    if (!InteractionManager.instance) {
      InteractionManager.instance = new InteractionManager();
    }
    return InteractionManager.instance;
  }

  public register(interactable: IInteractable): void {
    this.interactables.set(interactable.id, interactable);
    // Tag the 3D root and children for quick lookup
    interactable.object3D.userData.interactableId = interactable.id;
    interactable.object3D.traverse((child) => {
      child.userData.interactableId = interactable.id;
    });
  }

  public unregister(id: string): void {
    const item = this.interactables.get(id);
    if (item) {
      if (this.currentHovered === item) {
        this.clearHover();
      }
      this.interactables.delete(id);
    }
  }

  public getInteractable(id: string): IInteractable | undefined {
    return this.interactables.get(id);
  }

  /**
   * Performs desktop center-screen raycast
   */
  public updateDesktop(camera: THREE.Camera): void {
    this.raycaster.setFromCamera(this.rayOriginCenter, camera);
    this.evaluateRaycast();
  }

  /**
   * Evaluates raycast against registered interactable objects
   */
  private evaluateRaycast(): void {
    const targetRoots = Array.from(this.interactables.values()).map((i) => i.object3D);
    const intersects = this.raycaster.intersectObjects(targetRoots, true);

    let foundInteractable: IInteractable | null = null;

    for (const hit of intersects) {
      let cur: THREE.Object3D | null = hit.object;
      while (cur) {
        const id = cur.userData?.interactableId;
        if (id && this.interactables.has(id)) {
          const candidate = this.interactables.get(id)!;
          if (candidate.canInteract()) {
            foundInteractable = candidate;
            break;
          }
        }
        cur = cur.parent;
      }
      if (foundInteractable) break;
    }

    if (foundInteractable !== this.currentHovered) {
      if (this.currentHovered && this.currentHovered.onHoverEnd) {
        this.currentHovered.onHoverEnd();
      }

      this.currentHovered = foundInteractable;

      if (this.currentHovered && this.currentHovered.onHoverStart) {
        this.currentHovered.onHoverStart();
      }

      EventBus.getInstance().emit('interaction:hoverChanged', {
        interactable: this.currentHovered,
        hasTarget: !!this.currentHovered
      });
    }
  }

  /**
   * Raycast from custom origin & direction (used by WebXR controller rays)
   */
  public testRay(origin: THREE.Vector3, direction: THREE.Vector3): IInteractable | null {
    this.raycaster.set(origin, direction);
    const targetRoots = Array.from(this.interactables.values()).map((i) => i.object3D);
    const intersects = this.raycaster.intersectObjects(targetRoots, true);

    for (const hit of intersects) {
      let cur: THREE.Object3D | null = hit.object;
      while (cur) {
        const id = cur.userData?.interactableId;
        if (id && this.interactables.has(id)) {
          const candidate = this.interactables.get(id)!;
          if (candidate.canInteract()) {
            return candidate;
          }
        }
        cur = cur.parent;
      }
    }
    return null;
  }

  /**
   * Raycast from screen coordinates (normalized -1 to 1) for mobile touch picking
   */
  public raycastFromScreenPoint(screenX: number, screenY: number, camera: THREE.Camera): IInteractable | null {
    const ndc = new THREE.Vector2(
      (screenX / window.innerWidth) * 2 - 1,
      -(screenY / window.innerHeight) * 2 + 1
    );
    this.raycaster.setFromCamera(ndc, camera);
    const targetRoots = Array.from(this.interactables.values()).map((i) => i.object3D);
    const intersects = this.raycaster.intersectObjects(targetRoots, true);

    for (const hit of intersects) {
      if (hit.distance > this.raycaster.far) continue;
      let cur: THREE.Object3D | null = hit.object;
      while (cur) {
        const id = cur.userData?.interactableId;
        if (id && this.interactables.has(id)) {
          const candidate = this.interactables.get(id)!;
          if (candidate.canInteract()) {
            return candidate;
          }
        }
        cur = cur.parent;
      }
    }
    return null;
  }

  /**
   * Directly interact with an object tapped on screen
   */
  public interactAtPoint(screenX: number, screenY: number, camera: THREE.Camera): boolean {
    const item = this.raycastFromScreenPoint(screenX, screenY, camera);
    if (item && item.canInteract()) {
      AudioManager.getInstance().playClick();
      item.onInteract();
      EventBus.getInstance().emit('interaction:triggered', item.id);
      return true;
    }
    return false;
  }

  public getCurrentHovered(): IInteractable | null {
    return this.currentHovered;
  }

  public interactCurrent(): boolean {
    if (this.currentHovered && this.currentHovered.canInteract()) {
      AudioManager.getInstance().playClick();
      this.currentHovered.onInteract();
      EventBus.getInstance().emit('interaction:triggered', this.currentHovered.id);
      return true;
    }
    return false;
  }

  public interactDirect(id: string): boolean {
    const item = this.interactables.get(id);
    if (item && item.canInteract()) {
      AudioManager.getInstance().playClick();
      item.onInteract();
      EventBus.getInstance().emit('interaction:triggered', item.id);
      return true;
    }
    return false;
  }

  public clearHover(): void {
    if (this.currentHovered && this.currentHovered.onHoverEnd) {
      this.currentHovered.onHoverEnd();
    }
    this.currentHovered = null;
    EventBus.getInstance().emit('interaction:hoverChanged', {
      interactable: null,
      hasTarget: false
    });
  }
}
