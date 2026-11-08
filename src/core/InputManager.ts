import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';
import { InteractionManager } from './InteractionManager';
import { MathUtils } from '../utils/MathUtils';
import { EventBus } from '../utils/EventBus';

export class InputManager {
  private camera: THREE.PerspectiveCamera;
  private cameraRig: THREE.Group;
  private domElement: HTMLElement;

  private isLocked: boolean = false;
  private isEnabled: boolean = true;

  // Euler angles for mouse look
  private pitch = 0;
  private yaw = 0;

  // Key states
  private keys: Record<string, boolean> = {
    KeyW: false,
    KeyA: false,
    KeyS: false,
    KeyD: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false,
    ShiftLeft: false
  };

  private velocity = new THREE.Vector3();
  private direction = new THREE.Vector3();

  // Internal collision boundaries (consoles and modules inside the habitat)
  private obstacles: Array<{ x: number; z: number; radius: number }> = [
    { x: 0, z: -5.8, radius: 1.6 },   // Mission control console
    { x: -5.4, z: 0, radius: 1.5 },   // Life support console
    { x: 5.4, z: 0, radius: 1.5 },    // Science station
    { x: -3.8, z: 4.2, radius: 1.2 },  // Resource cabinet
    { x: 3.8, z: 4.2, radius: 1.2 }   // Airlock vestibule
  ];

  constructor(camera: THREE.PerspectiveCamera, cameraRig: THREE.Group, domElement: HTMLElement) {
    this.camera = camera;
    this.cameraRig = cameraRig;
    this.domElement = domElement;

    this.bindEvents();
  }

  private bindEvents(): void {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    document.addEventListener('pointerlockchange', this.onPointerLockChange);
    document.addEventListener('mousemove', this.onMouseMove);
    this.domElement.addEventListener('click', this.onCanvasClick);
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    if (!this.isEnabled) return;

    if (e.code in this.keys) {
      this.keys[e.code] = true;
    }

    if (e.code === 'KeyE') {
      // Direct interact shortcut
      InteractionManager.getInstance().interactCurrent();
    }

    if (e.code === 'Escape') {
      EventBus.getInstance().emit('ui:togglePause');
    }
  };

  private onKeyUp = (e: KeyboardEvent): void => {
    if (e.code in this.keys) {
      this.keys[e.code] = false;
    }
  };

  private onCanvasClick = (): void => {
    if (!this.isEnabled) return;

    if (!this.isLocked) {
      // Request pointer lock only if no fullscreen modal is active
      const activeModal = document.querySelector('.modal-backdrop:not(.hidden), .fullscreen-modal:not(.hidden)');
      if (!activeModal) {
        this.domElement.requestPointerLock?.();
      }
    } else {
      // Primary click while locked = interact with targeted item
      InteractionManager.getInstance().interactCurrent();
    }
  };

  private onPointerLockChange = (): void => {
    this.isLocked = document.pointerLockElement === this.domElement;
    EventBus.getInstance().emit('input:pointerLockChanged', this.isLocked);
  };

  private onMouseMove = (e: MouseEvent): void => {
    if (!this.isLocked || !this.isEnabled) return;

    const movementX = e.movementX || 0;
    const movementY = e.movementY || 0;

    this.yaw -= movementX * CONFIG.CONTROLS.MOUSE_SENSITIVITY;
    this.pitch -= movementY * CONFIG.CONTROLS.MOUSE_SENSITIVITY;

    // Clamp pitch between -85 and +85 degrees to avoid gimbal flip
    const maxPitch = Math.PI / 2.05;
    this.pitch = MathUtils.clamp(this.pitch, -maxPitch, maxPitch);

    // Apply rotation: Rig handles yaw, Camera handles pitch
    this.cameraRig.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  };

  public update(delta: number): void {
    if (!this.isEnabled) return;

    // Movement calculation
    const moveZ = Number(this.keys.KeyW || this.keys.ArrowUp) - Number(this.keys.KeyS || this.keys.ArrowDown);
    const moveX = Number(this.keys.KeyD || this.keys.ArrowRight) - Number(this.keys.KeyA || this.keys.ArrowLeft);

    this.direction.set(moveX, 0, -moveZ).normalize();

    const speed = this.keys.ShiftLeft ? CONFIG.CONTROLS.RUN_SPEED : CONFIG.CONTROLS.WALK_SPEED;

    if (moveX !== 0 || moveZ !== 0) {
      // Align movement to camera yaw direction
      const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
      const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);

      const targetVelocity = forward.multiplyScalar(moveZ).add(right.multiplyScalar(moveX)).normalize().multiplyScalar(speed);
      this.velocity.lerp(targetVelocity, 0.25);
    } else {
      this.velocity.lerp(new THREE.Vector3(0, 0, 0), 0.3);
    }

    if (this.velocity.lengthSq() > 0.0001) {
      const newPos = this.cameraRig.position.clone().addScaledVector(this.velocity, delta);

      // Constrain position within habitat walkable area with obstacle avoidance
      const constrained = MathUtils.clampToHabitatWalkable(newPos.x, newPos.z, {
        minX: -CONFIG.HABITAT.WALKABLE_RADIUS,
        maxX: CONFIG.HABITAT.WALKABLE_RADIUS,
        minZ: -CONFIG.HABITAT.WALKABLE_RADIUS,
        maxZ: CONFIG.HABITAT.WALKABLE_RADIUS,
        obstacles: this.obstacles
      });

      // Circular habitat boundary check
      const distFromCenter = Math.sqrt(constrained.x * constrained.x + constrained.z * constrained.z);
      if (distFromCenter > CONFIG.HABITAT.WALKABLE_RADIUS) {
        const factor = CONFIG.HABITAT.WALKABLE_RADIUS / distFromCenter;
        this.cameraRig.position.x = constrained.x * factor;
        this.cameraRig.position.z = constrained.z * factor;
      } else {
        this.cameraRig.position.x = constrained.x;
        this.cameraRig.position.z = constrained.z;
      }
    }

    // Update raycast against interactables
    InteractionManager.getInstance().updateDesktop(this.camera);
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    if (!enabled && this.isLocked) {
      document.exitPointerLock?.();
    }
  }

  public getIsLocked(): boolean {
    return this.isLocked;
  }

  public exitPointerLock(): void {
    if (this.isLocked) {
      document.exitPointerLock?.();
    }
  }

  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    document.removeEventListener('pointerlockchange', this.onPointerLockChange);
    document.removeEventListener('mousemove', this.onMouseMove);
    this.domElement.removeEventListener('click', this.onCanvasClick);
  }
}
