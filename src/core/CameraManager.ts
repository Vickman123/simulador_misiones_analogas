import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

export class CameraManager {
  public readonly camera: THREE.PerspectiveCamera;
  public readonly cameraRig: THREE.Group; // Rig group essential for WebXR head tracking & locomotion

  constructor() {
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(
      CONFIG.GRAPHICS.FOV,
      aspect,
      CONFIG.GRAPHICS.NEAR_PLANE,
      CONFIG.GRAPHICS.FAR_PLANE
    );

    // Initial position inside habitat
    this.camera.position.set(0, CONFIG.HABITAT.CAMERA_HEIGHT, 2);

    this.cameraRig = new THREE.Group();
    this.cameraRig.name = 'CameraRig';
    this.cameraRig.add(this.camera);

    window.addEventListener('resize', this.onWindowResize);
  }

  private onWindowResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  };

  public resetPosition(): void {
    this.cameraRig.position.set(0, 0, 0);
    this.camera.position.set(0, CONFIG.HABITAT.CAMERA_HEIGHT, 2);
    this.camera.rotation.set(0, 0, 0);
  }

  public dispose(): void {
    window.removeEventListener('resize', this.onWindowResize);
  }
}
