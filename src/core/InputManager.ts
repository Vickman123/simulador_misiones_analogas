import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';
import { InteractionManager } from './InteractionManager';
import { MathUtils, BoundingBox2D } from '../utils/MathUtils';
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

  // Precise architectural wall partitions & furniture collision boundaries
  private wallBoxes: BoundingBox2D[] = [
    // --- WEST WING PARTITIONS (x = -3.2) ---
    // North wall segment (North of Crew Quarters doorway)
    { minX: -3.32, maxX: -3.08, minZ: -10.5, maxZ: -4.5 },
    // Center wall segment (between Crew Quarters doorway z:[-4.5, -2.5] and Mess Hall doorway z:[0.5, 2.5])
    { minX: -3.32, maxX: -3.08, minZ: -2.5, maxZ: 0.5 },
    // South wall segment (South of Mess Hall doorway)
    { minX: -3.32, maxX: -3.08, minZ: 2.5, maxZ: 10.5 },
    // Divider wall between Crew Quarters (North) and Mess Hall (South) along z = -1.0
    { minX: -10.5, maxX: -3.2, minZ: -1.12, maxZ: -0.88 },

    // --- EAST WING PARTITIONS (x = 3.2) ---
    // North wall segment (North of Science Lab doorway)
    { minX: 3.08, maxX: 3.32, minZ: -10.5, maxZ: -4.5 },
    // Center wall segment (between Science Lab doorway z:[-4.5, -2.5] and Suit Bay doorway z:[0.5, 2.5])
    { minX: 3.08, maxX: 3.32, minZ: -2.5, maxZ: 0.5 },
    // South wall segment (South of Suit Bay doorway)
    { minX: 3.08, maxX: 3.32, minZ: 2.5, maxZ: 10.5 },
    // Divider wall between Science Lab (North) and Suit Bay (South) along z = -1.0
    { minX: 3.2, maxX: 10.5, minZ: -1.12, maxZ: -0.88 },

    // --- FURNITURE OBSTACLES ---
    // Central Hub: Mission Control Console at (0, -4.8)
    { minX: -1.8, maxX: 1.8, minZ: -5.4, maxZ: -4.2 },
    // Central Hub: Hologram Projector Pedestal at (0, -1.8)
    { minX: -0.65, maxX: 0.65, minZ: -2.45, maxZ: -1.15 },
    // Central Hub: Life Support Console at (-1.8, 3.8)
    { minX: -2.8, maxX: -0.8, minZ: 3.3, maxZ: 4.3 },
    // Central Hub: Resource Cabinet at (1.8, 3.8)
    { minX: 0.8, maxX: 2.8, minZ: 3.3, maxZ: 4.3 },

    // Science Lab (Zona 03): BIOGROWTH-01 Workbench at (6.0, -3.2)
    { minX: 4.8, maxX: 7.2, minZ: -3.8, maxZ: -2.6 },
    // Science Lab (Zona 03): Geology Workbench at (7.5, -6.0)
    { minX: 6.3, maxX: 8.7, minZ: -6.6, maxZ: -5.4 },

    // Mess Hall (Zona 01): Dining Table & Stools at (-6.8, 4.5)
    { minX: -8.0, maxX: -5.6, minZ: 3.6, maxZ: 5.4 },

    // Crew Quarters (Zona 02): Sleeping Berths at (-6.8, -5.5)
    { minX: -8.6, maxX: -5.0, minZ: -6.6, maxZ: -4.4 },

    // Suit Bay (Zona 04): Spacesuit Rack Gantry at (6.2, 3.5)
    { minX: 4.9, maxX: 7.5, minZ: 2.9, maxZ: 4.1 }
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
        // Constrain position within habitat walkable area with sliding wall and obstacle collisions
        const resolved = MathUtils.resolveCollisions(newPos.x, newPos.z, this.wallBoxes, 0.32);

        // Enforce circular perimeter boundary of habitat
        const distFromCenter = Math.sqrt(resolved.x * resolved.x + resolved.z * resolved.z);
        if (distFromCenter > CONFIG.HABITAT.WALKABLE_RADIUS) {
          const factor = CONFIG.HABITAT.WALKABLE_RADIUS / distFromCenter;
          this.cameraRig.position.x = resolved.x * factor;
          this.cameraRig.position.z = resolved.z * factor;
        } else {
          this.cameraRig.position.x = resolved.x;
          this.cameraRig.position.z = resolved.z;
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
