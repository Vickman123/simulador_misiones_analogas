import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';
import { AssetLoader } from '../utils/AssetLoader';
import { HabitatEnvironment } from './HabitatEnvironment';
import { HabitatLighting } from './HabitatLighting';
import { HabitatObjects } from './HabitatObjects';

/**
 * Main Architectural Habitat Module assembly.
 */
export class Habitat {
  public readonly group: THREE.Group;
  public readonly environment: HabitatEnvironment;
  public readonly lighting: HabitatLighting;
  public readonly objects: HabitatObjects;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HabitatModule';

    this.environment = new HabitatEnvironment();
    this.lighting = new HabitatLighting();
    this.objects = new HabitatObjects();

    this.group.add(this.environment.group);
    this.group.add(this.lighting.group);
    this.group.add(this.objects.group);

    this.buildStructure();
  }

  private buildStructure(): void {
    const radius = CONFIG.HABITAT.RADIUS;
    const height = CONFIG.HABITAT.HEIGHT;

    // 1. Industrial Floor
    const floorTexture = AssetLoader.getInstance().createFloorTexture();
    const floorGeo = new THREE.CylinderGeometry(radius, radius, 0.2, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTexture,
      roughness: 0.6,
      metalness: 0.4
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.1;
    floor.receiveShadow = true;
    this.group.add(floor);

    // 2. Ceiling Structure
    const ceilingGeo = new THREE.CylinderGeometry(radius, radius, 0.2, 32);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0x181f2a,
      roughness: 0.7,
      metalness: 0.3
    });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.y = height + 0.1;
    this.group.add(ceiling);

    // 3. Habitat Perimeter Walls with Large Observation Window
    // We create wall segments around the perimeter, leaving an opening in the north (-Z) for the Martian window.
    const segments = 16;
    const angleStep = (Math.PI * 2) / segments;
    const wallHeight = height;

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x222a38,
      roughness: 0.75,
      metalness: 0.25
    });

    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      // Skip north-facing segments (around angle = -PI/2) for the panoramic observation window
      const isWindowOpening = i >= 11 && i <= 13;

      if (!isWindowOpening) {
        const wallSegmentGeo = new THREE.BoxGeometry(radius * 0.42, wallHeight, 0.25);
        const wallSegment = new THREE.Mesh(wallSegmentGeo, wallMat);

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        wallSegment.position.set(x, wallHeight / 2, z);
        wallSegment.rotation.y = -angle + Math.PI / 2;
        wallSegment.receiveShadow = true;
        this.group.add(wallSegment);
      }
    }

    // 4. Reinforced Structural Vertical Columns (Ribs)
    const ribGeo = new THREE.BoxGeometry(0.3, wallHeight, 0.35);
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0x0f1520,
      metalness: 0.8,
      roughness: 0.2
    });

    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(Math.cos(angle) * (radius - 0.1), wallHeight / 2, Math.sin(angle) * (radius - 0.1));
      rib.rotation.y = -angle;
      this.group.add(rib);
    }

    // 5. Panoramic Observation Window to Mars
    this.buildPanoramicWindow(radius, height);
  }

  private buildPanoramicWindow(radius: number, height: number): void {
    const windowGroup = new THREE.Group();
    windowGroup.name = 'PanoramicWindow';

    // Window frame border
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x111622,
      metalness: 0.9,
      roughness: 0.2
    });

    const windowWidth = CONFIG.HABITAT.WINDOW_WIDTH;
    const windowHeight = CONFIG.HABITAT.WINDOW_HEIGHT;

    // Top beam
    const topBeamGeo = new THREE.BoxGeometry(windowWidth + 0.4, 0.3, 0.3);
    const topBeam = new THREE.Mesh(topBeamGeo, frameMat);
    topBeam.position.set(0, height - 0.3, -radius + 0.15);
    windowGroup.add(topBeam);

    // Bottom sill
    const botBeamGeo = new THREE.BoxGeometry(windowWidth + 0.4, 0.4, 0.4);
    const botBeam = new THREE.Mesh(botBeamGeo, frameMat);
    botBeam.position.set(0, 0.6, -radius + 0.15);
    windowGroup.add(botBeam);

    // Ultra-clear reinforced Martian viewport glass
    const glassGeo = new THREE.PlaneGeometry(windowWidth, windowHeight);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xbee3f8,
      transmission: 0.92,
      transparent: true,
      opacity: 0.2,
      roughness: 0.05,
      metalness: 0.1,
      ior: 1.52,
      side: THREE.DoubleSide
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0, height / 2 + 0.15, -radius + 0.15);
    windowGroup.add(glass);

    // Dual vertical mullions for architectural realism
    for (const offset of [-windowWidth / 3, windowWidth / 3]) {
      const mullionGeo = new THREE.BoxGeometry(0.12, windowHeight, 0.18);
      const mullion = new THREE.Mesh(mullionGeo, frameMat);
      mullion.position.set(offset, height / 2 + 0.15, -radius + 0.15);
      windowGroup.add(mullion);
    }

    this.group.add(windowGroup);
  }

  public update(delta: number): void {
    this.environment.update(delta);
    this.lighting.update(delta);
    this.objects.update(delta);
  }
}
