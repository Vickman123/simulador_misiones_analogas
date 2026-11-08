import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

/**
 * Lighting architecture for the Mars Analog Habitat.
 * Blends warm 3200K operational interior illumination with exterior Martian daylight and emergency states.
 */
export class HabitatLighting {
  public readonly group: THREE.Group;
  private ambientLight: THREE.AmbientLight;
  private sunLight: THREE.DirectionalLight;
  private interiorDownlights: THREE.PointLight[] = [];
  private emergencyLights: THREE.PointLight[] = [];
  private isEmergencyActive: boolean = false;
  private pulseTime: number = 0;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HabitatLighting';

    // 1. Ambient baseline
    this.ambientLight = new THREE.AmbientLight(0xfff0e0, 0.45);
    this.group.add(this.ambientLight);

    // 2. Exterior Martian Sun
    this.sunLight = new THREE.DirectionalLight(0xffd1a4, 1.2);
    this.sunLight.position.set(40, 30, -60);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 150;
    this.sunLight.shadow.camera.left = -20;
    this.sunLight.shadow.camera.right = 20;
    this.sunLight.shadow.camera.top = 20;
    this.sunLight.shadow.camera.bottom = -20;
    this.sunLight.shadow.bias = -0.001;
    this.group.add(this.sunLight);

    // 3. Interior Ceiling Downlights (Warm 3200K Halogen/LED)
    const interiorPositions = [
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.4, 0),       // Central hub
      new THREE.Vector3(-3.2, CONFIG.HABITAT.HEIGHT - 0.4, -2.5), // Life support alcove
      new THREE.Vector3(3.2, CONFIG.HABITAT.HEIGHT - 0.4, -2.5),  // Science alcove
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.4, 3.2)      // Airlock & Storage area
    ];

    interiorPositions.forEach((pos, idx) => {
      const pl = new THREE.PointLight(CONFIG.COLORS.WARM_INTERIOR_LIGHT, 0.85, 9, 1.8);
      pl.position.copy(pos);
      pl.name = `InteriorDownlight_${idx}`;
      this.group.add(pl);
      this.interiorDownlights.push(pl);
    });

    // 4. Emergency Red Strobes (Positioned along perimeter ribs)
    const emergencyPositions = [
      new THREE.Vector3(-4.5, CONFIG.HABITAT.HEIGHT - 0.5, 0),
      new THREE.Vector3(4.5, CONFIG.HABITAT.HEIGHT - 0.5, 0),
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.5, -4.5)
    ];

    emergencyPositions.forEach((pos, idx) => {
      const em = new THREE.PointLight(CONFIG.COLORS.TECH_RED, 0, 8, 2.0);
      em.position.copy(pos);
      em.name = `EmergencyLight_${idx}`;
      this.group.add(em);
      this.emergencyLights.push(em);
    });
  }

  public setEmergencyMode(active: boolean): void {
    this.isEmergencyActive = active;
    if (!active) {
      // Restore nominal lighting
      this.ambientLight.color.setHex(0xfff0e0);
      this.ambientLight.intensity = 0.45;
      this.interiorDownlights.forEach((pl) => {
        pl.color.setHex(CONFIG.COLORS.WARM_INTERIOR_LIGHT);
        pl.intensity = 0.85;
      });
      this.emergencyLights.forEach((el) => {
        el.intensity = 0;
      });
    } else {
      // Dim interior nominal lights
      this.ambientLight.color.setHex(0x330005);
      this.ambientLight.intensity = 0.25;
      this.interiorDownlights.forEach((pl) => {
        pl.intensity = 0.2;
      });
    }
  }

  public update(delta: number): void {
    if (this.isEmergencyActive) {
      this.pulseTime += delta * 4.5;
      // Sinusoidal alarm strobe pulse between 0.3 and 2.5 intensity
      const pulse = (Math.sin(this.pulseTime) + 1) * 0.5;
      const intensity = 0.4 + pulse * 2.2;

      this.emergencyLights.forEach((el) => {
        el.intensity = intensity;
      });
    }
  }
}
