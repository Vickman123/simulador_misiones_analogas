import * as THREE from 'three';
import { EventBus } from '../utils/EventBus';
import { PlatformManager } from '../app/PlatformManager';

/**
 * Manages WebXR 'immersive-vr' session lifecycle for Meta Quest and compatible headsets.
 */
export class XRManager {
  private renderer: THREE.WebGLRenderer;
  private currentSession: XRSession | null = null;
  private isVRActive: boolean = false;

  constructor(renderer: THREE.WebGLRenderer) {
    this.renderer = renderer;
    this.bindEvents();
  }

  private bindEvents(): void {
    this.renderer.xr.addEventListener('sessionstart', () => {
      this.isVRActive = true;
      this.currentSession = this.renderer.xr.getSession();
      PlatformManager.getInstance().setMode('webxr');
      EventBus.getInstance().emit('xr:sessionStart', this.currentSession);
    });

    this.renderer.xr.addEventListener('sessionend', () => {
      this.isVRActive = false;
      this.currentSession = null;
      PlatformManager.getInstance().setMode('desktop');
      EventBus.getInstance().emit('xr:sessionEnd');
    });
  }

  public async enterVR(): Promise<boolean> {
    if (!('xr' in navigator)) {
      console.warn('[XRManager] WebXR not available in navigator');
      return false;
    }

    try {
      const sessionInit: XRSessionInit = {
        requiredFeatures: ['local-floor'],
        optionalFeatures: ['hand-tracking', 'bounded-floor']
      };

      const session = await (navigator as any).xr.requestSession('immersive-vr', sessionInit);
      await this.renderer.xr.setSession(session);
      return true;
    } catch (err) {
      console.error('[XRManager] Failed to start WebXR session:', err);
      // Fallback attempt without optional features
      try {
        const simpleSession = await (navigator as any).xr.requestSession('immersive-vr');
        await this.renderer.xr.setSession(simpleSession);
        return true;
      } catch (retryErr) {
        console.error('[XRManager] Retry failed:', retryErr);
        alert('No se pudo inicializar la sesión WebXR. Asegúrate de estar en un visor compatible (Meta Quest Browser) o con WebXR habilitado.');
        return false;
      }
    }
  }

  public async exitVR(): Promise<void> {
    if (this.currentSession) {
      try {
        await this.currentSession.end();
      } catch (e) {
        console.warn('[XRManager] Error ending session:', e);
      }
    }
  }

  public getIsVRActive(): boolean {
    return this.isVRActive;
  }

  public getSession(): XRSession | null {
    return this.currentSession;
  }
}
