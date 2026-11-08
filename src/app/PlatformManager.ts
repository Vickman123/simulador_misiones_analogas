import { EventBus } from '../utils/EventBus';

export type PlatformMode = 'desktop' | 'mobile' | 'webxr';

/**
 * Detects device hardware, WebXR capability, and manages execution mode.
 */
export class PlatformManager {
  private static instance: PlatformManager;
  private currentMode: PlatformMode = 'desktop';
  private isVRSupported: boolean = false;
  private isMetaQuest: boolean = false;
  private isMobile: boolean = false;
  private isTouch: boolean = false;

  private constructor() {
    this.detectDevice();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('orientationchange', this.onResize);
  }

  public static getInstance(): PlatformManager {
    if (!PlatformManager.instance) {
      PlatformManager.instance = new PlatformManager();
    }
    return PlatformManager.instance;
  }

  private onResize = (): void => {
    this.updateMobileState();
  };

  private async detectDevice(): Promise<void> {
    const ua = navigator.userAgent || '';
    this.isMetaQuest = /Quest/i.test(ua) || /OculusBrowser/i.test(ua);
    this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
    this.isMobile = (this.isTouch && isMobileUA) || (this.isTouch && window.innerWidth <= 1024);

    if (this.isMetaQuest) {
      this.currentMode = 'desktop';
    } else if (this.isMobile) {
      this.currentMode = 'mobile';
    } else {
      this.currentMode = 'desktop';
    }

    this.applyBodyClasses();

    if ('xr' in navigator && (navigator as any).xr?.isSessionSupported) {
      try {
        this.isVRSupported = await (navigator as any).xr.isSessionSupported('immersive-vr');
      } catch {
        this.isVRSupported = false;
      }
    } else {
      this.isVRSupported = false;
    }

    EventBus.getInstance().emit('platform:detected', {
      isVRSupported: this.isVRSupported,
      isMetaQuest: this.isMetaQuest,
      isMobile: this.isMobile,
      isTouch: this.isTouch,
      mode: this.currentMode
    });
  }

  private updateMobileState(): void {
    const ua = navigator.userAgent || '';
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(ua);
    const wasMobile = this.isMobile;
    this.isMobile = (this.isTouch && isMobileUA) || (this.isTouch && window.innerWidth <= 1024);

    if (this.currentMode !== 'webxr') {
      this.currentMode = this.isMobile ? 'mobile' : 'desktop';
    }

    this.applyBodyClasses();

    if (wasMobile !== this.isMobile) {
      EventBus.getInstance().emit('platform:modeChanged', this.currentMode);
    }
  }

  private applyBodyClasses(): void {
    if (typeof document !== 'undefined' && document.body) {
      document.body.classList.toggle('is-mobile', this.isMobile);
      document.body.classList.toggle('is-touch', this.isTouch);
      document.body.classList.toggle('is-portrait', this.isPortrait());
      document.body.classList.toggle('is-landscape', !this.isPortrait());
    }
  }

  public isPortrait(): boolean {
    return window.innerHeight > window.innerWidth;
  }

  public checkVRSupport(): Promise<boolean> {
    if ('xr' in navigator && (navigator as any).xr?.isSessionSupported) {
      return (navigator as any).xr.isSessionSupported('immersive-vr');
    }
    return Promise.resolve(false);
  }

  public getIsVRSupported(): boolean {
    return this.isVRSupported;
  }

  public getIsMetaQuest(): boolean {
    return this.isMetaQuest;
  }

  public getIsMobile(): boolean {
    return this.isMobile;
  }

  public getIsTouch(): boolean {
    return this.isTouch;
  }

  public getCurrentMode(): PlatformMode {
    return this.currentMode;
  }

  public setMode(mode: PlatformMode): void {
    if (this.currentMode !== mode) {
      this.currentMode = mode;
      EventBus.getInstance().emit('platform:modeChanged', mode);
    }
  }
}
