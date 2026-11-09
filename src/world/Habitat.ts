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

    // 1. Pristine White Cleanroom Epoxy Floor
    const floorTexture = AssetLoader.getInstance().createFloorTexture();
    const floorGeo = new THREE.CylinderGeometry(radius, radius, 0.2, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      map: floorTexture,
      roughness: 0.22,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.1;
    floor.receiveShadow = true;
    this.group.add(floor);

    // 2. High-Grade White Cleanroom Ceiling Structure
    const ceilingGeo = new THREE.CylinderGeometry(radius, radius, 0.2, 32);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.08
    });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.y = height + 0.1;
    this.group.add(ceiling);

    // Ceiling Recessed Luminous Ring Fixture in Central Hub
    const luminaireGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 48);
    const luminaireMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: 0.95,
      roughness: 0.1
    });
    const luminaire = new THREE.Mesh(luminaireGeo, luminaireMat);
    luminaire.rotation.x = Math.PI / 2;
    luminaire.position.set(0, height - 0.02, 0);
    this.group.add(luminaire);

    // 3. Habitat Perimeter Walls with Large Observation Window
    // Sterile satin-white aerospace composite panels
    const segments = 16;
    const angleStep = (Math.PI * 2) / segments;
    const wallHeight = height;

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.12
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

    // 4. White Composite Vertical Columns (Ribs) with brushed metallic trims
    const ribGeo = new THREE.BoxGeometry(0.32, wallHeight, 0.36);
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.35,
      roughness: 0.25
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
   * Internal dividing walls creating 4 specialized analog habitat rooms:
   * - Central Hub (Center)
   * - West Wing:
   *     - Zona 01: Comedor y Convivencia (Mess Hall & Galley)
   *     - Zona 02: Camarotes de la Tripulación (Crew Quarters)
   * - East Wing:
   *     - Zona 03: Laboratorio Científico y Geología (Science & Geology Lab)
   *     - Zona 04: Esclusa y Estación de Trajes EVA (Suit Bay & Airlock)
   */
  private buildInteriorPartitions(height: number): void {
    const partitionMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.32,
      metalness: 0.12
    });

    const headerMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      roughness: 0.25,
      metalness: 0.3
    });

    const cyanTrimMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_CYAN
    });

    // Helper to create illuminated doorway sign plates
    const createDoorSign = (title: string, subtitle: string, colorHex: string): THREE.Mesh => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 512, 128);

      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 6;
      ctx.strokeRect(6, 6, 500, 116);

      ctx.fillStyle = colorHex;
      ctx.font = 'bold 28px "Rajdhani", "Orbitron", monospace, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, 256, 50);

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 20px monospace, sans-serif';
      ctx.fillText(subtitle, 256, 92);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const signMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      const signGeo = new THREE.PlaneGeometry(1.6, 0.4);
      return new THREE.Mesh(signGeo, signMat);
    };

    // ==========================================
    // WEST WING PARTITION (x = -3.2)
    // ==========================================
    // 1. North Wall Segment: from z = -10.5 to z = -4.5 (length 6.0, center z = -7.5)
    const westNorthWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 6.0), partitionMat);
    westNorthWall.position.set(-3.2, height / 2, -7.5);
    this.group.add(westNorthWall);

    // Doorway 1: Crew Quarters (z from -4.5 to -2.5, width 2.0m, center z = -3.5)
    const westDoor1Header = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.9, 2.0), headerMat);
    westDoor1Header.position.set(-3.2, height - 0.45, -3.5);
    this.group.add(westDoor1Header);

    const signCrew = createDoorSign('ZONA 02 // DORMITORIOS', 'CAMAROTES TRIPULACIÓN', '#38bdf8');
    signCrew.position.set(-3.05, height - 0.45, -3.5);
    signCrew.rotation.y = -Math.PI / 2;
    this.group.add(signCrew);

    // 2. Center Wall Segment: from z = -2.5 to z = 0.5 (length 3.0, center z = -1.0)
    const westCenterWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 3.0), partitionMat);
    westCenterWall.position.set(-3.2, height / 2, -1.0);
    this.group.add(westCenterWall);

    // 3. Divider Wall between Crew Quarters and Mess Hall (z = -1.0, x from -10.5 to -3.2)
    const dormDivider = new THREE.Mesh(new THREE.BoxGeometry(7.3, height, 0.2), partitionMat);
    dormDivider.position.set(-6.85, height / 2, -1.0);
    this.group.add(dormDivider);

    // Doorway 2: Mess Hall (z from 0.5 to 2.5, width 2.0m, center z = 1.5)
    const westDoor2Header = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.9, 2.0), headerMat);
    westDoor2Header.position.set(-3.2, height - 0.45, 1.5);
    this.group.add(westDoor2Header);

    const signMess = createDoorSign('ZONA 01 // COMEDOR', 'GALLEY & CONVIVENCIA', '#fbbf24');
    signMess.position.set(-3.05, height - 0.45, 1.5);
    signMess.rotation.y = -Math.PI / 2;
    this.group.add(signMess);

    // 4. South Wall Segment: from z = 2.5 to z = 10.5 (length 8.0, center z = 6.5)
    const westSouthWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 8.0), partitionMat);
    westSouthWall.position.set(-3.2, height / 2, 6.5);
    this.group.add(westSouthWall);

    // ==========================================
    // EAST WING PARTITION (x = 3.2)
    // ==========================================
    // 1. North Wall Segment: from z = -10.5 to z = -4.5 (length 6.0, center z = -7.5)
    const eastNorthWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 6.0), partitionMat);
    eastNorthWall.position.set(3.2, height / 2, -7.5);
    this.group.add(eastNorthWall);

    // Doorway 3: Science & Geology Lab (z from -4.5 to -2.5, width 2.0m, center z = -3.5)
    const eastDoor1Header = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.9, 2.0), headerMat);
    eastDoor1Header.position.set(3.2, height - 0.45, -3.5);
    this.group.add(eastDoor1Header);

    const signScience = createDoorSign('ZONA 03 // LABORATORIO', 'GEOLOGÍA & BIOLOGÍA', '#4ade80');
    signScience.position.set(3.05, height - 0.45, -3.5);
    signScience.rotation.y = Math.PI / 2;
    this.group.add(signScience);

    // 2. Center Wall Segment: from z = -2.5 to z = 0.5 (length 3.0, center z = -1.0)
    const eastCenterWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 3.0), partitionMat);
    eastCenterWall.position.set(3.2, height / 2, -1.0);
    this.group.add(eastCenterWall);

    // 3. Divider Wall between Science Lab and Suit Bay (z = -1.0, x from 3.2 to 10.5)
    const labDivider = new THREE.Mesh(new THREE.BoxGeometry(7.3, height, 0.2), partitionMat);
    labDivider.position.set(6.85, height / 2, -1.0);
    this.group.add(labDivider);

    // Doorway 4: EVA Suit Bay & Airlock (z from 0.5 to 2.5, width 2.0m, center z = 1.5)
    const eastDoor2Header = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.9, 2.0), headerMat);
    eastDoor2Header.position.set(3.2, height - 0.45, 1.5);
    this.group.add(eastDoor2Header);

    const signSuit = createDoorSign('ZONA 04 // ESCLUSA EVA', 'TRAJES Y SALIDA A MARTE', '#facc15');
    signSuit.position.set(3.05, height - 0.45, 1.5);
    signSuit.rotation.y = Math.PI / 2;
    this.group.add(signSuit);

    // 4. South Wall Segment: from z = 2.5 to z = 10.5 (length 8.0, center z = 6.5)
    const eastSouthWall = new THREE.Mesh(new THREE.BoxGeometry(0.2, height, 8.0), partitionMat);
    eastSouthWall.position.set(3.2, height / 2, 6.5);
    this.group.add(eastSouthWall);

    // Architectural Doorway trim lights along archways
    const archwayConfigs = [
      { x: -3.2, z: -3.5 },
      { x: -3.2, z: 1.5 },
      { x: 3.2, z: -3.5 },
      { x: 3.2, z: 1.5 }
    ];

    for (const cfg of archwayConfigs) {
      const archLight = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 2.0), cyanTrimMat);
      archLight.position.set(cfg.x, height - 0.92, cfg.z);
      this.group.add(archLight);
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

    // Window frame border - brushed aerospace titanium/white
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      metalness: 0.8,
      roughness: 0.25
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
