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

    // 1. High-clarity ambient base (luminous white space agency cleanroom)
    this.ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
    this.group.add(this.ambientLight);

    // 2. Diffuse Hemisphere Bounce Light (crisp 5500K daylight-white ceiling with reflective floor bounce)
    this.hemisphereLight = new THREE.HemisphereLight(0xf8faff, 0xe2e8f0, 0.95);
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

    // 4. Distributed Ceiling Downlights (Pure 5000K crisp white space laboratory LEDs)
    const interiorPositions = [
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.35, 0),       // Central hub center
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.35, -4.5),    // Central hub north (Mission control)
      new THREE.Vector3(0, CONFIG.HABITAT.HEIGHT - 0.35, 3.8),     // Central hub south
      new THREE.Vector3(-6.5, CONFIG.HABITAT.HEIGHT - 0.35, 4.5),  // Mess Hall & Galley
      new THREE.Vector3(-6.5, CONFIG.HABITAT.HEIGHT - 0.35, -5.0), // Crew Quarters
      new THREE.Vector3(6.5, CONFIG.HABITAT.HEIGHT - 0.35, -5.0),  // Science & Geology Lab
      new THREE.Vector3(6.5, CONFIG.HABITAT.HEIGHT - 0.35, 4.0),   // EVA Suit Bay & Airlock
      new THREE.Vector3(9.5, CONFIG.HABITAT.HEIGHT - 0.35, 5.2)    // Airlock Exit Vestibule
    ];

    interiorPositions.forEach((pos, idx) => {
      const pl = new THREE.PointLight(0xf8faff, 1.85, 14, 1.4);
      pl.position.copy(pos);
      pl.name = `InteriorDownlight_${idx}`;
      this.group.add(pl);
      this.interiorDownlights.push(pl);
    });

    // 5. Dedicated Station Task Lights (Direct focused lights on each interactive module)
    const stationLightConfigs = [
      {
        name: 'Task_LifeSupport',
        pos: new THREE.Vector3(-1.8, 2.5, 3.8),
        color: 0x00e5ff, // Tech cyan
        intensity: 1.8,
        distance: 6.5
      },
      {
        name: 'Task_ScienceStation',
        pos: new THREE.Vector3(6.0, 2.5, -3.2),
        color: 0x00e676, // Botanical green
        intensity: 1.8,
        distance: 6.5
      },
      {
        name: 'Task_ResourceCabinet',
        pos: new THREE.Vector3(1.8, 2.5, 3.8),
        color: 0xffb74d, // High-visibility amber
        intensity: 1.8,
        distance: 6.5
      },
      {
        name: 'Task_MissionControl',
        pos: new THREE.Vector3(0, 2.5, -4.8),
        color: 0x38bdf8, // Telemetry cyan-white
        intensity: 1.9,
        distance: 7.0
      },
      {
        name: 'Task_Airlock',
        pos: new THREE.Vector3(8.5, 2.5, 5.0),
        color: 0xffffff,
        intensity: 1.8,
        distance: 6.5
      },
      {
        name: 'Task_MessHall',
        pos: new THREE.Vector3(-6.8, 2.5, 4.5),
        color: 0xfffbeb,
        intensity: 1.8,
        distance: 8.0
      },
      {
        name: 'Task_CrewQuarters',
        pos: new THREE.Vector3(-6.8, 2.5, -5.5),
        color: 0xe0f2fe,
        intensity: 1.6,
        distance: 8.0
      },
      {
        name: 'Task_GeologyLab',
        pos: new THREE.Vector3(7.5, 2.5, -6.0),
        color: 0xa7f3d0,
        intensity: 1.8,
        distance: 8.0
      },
      {
        name: 'Task_SuitBay',
        pos: new THREE.Vector3(6.5, 2.5, 3.5),
        color: 0xffd600,
        intensity: 1.8,
        distance: 7.5
      },
      {
        name: 'Task_ExteriorAirlock',
        pos: new THREE.Vector3(11.8, 2.5, 5.5),
        color: 0xffffff,
        intensity: 2.2,
        distance: 12.0
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
      // Restore nominal bright cleanroom lighting
      this.ambientLight.color.setHex(0xffffff);
      this.ambientLight.intensity = 1.15;
      this.hemisphereLight.intensity = 0.95;

      this.interiorDownlights.forEach((pl) => {
        pl.color.setHex(0xf8faff);
        pl.intensity = 1.85;
      });

      this.workstationLights.forEach((tl) => {
        tl.intensity = 1.8;
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
