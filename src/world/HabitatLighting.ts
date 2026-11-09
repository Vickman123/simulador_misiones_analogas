import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

/**
 * Lighting architecture for the Mars Analog Habitat.
 * Provides high-visibility, crisp laboratory illumination with dedicated
 * workstation task lights and realistic ambient fill.
 */
export class HabitatLighting {
  public readonly group: THREE.Group;
  private ambientLight: THREE.AmbientLight;
  private hemisphereLight: THREE.HemisphereLight;
  private sunLight: THREE.DirectionalLight;
  private interiorDownlights: THREE.PointLight[] = [];
  private workstationLights: THREE.PointLight[] = [];
  private emergencyLights: THREE.PointLight[] = [];
  private isEmergencyActive: boolean = false;
  private pulseTime: number = 0;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HabitatLighting';

    // 1. High-clarity ambient base (warm white)
    this.ambientLight = new THREE.AmbientLight(0xfff8ee, 0.9);
    this.group.add(this.ambientLight);

    // 2. Diffuse Hemisphere Bounce Light (eliminates pitch-black corners under desks and walls)
    this.hemisphereLight = new THREE.HemisphereLight(0xf0f6ff, 0x3d4452, 0.8);
    this.group.add(this.hemisphereLight);

    // 3. Exterior Martian Sun shining through the panoramic window
    this.sunLight = new THREE.DirectionalLight(0xffd1a4, 1.4);
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

    // 4. Distributed Ceiling Downlights (Warm technical 3200K LED)
    const interiorPositions = [
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.35, 0),       // Central hub
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.35, -3.2),    // North quadrant (near window & mission control)
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.35, 3.2),     // South quadrant (near airlock & storage)
      new THREE.Vector3(-3.2, CONFIG.HABITAT.HEIGHT - 0.35, -1.2), // West quadrant (Life support approach)
      new THREE.Vector3(3.2, CONFIG.HABITAT.HEIGHT - 0.35, -1.2),  // East quadrant (Science station approach)
      new THREE.Vector3(-2.8, CONFIG.HABITAT.HEIGHT - 0.35, 2.8)   // Storage corridor
    ];

    interiorPositions.forEach((pos, idx) => {
      const pl = new THREE.PointLight(CONFIG.COLORS.WARM_INTERIOR_LIGHT, 1.6, 14, 1.5);
      pl.position.copy(pos);
      pl.name = `InteriorDownlight_${idx}`;
      this.group.add(pl);
      this.interiorDownlights.push(pl);
    });

    // 5. Dedicated Station Task Lights (Direct focused lights on each interactive module)
    const stationLightConfigs = [
      {
        name: 'Task_LifeSupport',
        pos: new THREE.Vector3(-5.2, 2.5, 0),
        color: 0x00e5ff, // Tech cyan
        intensity: 1.6,
        distance: 6.5
      },
      {
        name: 'Task_ScienceStation',
        pos: new THREE.Vector3(5.2, 2.5, 0),
        color: 0x00e676, // Botanical green
        intensity: 1.6,
        distance: 6.5
      },
      {
        name: 'Task_ResourceCabinet',
        pos: new THREE.Vector3(-3.8, 2.5, 3.8),
        color: 0xffb74d, // High-visibility amber
        intensity: 1.5,
        distance: 5.5
      },
      {
        name: 'Task_MissionControl',
        pos: new THREE.Vector3(0, 2.5, -5.2),
        color: 0x80d8ff, // Telemetry cyan-white
        intensity: 1.6,
        distance: 6.5
      },
      {
        name: 'Task_Airlock',
        pos: new THREE.Vector3(3.8, 2.5, 3.8),
        color: 0xffffff,
        intensity: 1.2,
        distance: 5.0
      }
    ];

    stationLightConfigs.forEach((cfg) => {
      const tl = new THREE.PointLight(cfg.color, cfg.intensity, cfg.distance, 1.5);
      tl.position.copy(cfg.pos);
      tl.name = cfg.name;
      this.group.add(tl);
      this.workstationLights.push(tl);
    });

    // 6. Emergency Red Strobes (Positioned along perimeter ribs)
    const emergencyPositions = [
      new THREE.Vector3(-4.5, CONFIG.HABITAT.HEIGHT - 0.5, 0),
      new THREE.Vector3(4.5, CONFIG.HABITAT.HEIGHT - 0.5, 0),
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.5, -4.5),
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.5, 4.5)
    ];

    emergencyPositions.forEach((pos, idx) => {
      const em = new THREE.PointLight(CONFIG.COLORS.TECH_RED, 0, 10, 1.8);
      em.position.copy(pos);
      em.name = `EmergencyLight_${idx}`;
      this.group.add(em);
      this.emergencyLights.push(em);
    });
  }

  public setEmergencyMode(active: boolean): void {
    this.isEmergencyActive = active;
    if (!active) {
      // Restore nominal bright lighting
      this.ambientLight.color.setHex(0xfff8ee);
      this.ambientLight.intensity = 0.9;
      this.hemisphereLight.intensity = 0.8;

      this.interiorDownlights.forEach((pl) => {
        pl.color.setHex(CONFIG.COLORS.WARM_INTERIOR_LIGHT);
        pl.intensity = 1.6;
      });

      this.workstationLights.forEach((tl) => {
        tl.intensity = 1.6;
      });

      this.emergencyLights.forEach((el) => {
        el.intensity = 0;
      });
    } else {
      // Dim interior nominal lights during contingency
      this.ambientLight.color.setHex(0x330005);
      this.ambientLight.intensity = 0.35;
      this.hemisphereLight.intensity = 0.25;

      this.interiorDownlights.forEach((pl) => {
        pl.intensity = 0.25;
      });

      this.workstationLights.forEach((tl) => {
        tl.intensity = 0.35;
      });
    }
  }

  public update(delta: number): void {
    if (this.isEmergencyActive) {
      this.pulseTime += delta * 4.5;
      // Sinusoidal alarm strobe pulse between 0.4 and 3.0 intensity
      const pulse = (Math.sin(this.pulseTime) + 1) * 0.5;
      const intensity = 0.5 + pulse * 2.8;

      this.emergencyLights.forEach((el) => {
        el.intensity = intensity;
      });
    }
  }
}
