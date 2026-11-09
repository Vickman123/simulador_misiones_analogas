import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';
import { InteractionManager } from './InteractionManager';
import { MathUtils } from '../utils/MathUtils';
import { EventBus } from '../utils/EventBus';
import { PlatformManager } from '../app/PlatformManager';

export class InputManager {
  private camera: THREE.PerspectiveCamera;
  private cameraRig: THREE.Group;
  private domElement: HTMLElement;

  private isLocked: boolean = false;
  private isEnabled: boolean = true;

  // Euler angles for mouse / touch look
  private pitch = 0;
  private yaw = 0;

  // Mobile touch movement & state
  private touchMoveX = 0;
  private touchMoveZ = 0;
  private touchRunning = false;

  // EVA Martian outdoor mode & gravity
  private isEVAMode: boolean = false;
  private isJumping: boolean = false;
  private verticalVelocity: number = 0;

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
    ShiftLeft: false,
    Space: false
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

    EventBus.getInstance().on('eva:stateChanged', (data: { isOutdoors: boolean }) => {
      if (data.isOutdoors) {
        this.setEVAMode(true, new THREE.Vector3(12.6, 0, 5.5));
      } else {
        this.setEVAMode(false, new THREE.Vector3(5.5, 0, 3.8));
      }
    });

    EventBus.getInstance().on('eva:jump', () => {
      this.jump();
    });
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    if (!this.isEnabled) return;

    if (e.code in this.keys) {
      this.keys[e.code] = true;
    }

    if (e.code === 'Space') {
      this.jump();
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

    if (PlatformManager.getInstance().getIsMobile()) {
      // On mobile devices, pointer lock is not used. Tapping triggers interaction.
      InteractionManager.getInstance().interactCurrent();
      return;
    }

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

    this.addLookDelta(movementX * CONFIG.CONTROLS.MOUSE_SENSITIVITY, movementY * CONFIG.CONTROLS.MOUSE_SENSITIVITY);
  };

  /**
   * Adjusts camera yaw & pitch from mouse movement or mobile touch swipe
   */
  public addLookDelta(deltaYaw: number, deltaPitch: number): void {
    if (!this.isEnabled) return;

    this.yaw -= deltaYaw;
    this.pitch -= deltaPitch;

    // Clamp pitch between -85 and +85 degrees to avoid gimbal flip
    const maxPitch = Math.PI / 2.05;
    this.pitch = MathUtils.clamp(this.pitch, -maxPitch, maxPitch);

    // Apply rotation: Rig handles yaw, Camera handles pitch
    this.cameraRig.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
  }

  /**
   * Sets analog movement vector from virtual mobile joystick
   * @param x Left (-1) to Right (+1)
   * @param z Backward (-1) to Forward (+1)
   */
  public setTouchMove(x: number, z: number): void {
    this.touchMoveX = x;
    this.touchMoveZ = z;
  }

  public setTouchRunning(running: boolean): void {
    this.touchRunning = running;
  }

  public update(delta: number): void {
    if (!this.isEnabled) return;

    // 1. Martian Low-Gravity Vertical Jumping physics during EVA
    if (this.isEVAMode) {
      if (this.isJumping || this.cameraRig.position.y > 0) {
        this.verticalVelocity += CONFIG.EVA.MARS_GRAVITY * delta;
        this.cameraRig.position.y += this.verticalVelocity * delta;

        if (this.cameraRig.position.y <= 0) {
          this.cameraRig.position.y = 0;
          this.verticalVelocity = 0;
          this.isJumping = false;
        }
      }
    }

    // Movement calculation combining desktop keyboard and mobile touch joystick
    const keyMoveZ = Number(this.keys.KeyW || this.keys.ArrowUp) - Number(this.keys.KeyS || this.keys.ArrowDown);
    const keyMoveX = Number(this.keys.KeyD || this.keys.ArrowRight) - Number(this.keys.KeyA || this.keys.ArrowLeft);

    const moveZ = keyMoveZ !== 0 ? keyMoveZ : this.touchMoveZ;
    const moveX = keyMoveX !== 0 ? keyMoveX : this.touchMoveX;

    const inputMagnitude = Math.min(Math.sqrt(moveX * moveX + moveZ * moveZ), 1);
    const isRunning = this.keys.ShiftLeft || this.touchRunning || inputMagnitude > 0.9;
    const maxSpeed = isRunning ? CONFIG.CONTROLS.RUN_SPEED : CONFIG.CONTROLS.WALK_SPEED;
    const speed = maxSpeed * inputMagnitude;

    if (inputMagnitude > 0.05) {
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

      if (this.isEVAMode) {
        // EVA Outdoors Movement on Mars: Allow roaming up to 85 meters away
        const distFromCenter = Math.sqrt(newPos.x * newPos.x + newPos.z * newPos.z);
        if (distFromCenter > CONFIG.EVA.OUTDOORS_MAX_RADIUS) {
          const factor = CONFIG.EVA.OUTDOORS_MAX_RADIUS / distFromCenter;
          this.cameraRig.position.x = newPos.x * factor;
          this.cameraRig.position.z = newPos.z * factor;
        } else if (distFromCenter < CONFIG.HABITAT.RADIUS + 0.2 && !(newPos.x > 10.5 && newPos.z > 3.8 && newPos.z < 7.2)) {
          // Prevent walking through outer wall of habitat unless at the airlock ramp
          const factor = (CONFIG.HABITAT.RADIUS + 0.2) / distFromCenter;
          this.cameraRig.position.x = newPos.x * factor;
          this.cameraRig.position.z = newPos.z * factor;
        } else {
          this.cameraRig.position.x = newPos.x;
          this.cameraRig.position.z = newPos.z;
        }
      } else {
        // Constrain position within habitat walkable area with obstacle avoidance
        const constrained = MathUtils.clampToHabitatWalkable(newPos.x, newPos.z, {
          minX: -CONFIG.HABITAT.WALKABLE_RADIUS,
          maxX: CONFIG.HABITAT.WALKABLE_RADIUS,
          minZ: -CONFIG.HABITAT.WALKABLE_RADIUS,
          maxZ: CONFIG.HABITAT.WALKABLE_RADIUS,
          obstacles: this.obstacles
        });

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
    }

    // Update raycast against interactables
    InteractionManager.getInstance().updateDesktop(this.camera);
  }

  public jump(): void {
    if (this.isEVAMode && !this.isJumping) {
      this.verticalVelocity = CONFIG.EVA.JUMP_VELOCITY;
      this.isJumping = true;
    }
  }

  public setEVAMode(active: boolean, teleportPos?: THREE.Vector3): void {
    this.isEVAMode = active;
    if (teleportPos) {
      this.cameraRig.position.copy(teleportPos);
    }
    this.velocity.set(0, 0, 0);
    this.verticalVelocity = 0;
    this.isJumping = false;
  }

  public getIsEVAMode(): boolean {
    return this.isEVAMode;
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    if (!enabled && this.isLocked) {
      document.exitPointerLock?.();
    }
    if (!enabled) {
      this.touchMoveX = 0;
      this.touchMoveZ = 0;
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
