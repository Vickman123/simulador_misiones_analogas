import * as THREE from 'three';
import { InputManager } from './InputManager';
import { InteractionManager, IInteractable } from './InteractionManager';
import { PlatformManager } from '../app/PlatformManager';
import { EventBus } from '../utils/EventBus';
import { MissionManager } from '../mission/MissionManager';

/**
 * High-performance mobile touch controller providing:
 * - Dynamic virtual thumbstick (movement: forward, backward, strafe)
 * - Smooth touch-drag look (pitch & yaw camera control)
 * - Direct tap-to-interact on 3D elements
 * - Floating action/interact button with range feedback
 * - Sprint toggle
 * - Collapsible mobile objectives drawer
 */
export class MobileControls {
  private camera: THREE.Camera;
  private inputManager: InputManager;

  // DOM Elements
  private containerEl: HTMLElement | null = null;
  private joystickZoneEl: HTMLElement | null = null;
  private joystickBaseEl: HTMLElement | null = null;
  private joystickThumbEl: HTMLElement | null = null;
  private btnInteractEl: HTMLElement | null = null;
  private btnInteractLabelEl: HTMLElement | null = null;
  private btnSprintEl: HTMLElement | null = null;
  private btnToggleObjectivesEl: HTMLElement | null = null;
  private btnCloseObjectivesEl: HTMLElement | null = null;
  private objectivesSidebarEl: HTMLElement | null = null;
  private portraitHintEl: HTMLElement | null = null;

  // Touch tracking
  private joystickTouchId: number | null = null;
  private lookTouchId: number | null = null;

  private joystickOrigin = { x: 0, y: 0 };
  private joystickRadius = 45; // Max displacement in pixels

  private lookLastPos = { x: 0, y: 0 };
  private lookStartPos = { x: 0, y: 0 };
  private lookStartTime = 0;
  private touchLookSensitivity = 0.0032;

  private isRunning: boolean = false;
  private isVisible: boolean = false;
  private isEnabled: boolean = true;

  constructor(camera: THREE.Camera, inputManager: InputManager) {
    this.camera = camera;
    this.inputManager = inputManager;

    this.initDOMElements();
    this.bindTouchEvents();
    this.bindMissionEvents();

    // Check initial device mode
    if (PlatformManager.getInstance().getIsMobile()) {
      this.initMobileUI();
    }

    EventBus.getInstance().on('platform:modeChanged', (mode: string) => {
      if (mode === 'mobile') {
        this.initMobileUI();
      }
    });
  }

  private initDOMElements(): void {
    this.containerEl = document.getElementById('mobile-controls');
    this.joystickZoneEl = document.getElementById('joystick-zone');
    this.joystickBaseEl = document.getElementById('joystick-base');
    this.joystickThumbEl = document.getElementById('joystick-thumb');
    this.btnInteractEl = document.getElementById('btn-mobile-interact');
    this.btnInteractLabelEl = document.getElementById('btn-mobile-interact-label');
    this.btnSprintEl = document.getElementById('btn-mobile-sprint');
    this.btnToggleObjectivesEl = document.getElementById('btn-toggle-objectives');
    this.btnCloseObjectivesEl = document.getElementById('btn-close-objectives');
    this.objectivesSidebarEl = document.querySelector('.hud-objectives-sidebar');
    this.portraitHintEl = document.getElementById('portrait-hint-banner');
  }

  private initMobileUI(): void {
    document.body.classList.add('is-mobile');

    // Dismiss portrait hint on tap
    this.portraitHintEl?.addEventListener('click', () => {
      this.portraitHintEl?.classList.add('hidden');
    });

    this.updateOrientationNotice();
    window.addEventListener('resize', this.updateOrientationNotice);
    window.addEventListener('orientationchange', this.updateOrientationNotice);
  }

  private updateOrientationNotice = (): void => {
    if (!PlatformManager.getInstance().getIsMobile()) return;
    const isPortrait = window.innerHeight > window.innerWidth;
    if (isPortrait && this.isVisible) {
      this.portraitHintEl?.classList.remove('hidden');
    } else {
      this.portraitHintEl?.classList.add('hidden');
    }
  };

