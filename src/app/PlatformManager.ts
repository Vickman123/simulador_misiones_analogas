import { EventBus } from '../utils/EventBus';

export type PlatformMode = 'desktop' | 'webxr';

/**
 * Detects device hardware, WebXR capability, and manages execution mode.
 */
export class PlatformManager {
  private static instance: PlatformManager;
  private currentMode: PlatformMode = 'desktop';
  private isVRSupported: boolean = false;
  private isMetaQuest: boolean = false;

  private constructor() {
    this.detectDevice();
  }

  public static getInstance(): PlatformManager {
    if (!PlatformManager.instance) {
      PlatformManager.instance = new PlatformManager();
    }
    return PlatformManager.instance;
  }

  private async detectDevice(): Promise<void> {
    const ua = navigator.userAgent || '';
    this.isMetaQuest = /Quest/i.test(ua) || /OculusBrowser/i.test(ua);

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
      isMetaQuest: this.isMetaQuest
    });
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
