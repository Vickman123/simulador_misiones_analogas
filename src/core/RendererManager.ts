import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

export class RendererManager {
  public readonly renderer: THREE.WebGLRenderer;
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(CONFIG.GRAPHICS.DESKTOP_PIXEL_RATIO);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    if (CONFIG.GRAPHICS.SHADOWS_ENABLED) {
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    // Enable WebXR support
    this.renderer.xr.enabled = true;

    this.container.appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize);
  }

  private onWindowResize = (): void => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  public setAnimationLoop(callback: ((time: DOMHighResTimeStamp, frame?: any) => void) | null): void {
    this.renderer.setAnimationLoop(callback);
  }

  public render(scene: THREE.Scene, camera: THREE.Camera): void {
    this.renderer.render(scene, camera);
  }

  public dispose(): void {
    window.removeEventListener('resize', this.onWindowResize);
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}
