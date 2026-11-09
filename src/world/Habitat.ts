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
      // Leave opening at southeast for EVA Airlock exit door (around index 3)
      const isAirlockExit = i === 3;

      if (!isWindowOpening && !isAirlockExit) {
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
      if (i === 3) continue; // Don't block airlock exit doorway
      const angle = i * angleStep;
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(Math.cos(angle) * (radius - 0.1), wallHeight / 2, Math.sin(angle) * (radius - 0.1));
      rib.rotation.y = -angle;
      this.group.add(rib);
    }

    // 5. Build Interior Room Partitions & Doorways
    this.buildInteriorPartitions(height);

    // 6. Build Exterior EVA Ramp to Martian Soil
    this.buildExteriorRamp(radius);

    // 7. Panoramic Observation Window to Mars
    this.buildPanoramicWindow(radius, height);
  }

  /**
   * Internal dividing walls creating specialized analog habitat rooms:
   * - Central Hub (Center)
   * - Mess Hall & Galley (West)
   * - Crew Quarters (North-West)
   * - Science & Geology Lab (East)
   * - EVA Suit Bay & Airlock Chamber (South-East)
   */
  private buildInteriorPartitions(height: number): void {
    const partitionMat = new THREE.MeshStandardMaterial({
      color: 0x1e2736,
      roughness: 0.6,
      metalness: 0.4
    });

    const trimMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_CYAN,
      wireframe: false
    });

    // West Partition: separates Central Hub from Mess Hall and Crew Quarters
    // Wall segment 1 (North of doorway)
    const westWall1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 4.0), partitionMat);
    westWall1.position.set(-3.2, height / 2, -5.5);
    this.group.add(westWall1);

    // Wall segment 2 (South of doorway, separates Mess Hall)
    const westWall2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 4.5), partitionMat);
    westWall2.position.set(-3.2, height / 2, 3.5);
    this.group.add(westWall2);

    // Doorway Header over West entrance
    const westDoorHeader = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 2.6), partitionMat);
    westDoorHeader.position.set(-3.2, height - 0.4, -1.0);
    this.group.add(westDoorHeader);

    // Divider between Crew Quarters and Mess Hall (running east-west)
    const dormDivider = new THREE.Mesh(new THREE.BoxGeometry(6.5, height, 0.2), partitionMat);
    dormDivider.position.set(-6.5, height / 2, -1.5);
    this.group.add(dormDivider);

    // East Partition: separates Central Hub from Science Lab and Airlock
    // Wall segment 1 (Science Lab north)
    const eastWall1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 4.0), partitionMat);
    eastWall1.position.set(3.2, height / 2, -5.5);
    this.group.add(eastWall1);

    // Wall segment 2 (Airlock wall)
    const eastWall2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 4.5), partitionMat);
    eastWall2.position.set(3.2, height / 2, 3.5);
    this.group.add(eastWall2);

    // Doorway Header over East entrance
    const eastDoorHeader = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 2.6), partitionMat);
    eastDoorHeader.position.set(3.2, height - 0.4, -1.0);
    this.group.add(eastDoorHeader);

    // Divider between Science Lab and Airlock Chamber
    const labDivider = new THREE.Mesh(new THREE.BoxGeometry(6.5, height, 0.2), partitionMat);
    labDivider.position.set(6.5, height / 2, 1.2);
    this.group.add(labDivider);

    // Architectural Doorway trim lights
    const trimPositions = [-3.2, 3.2];
    for (const tx of trimPositions) {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.05, 2.6), trimMat);
      arch.position.set(tx, height - 0.82, -1.0);
      this.group.add(arch);
    }
  }

  /**
   * Exterior platform & ramp leading from the EVA airlock to the Martian ground
   */
  private buildExteriorRamp(radius: number): void {
    const rampGroup = new THREE.Group();
    rampGroup.name = 'ExteriorEVARamp';

    const rampMat = new THREE.MeshStandardMaterial({
      color: 0x2d3748,
      metalness: 0.8,
      roughness: 0.3
    });

    // Airlock exit vestibule platform
    const platformGeo = new THREE.BoxGeometry(3.2, 0.2, 3.0);
    const platform = new THREE.Mesh(platformGeo, rampMat);
    platform.position.set(radius + 0.5, -0.05, 5.5);
    rampGroup.add(platform);

    // Sloped ramp down to Martian soil
    const rampGeo = new THREE.BoxGeometry(4.0, 0.15, 2.4);
    const ramp = new THREE.Mesh(rampGeo, rampMat);
    ramp.position.set(radius + 3.2, -0.15, 5.5);
    ramp.rotation.z = 0.08;
    rampGroup.add(ramp);

    // Yellow hazard safety strip along ramp edge
    const stripGeo = new THREE.BoxGeometry(4.0, 0.04, 0.1);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xffd600 });
    const strip1 = new THREE.Mesh(stripGeo, stripMat);
    strip1.position.set(radius + 3.2, -0.05, 4.35);
    strip1.rotation.z = 0.08;
    rampGroup.add(strip1);

    const strip2 = new THREE.Mesh(stripGeo, stripMat);
    strip2.position.set(radius + 3.2, -0.05, 6.65);
    strip2.rotation.z = 0.08;
    rampGroup.add(strip2);

    this.group.add(rampGroup);
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
