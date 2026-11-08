import * as THREE from 'three';
import { XRControllerManager } from './XRControllerManager';
import { InteractionManager, IInteractable } from '../core/InteractionManager';
import { CONFIG } from '../app/Configuration';
import { MathUtils } from '../utils/MathUtils';

/**
 * Handles WebXR input events, haptics, VR raycasting, and thumbstick locomotion.
 */
export class XRInteractionManager {
  private controllerManager: XRControllerManager;
  private cameraRig: THREE.Group;
  private renderer: THREE.WebGLRenderer;

  // Temp vectors for ray calculations to prevent per-frame allocations
  private tempMatrix = new THREE.Matrix4();
  private rayOrigin = new THREE.Vector3();
  private rayDirection = new THREE.Vector3();

  // Thumbstick snap-turn debounce
  private snapTurnCoolDown: number = 0;

  constructor(controllerManager: XRControllerManager, cameraRig: THREE.Group, renderer: THREE.WebGLRenderer) {
    this.controllerManager = controllerManager;
    this.cameraRig = cameraRig;
    this.renderer = renderer;

    this.bindControllerEvents();
  }

  private bindControllerEvents(): void {
    for (const pair of this.controllerManager.controllers) {
      pair.controller.addEventListener('selectstart', () => this.onSelectStart(pair));
      pair.controller.addEventListener('selectend', () => this.onSelectEnd(pair));
    }
  }

  private onSelectStart(pair: typeof this.controllerManager.controllers[0]): void {
    this.triggerHaptic(pair.index, 0.5, 40);

    // Compute ray from controller
    this.computeControllerRay(pair.controller);
    const hit = InteractionManager.getInstance().testRay(this.rayOrigin, this.rayDirection);

    if (hit) {
      this.triggerHaptic(pair.index, 0.8, 80);
      InteractionManager.getInstance().interactDirect(hit.id);
    }
  }

  private onSelectEnd(_pair: typeof this.controllerManager.controllers[0]): void {
    // Release
  }

  private triggerHaptic(controllerIndex: number, intensity = 0.5, durationMs = 50): void {
    const session = this.renderer.xr.getSession();
    if (!session || !session.inputSources) return;

    const source = session.inputSources[controllerIndex];
    if (source && source.gamepad && source.gamepad.hapticActuators && source.gamepad.hapticActuators.length > 0) {
      try {
        source.gamepad.hapticActuators[0].pulse(intensity, durationMs);
      } catch {}
    }
  }

  private computeControllerRay(controller: THREE.XRTargetRaySpace): void {
    this.tempMatrix.identity().extractRotation(controller.matrixWorld);
    this.rayOrigin.setFromMatrixPosition(controller.matrixWorld);
    this.rayDirection.set(0, 0, -1).applyMatrix4(this.tempMatrix).normalize();
  }

  public update(delta: number): void {
    const session = this.renderer.xr.getSession();
    if (!session || !session.inputSources) return;

    // 1. Update laser hover visual cues
    for (const pair of this.controllerManager.controllers) {
      this.computeControllerRay(pair.controller);
      const hit = InteractionManager.getInstance().testRay(this.rayOrigin, this.rayDirection);

      if (hit) {
        pair.rayLine.material = new THREE.LineBasicMaterial({
          color: CONFIG.COLORS.MARS_ORANGE,
          transparent: true,
          opacity: 0.95
        });
        pair.reticle.visible = true;
      } else {
        pair.rayLine.material = new THREE.LineBasicMaterial({
          color: CONFIG.COLORS.TECH_CYAN,
          transparent: true,
          opacity: 0.5
        });
        pair.reticle.visible = false;
      }
    }

    // 2. Thumbstick Locomotion & Snap Turn for Meta Quest
    let moveX = 0;
    let moveZ = 0;
    let turnX = 0;

    for (let i = 0; i < session.inputSources.length; i++) {
      const source = session.inputSources[i];
      if (!source.gamepad || !source.gamepad.axes) continue;

      const axes = source.gamepad.axes;
      // Primary thumbstick axes: [X, Y] (indices 2, 3 or 0, 1 depending on mapping)
      const ax = axes.length >= 4 ? axes[2] : axes[0];
      const ay = axes.length >= 4 ? axes[3] : axes[1];

      if (source.handedness === 'left') {
        // Left stick: Smooth translation
        if (Math.abs(ax) > CONFIG.CONTROLS.CONTROLLER_DEADZONE) moveX = ax;
        if (Math.abs(ay) > CONFIG.CONTROLS.CONTROLLER_DEADZONE) moveZ = ay;
      } else if (source.handedness === 'right') {
        // Right stick: Snap turn
        if (Math.abs(ax) > 0.6) turnX = ax;
      }
    }

    // Snap turn evaluation
    if (this.snapTurnCoolDown > 0) {
      this.snapTurnCoolDown -= delta;
    } else if (Math.abs(turnX) > 0.6) {
      const angle = turnX > 0 ? -Math.PI / 6 : Math.PI / 6; // 30-degree snap
      this.cameraRig.rotateY(angle);
      this.snapTurnCoolDown = 0.35; // 350ms cooldown
    }

    // Smooth movement execution
    if (Math.abs(moveX) > 0 || Math.abs(moveZ) > 0) {
      const speed = CONFIG.CONTROLS.WALK_SPEED;
      // Move relative to camera rig orientation
      const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraRig.rotation.y);
      const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), this.cameraRig.rotation.y);

      const deltaMove = forward.multiplyScalar(-moveZ * speed * delta).add(right.multiplyScalar(moveX * speed * delta));

      const newPos = this.cameraRig.position.clone().add(deltaMove);

      // Clamp within walkable habitat boundaries
      const constrained = MathUtils.clampToHabitatWalkable(newPos.x, newPos.z, {
        minX: -CONFIG.HABITAT.WALKABLE_RADIUS,
        maxX: CONFIG.HABITAT.WALKABLE_RADIUS,
        minZ: -CONFIG.HABITAT.WALKABLE_RADIUS,
        maxZ: CONFIG.HABITAT.WALKABLE_RADIUS
      });

      const dist = Math.sqrt(constrained.x * constrained.x + constrained.z * constrained.z);
      if (dist <= CONFIG.HABITAT.WALKABLE_RADIUS) {
        this.cameraRig.position.x = constrained.x;
        this.cameraRig.position.z = constrained.z;
      }
    }
  }
}
