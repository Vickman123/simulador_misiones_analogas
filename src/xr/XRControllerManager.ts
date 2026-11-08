import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

export interface XRControllerPair {
  controller: THREE.XRTargetRaySpace;
  grip: THREE.XRGripSpace;
  rayLine: THREE.Line;
  reticle: THREE.Mesh;
  index: number;
}

/**
 * Manages Quest Touch controller models, laser pointers, and targeting markers.
 */
export class XRControllerManager {
  private renderer: THREE.WebGLRenderer;
  private cameraRig: THREE.Group;
  public controllers: XRControllerPair[] = [];

  constructor(renderer: THREE.WebGLRenderer, cameraRig: THREE.Group) {
    this.renderer = renderer;
    this.cameraRig = cameraRig;

    this.setupControllers();
  }

  private setupControllers(): void {
    for (let i = 0; i < 2; i++) {
      const controller = this.renderer.xr.getController(i);
      const grip = this.renderer.xr.getControllerGrip(i);

      // Create laser beam ray
      const rayGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -4.5)
      ]);
      const rayMaterial = new THREE.LineBasicMaterial({
        color: CONFIG.COLORS.TECH_CYAN,
        transparent: true,
        opacity: 0.65
      });
      const rayLine = new THREE.Line(rayGeometry, rayMaterial);
      rayLine.name = `RayLine_${i}`;
      controller.add(rayLine);

      // Visual ray tip dot
      const reticleGeo = new THREE.RingGeometry(0.015, 0.025, 16);
      const reticleMat = new THREE.MeshBasicMaterial({
        color: CONFIG.COLORS.TECH_CYAN,
        side: THREE.DoubleSide
      });
      const reticle = new THREE.Mesh(reticleGeo, reticleMat);
      reticle.position.set(0, 0, -4.5);
      reticle.visible = false;
      controller.add(reticle);

      // Add procedural futuristic controller grip representation
      const gripMesh = this.createControllerModel(i === 0 ? 'Left' : 'Right');
      grip.add(gripMesh);

      this.cameraRig.add(controller);
      this.cameraRig.add(grip);

      this.controllers.push({
        controller,
        grip,
        rayLine,
        reticle,
        index: i
      });
    }
  }

  private createControllerModel(hand: string): THREE.Group {
    const group = new THREE.Group();
    group.name = `ProceduralController_${hand}`;

    // Sleek ergonomic handle
    const handleGeo = new THREE.CylinderGeometry(0.018, 0.022, 0.12, 12);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x1a2130,
      metalness: 0.8,
      roughness: 0.3
    });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.rotation.x = Math.PI / 4;
    handle.position.set(0, -0.03, 0.04);
    group.add(handle);

    // Tracking sensor ring
    const ringGeo = new THREE.TorusGeometry(0.045, 0.006, 8, 24);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x2d3748,
      metalness: 0.9,
      roughness: 0.2
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    ring.position.set(0, 0.02, -0.03);
    group.add(ring);

    // Tech cyan glowing index indicator
    const ledGeo = new THREE.SphereGeometry(0.005, 8, 8);
    const ledMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_CYAN
    });
    const led = new THREE.Mesh(ledGeo, ledMat);
    led.position.set(0, 0.01, -0.01);
    group.add(led);

    return group;
  }

  public setRayVisibility(visible: boolean): void {
    for (const pair of this.controllers) {
      pair.rayLine.visible = visible;
    }
  }
}