  private bindTouchEvents(): void {
    // 1. Joystick touch interactions
    if (this.joystickZoneEl) {
      this.joystickZoneEl.addEventListener('touchstart', this.onJoystickTouchStart, { passive: false });
      this.joystickZoneEl.addEventListener('touchmove', this.onJoystickTouchMove, { passive: false });
      this.joystickZoneEl.addEventListener('touchend', this.onJoystickTouchEnd, { passive: false });
      this.joystickZoneEl.addEventListener('touchcancel', this.onJoystickTouchEnd, { passive: false });
    }

    // 2. Look zone touch interactions
    const lookZone = document.getElementById('touch-look-zone');
    if (lookZone) {
      lookZone.addEventListener('touchstart', this.onLookTouchStart, { passive: false });
      lookZone.addEventListener('touchmove', this.onLookTouchMove, { passive: false });
      lookZone.addEventListener('touchend', this.onLookTouchEnd, { passive: false });
      lookZone.addEventListener('touchcancel', this.onLookTouchEnd, { passive: false });
    }

    // 3. Action buttons
    this.btnInteractEl?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.triggerInteract();
    }, { passive: false });

    this.btnInteractEl?.addEventListener('click', (e) => {
      e.preventDefault();
      this.triggerInteract();
    });

    this.btnSprintEl?.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleSprint();
    }, { passive: false });

    this.btnSprintEl?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleSprint();
    });

    // 4. Sidebar objectives drawer toggle
    this.btnToggleObjectivesEl?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleObjectivesDrawer();
    });

    this.btnCloseObjectivesEl?.addEventListener('click', (e) => {
      e.preventDefault();
      this.closeObjectivesDrawer();
    });
  }

  private bindMissionEvents(): void {
    // Reticle hover state update for interact button
    EventBus.getInstance().on('interaction:hoverChanged', (data: { interactable: IInteractable | null; hasTarget: boolean }) => {
      if (!this.btnInteractEl) return;
      if (data.hasTarget && data.interactable) {
        this.btnInteractEl.classList.add('in-range');
        if (this.btnInteractLabelEl) {
          this.btnInteractLabelEl.textContent = data.interactable.name;
        }
        // Slight haptic feedback if available
        if ('vibrate' in navigator) {
          try { navigator.vibrate(12); } catch {}
        }
      } else {
        this.btnInteractEl.classList.remove('in-range');
        if (this.btnInteractLabelEl) {
          this.btnInteractLabelEl.textContent = 'INTERACTUAR';
        }
      }
    });

    // Update objectives count badge
    EventBus.getInstance().on('mission:objectiveUpdated', () => {
      this.updateObjectivesBadge();
    });
  }

  /* --------------------------------------------------------------------------
     JOYSTICK HANDLERS
     -------------------------------------------------------------------------- */
  private onJoystickTouchStart = (e: TouchEvent): void => {
    if (!this.isEnabled) return;
    e.preventDefault();

    if (this.joystickTouchId !== null) return; // Already tracking joystick touch

    const touch = e.changedTouches[0];
    this.joystickTouchId = touch.identifier;

    // Anchor joystick base to touch position if within zone bounds
    if (this.joystickBaseEl && this.joystickZoneEl) {
      const rect = this.joystickZoneEl.getBoundingClientRect();
      const localX = touch.clientX - rect.left;
      const localY = touch.clientY - rect.top;

      this.joystickOrigin = { x: touch.clientX, y: touch.clientY };

      this.joystickBaseEl.style.left = `${localX}px`;
      this.joystickBaseEl.style.top = `${localY}px`;
      this.joystickBaseEl.classList.add('active');

      if (this.joystickThumbEl) {
        this.joystickThumbEl.style.transform = `translate(0px, 0px)`;
      }
    }
  };

  private onJoystickTouchMove = (e: TouchEvent): void => {
    if (!this.isEnabled || this.joystickTouchId === null) return;
    e.preventDefault();

    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.joystickTouchId) {
        const dx = touch.clientX - this.joystickOrigin.x;
        const dy = touch.clientY - this.joystickOrigin.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let clampedX = dx;
        let clampedY = dy;

        if (dist > this.joystickRadius) {
          const factor = this.joystickRadius / dist;
          clampedX = dx * factor;
          clampedY = dy * factor;
        }

        if (this.joystickThumbEl) {
          this.joystickThumbEl.style.transform = `translate(${clampedX}px, ${clampedY}px)`;
        }

        // Normalize movement vector:
        // moveX: -1 (left) to +1 (right)
        // moveZ: +1 (up/forward) to -1 (down/backward)
        const normX = clampedX / this.joystickRadius;
        const normZ = -clampedY / this.joystickRadius;

        this.inputManager.setTouchMove(normX, normZ);

        // Auto-sprint if pushed all the way out
        if (dist > this.joystickRadius * 0.95 && !this.isRunning) {
          this.inputManager.setTouchRunning(true);
        } else if (!this.isRunning) {
          this.inputManager.setTouchRunning(false);
        }
        break;
      }
    }
  };

  private onJoystickTouchEnd = (e: TouchEvent): void => {
    if (this.joystickTouchId === null) return;

    for (let i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === this.joystickTouchId) {
        this.joystickTouchId = null;
        this.inputManager.setTouchMove(0, 0);
        if (!this.isRunning) {
          this.inputManager.setTouchRunning(false);
        }

        if (this.joystickThumbEl) {
          this.joystickThumbEl.style.transform = `translate(0px, 0px)`;
        }
        if (this.joystickBaseEl) {
          this.joystickBaseEl.classList.remove('active');
        }
        break;
      }
    }
  };

  /* --------------------------------------------------------------------------
     LOOK & DIRECT TAP HANDLERS
     -------------------------------------------------------------------------- */
  private onLookTouchStart = (e: TouchEvent): void => {
    if (!this.isEnabled) return;
    e.preventDefault();

    if (this.lookTouchId !== null) return;

    const touch = e.changedTouches[0];
    this.lookTouchId = touch.identifier;
    this.lookLastPos = { x: touch.clientX, y: touch.clientY };
    this.lookStartPos = { x: touch.clientX, y: touch.clientY };
    this.lookStartTime = performance.now();
  };

  private onLookTouchMove = (e: TouchEvent): void => {
    if (!this.isEnabled || this.lookTouchId === null) return;
    e.preventDefault();

    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.lookTouchId) {
        const deltaX = touch.clientX - this.lookLastPos.x;
        const deltaY = touch.clientY - this.lookLastPos.y;

        this.inputManager.addLookDelta(
          deltaX * this.touchLookSensitivity,
          deltaY * this.touchLookSensitivity
        );

        this.lookLastPos = { x: touch.clientX, y: touch.clientY };
        break;
      }
    }
  };

  private onLookTouchEnd = (e: TouchEvent): void => {
    if (this.lookTouchId === null) return;

    for (let i = 0; i < e.changedTouches.length; i++) {
      const touch = e.changedTouches[i];
      if (touch.identifier === this.lookTouchId) {
        const elapsed = performance.now() - this.lookStartTime;
        const dx = touch.clientX - this.lookStartPos.x;
        const dy = touch.clientY - this.lookStartPos.y;
        const distSq = dx * dx + dy * dy;

        // Detect clean quick tap (< 250ms and moved < 12px)
        if (elapsed < 250 && distSq < 144) {
          // Direct tap raycasting against 3D objects
          const hit = InteractionManager.getInstance().interactAtPoint(
            touch.clientX,
            touch.clientY,
            this.camera
          );
          if (!hit) {
            // Fallback to center-screen interaction
            InteractionManager.getInstance().interactCurrent();
          }
        }

        this.lookTouchId = null;
        break;
      }
    }
  };

  /* --------------------------------------------------------------------------
     ACTIONS & DRAWER TOGGLES
     -------------------------------------------------------------------------- */
  private triggerInteract(): void {
    InteractionManager.getInstance().interactCurrent();
  }

  private toggleSprint(): void {
    this.isRunning = !this.isRunning;
    this.inputManager.setTouchRunning(this.isRunning);
    if (this.btnSprintEl) {
      this.btnSprintEl.classList.toggle('active', this.isRunning);
      const sub = this.btnSprintEl.querySelector('.btn-sub');
      if (sub) {
        sub.textContent = this.isRunning ? 'CORRIENDO' : 'CAMINAR';
      }
    }
  }

  public toggleObjectivesDrawer(): void {
    if (!this.objectivesSidebarEl) return;
    const isExpanded = this.objectivesSidebarEl.classList.contains('mobile-expanded');
    if (isExpanded) {
      this.closeObjectivesDrawer();
    } else {
      this.openObjectivesDrawer();
    }
  }

  public openObjectivesDrawer(): void {
    this.objectivesSidebarEl?.classList.add('mobile-expanded');
    this.btnToggleObjectivesEl?.classList.add('active');
  }

  public closeObjectivesDrawer(): void {
    this.objectivesSidebarEl?.classList.remove('mobile-expanded');
    this.btnToggleObjectivesEl?.classList.remove('active');
  }

  private updateObjectivesBadge(): void {
    const mission = MissionManager.getInstance().getActiveMission();
    const objectives = mission.getObjectives();
    const completedCount = objectives.filter((o) => o.isCompleted).length;
    const totalCount = objectives.length;

    const badge = document.getElementById('obj-btn-count');
    if (badge) {
      badge.textContent = `${completedCount}/${totalCount}`;
    }

    if (this.btnToggleObjectivesEl && !this.objectivesSidebarEl?.classList.contains('mobile-expanded')) {
      this.btnToggleObjectivesEl.classList.add('pulse-notify');
      setTimeout(() => {
        this.btnToggleObjectivesEl?.classList.remove('pulse-notify');
      }, 1800);
    }
  }

  public setVisible(visible: boolean): void {
    this.isVisible = visible;
    if (this.containerEl) {
      if (visible && PlatformManager.getInstance().getIsMobile()) {
        this.containerEl.classList.remove('hidden');
        this.updateOrientationNotice();
      } else {
        this.containerEl.classList.add('hidden');
        this.portraitHintEl?.classList.add('hidden');
      }
    }
  }

  public setEnabled(enabled: boolean): void {
    this.isEnabled = enabled;
    if (!enabled) {
      this.inputManager.setTouchMove(0, 0);
      if (this.joystickThumbEl) {
        this.joystickThumbEl.style.transform = `translate(0px, 0px)`;
      }
      this.joystickBaseEl?.classList.remove('active');
      this.joystickTouchId = null;
      this.lookTouchId = null;
    }
  }

  public dispose(): void {
    window.removeEventListener('resize', this.updateOrientationNotice);
    window.removeEventListener('orientationchange', this.updateOrientationNotice);
  }
}
