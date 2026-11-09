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

    // 1. Pristine White Cleanroom Epoxy Floor with Matte-Black Seams
    const floorTexture = AssetLoader.getInstance().createFloorTexture();
    const floorGeo = new THREE.CylinderGeometry(radius, radius, 0.2, 36);
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
    const ceilingGeo = new THREE.CylinderGeometry(radius, radius, 0.2, 36);
    const ceilingMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.35,
      metalness: 0.08
    });
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.position.y = height + 0.1;
    this.group.add(ceiling);

    // Dark Perimeter Cornice along ceiling edge
    const corniceGeo = new THREE.TorusGeometry(radius - 0.2, 0.12, 8, 36);
    const blackTrimMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.5,
      metalness: 0.5
    });
    const ceilingRim = new THREE.Mesh(corniceGeo, blackTrimMat);
    ceilingRim.rotation.x = Math.PI / 2;
    ceilingRim.position.set(0, height - 0.04, 0);
    this.group.add(ceilingRim);

    // Ceiling Recessed Luminous Ring Fixture in Central Hub
    const luminaireGeo = new THREE.TorusGeometry(5.2, 0.1, 16, 48);
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

    // Recessed Luminous Rings in West and East wings
    for (const wingX of [-10.5, 10.5]) {
      const wingRingGeo = new THREE.TorusGeometry(3.2, 0.08, 16, 36);
      const wingRing = new THREE.Mesh(wingRingGeo, luminaireMat);
      wingRing.rotation.x = Math.PI / 2;
      wingRing.position.set(wingX, height - 0.02, 0);
      this.group.add(wingRing);
    }

    // 3. Habitat Perimeter Walls with Large Observation Window
    // Sterile satin-white aerospace composite panels with matte-black baseboards & moldings
    const segments = 20;
    const angleStep = (Math.PI * 2) / segments;
    const wallHeight = height;

    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.12
    });

    const baseboardMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.6,
      metalness: 0.4
    });

    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      // Skip north-facing segments (around angle = -PI/2) for the panoramic observation window
      const isWindowOpening = i >= 13 && i <= 17;
      // Leave opening at East-Southeast for EVA Airlock exit door leading to the ramp (z around 7.5, x > 14)
      const isAirlockExit = x > 14.0 && z >= 4.5 && z <= 10.5;

      if (!isWindowOpening && !isAirlockExit) {
        const segWidth = radius * 0.34;
        const wallSegmentGroup = new THREE.Group();

        // Main white wall panel
        const wallSegmentGeo = new THREE.BoxGeometry(segWidth, wallHeight, 0.25);
        const wallSegment = new THREE.Mesh(wallSegmentGeo, wallMat);
        wallSegment.position.y = wallHeight / 2;
        wallSegment.receiveShadow = true;
        wallSegmentGroup.add(wallSegment);

        // Black baseboard kickplate (márgenes negros en la base)
        const baseboardGeo = new THREE.BoxGeometry(segWidth + 0.02, 0.18, 0.27);
        const baseboard = new THREE.Mesh(baseboardGeo, baseboardMat);
        baseboard.position.y = 0.09;
        wallSegmentGroup.add(baseboard);

        // Black top molding (márgenes negros en la parte superior)
        const topMoldGeo = new THREE.BoxGeometry(segWidth + 0.02, 0.14, 0.27);
        const topMold = new THREE.Mesh(topMoldGeo, baseboardMat);
        topMold.position.y = wallHeight - 0.07;
        wallSegmentGroup.add(topMold);

        wallSegmentGroup.position.set(x, 0, z);
        wallSegmentGroup.rotation.y = -angle + Math.PI / 2;
        this.group.add(wallSegmentGroup);
      }
    }

    // 4. Structural Columns (Ribs) with Dual-Tone White & Black Trims
    const ribGeo = new THREE.BoxGeometry(0.38, wallHeight, 0.42);
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.25
    });

    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep;
      const ribX = Math.cos(angle) * (radius - 0.1);
      const ribZ = Math.sin(angle) * (radius - 0.1);

      // Don't place a column in the middle of the airlock doorway
      if (ribX > 14.0 && ribZ >= 4.5 && ribZ <= 10.5) continue;

      const ribGroup = new THREE.Group();

      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.y = wallHeight / 2;
      ribGroup.add(rib);

      // Black rib base
      const ribBase = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.2, 0.46), baseboardMat);
      ribBase.position.y = 0.1;
      ribGroup.add(ribBase);

      // Black rib cap
      const ribCap = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.46), baseboardMat);
      ribCap.position.y = wallHeight - 0.08;
      ribGroup.add(ribCap);

      ribGroup.position.set(ribX, 0, ribZ);
      ribGroup.rotation.y = -angle;
      this.group.add(ribGroup);
    }

    // 5. Build Interior Room Partitions & Doorways
    this.buildInteriorPartitions(height);

    // 6. Build Exterior EVA Ramp to Martian Soil
    this.buildExteriorRamp(radius);

    // 7. Panoramic Observation Window to Mars
    this.buildPanoramicWindow(radius, height);
  }

  /**
   * Internal dividing walls creating 4 specialized, expansive analog habitat rooms:
   * - Central Hub: Open 10m-wide atrium with mission control and central hologram
   * - West Wing:
   *     - Zona 01: Comedor y Convivencia (Mess Hall & Galley)
   *     - Zona 02: Camarotes de la Tripulación (Crew Quarters)
   * - East Wing:
   *     - Zona 03: Laboratorio Científico y Geología (Science & Geology Lab)
   *     - Zona 04: Esclusa y Estación de Trajes EVA (Suit Bay & Airlock)
   */
  private buildInteriorPartitions(height: number): void {
    const partitionMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1
    });

    const blackFrameMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.6,
      metalness: 0.4
    });

    const headerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.6
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

      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 512, 128);

      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 6;
      ctx.strokeRect(6, 6, 500, 116);

      ctx.fillStyle = colorHex;
      ctx.font = 'bold 28px "Rajdhani", "Orbitron", monospace, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(title, 256, 48);

      ctx.fillStyle = '#f8fafc';
      ctx.font = 'bold 20px monospace, sans-serif';
      ctx.fillText(subtitle, 256, 90);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      const signMat = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
      const signGeo = new THREE.PlaneGeometry(2.4, 0.55);
      return new THREE.Mesh(signGeo, signMat);
    };

    // Helper to build a composite wall with black baseboard and top molding
    const createPartitionBlock = (width: number, depth: number, x: number, z: number): THREE.Group => {
      const grp = new THREE.Group();
      // White composite wall
      const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), partitionMat);
      wallMesh.position.set(x, height / 2, z);
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      grp.add(wallMesh);

      // Black baseboard kickplate
      const baseMesh = new THREE.Mesh(new THREE.BoxGeometry(width + 0.04, 0.18, depth + 0.04), blackFrameMat);
      baseMesh.position.set(x, 0.09, z);
      grp.add(baseMesh);

      // Black top cornice molding
      const topMesh = new THREE.Mesh(new THREE.BoxGeometry(width + 0.04, 0.14, depth + 0.04), blackFrameMat);
      topMesh.position.set(x, height - 0.07, z);
      grp.add(topMesh);

      return grp;
    };

    // ==========================================
    // WEST WING PARTITION (x = -5.0)
    // ==========================================
    // 1. North Wall Segment: from z = -16.5 to z = -5.5 (length 11.0, center z = -11.0)
    this.group.add(createPartitionBlock(0.24, 11.0, -5.0, -11.0));

    // Doorway 1: Crew Quarters (z from -5.5 to -2.0, width 3.5m, center z = -3.75)
    const westDoor1Header = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1.0, 3.5), headerMat);
    westDoor1Header.position.set(-5.0, height - 0.5, -3.75);
    this.group.add(westDoor1Header);

    const signCrew = createDoorSign('ZONA 02 // DORMITORIOS', 'CAMAROTES TRIPULACIÓN', '#38bdf8');
    signCrew.position.set(-4.82, height - 0.5, -3.75);
    signCrew.rotation.y = -Math.PI / 2;
    this.group.add(signCrew);

    // 2. Center Wall Segment: from z = -2.0 to z = 2.0 (length 4.0, center z = 0.0)
    this.group.add(createPartitionBlock(0.24, 4.0, -5.0, 0.0));

    // 3. Divider Wall between Crew Quarters and Mess Hall (z = 0.0, x from -16.5 to -5.0, length 11.5)
    this.group.add(createPartitionBlock(11.5, 0.24, -10.75, 0.0));

    // Doorway 2: Mess Hall (z from 2.0 to 5.5, width 3.5m, center z = 3.75)
    const westDoor2Header = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1.0, 3.5), headerMat);
    westDoor2Header.position.set(-5.0, height - 0.5, 3.75);
    this.group.add(westDoor2Header);

    const signMess = createDoorSign('ZONA 01 // COMEDOR', 'GALLEY & CONVIVENCIA', '#fbbf24');
    signMess.position.set(-4.82, height - 0.5, 3.75);
    signMess.rotation.y = -Math.PI / 2;
    this.group.add(signMess);

    // 4. South Wall Segment: from z = 5.5 to z = 16.5 (length 11.0, center z = 11.0)
    this.group.add(createPartitionBlock(0.24, 11.0, -5.0, 11.0));

    // ==========================================
    // EAST WING PARTITION (x = 5.0)
    // ==========================================
    // 1. North Wall Segment: from z = -16.5 to z = -5.5 (length 11.0, center z = -11.0)
    this.group.add(createPartitionBlock(0.24, 11.0, 5.0, -11.0));

    // Doorway 3: Science & Geology Lab (z from -5.5 to -2.0, width 3.5m, center z = -3.75)
    const eastDoor1Header = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1.0, 3.5), headerMat);
    eastDoor1Header.position.set(5.0, height - 0.5, -3.75);
    this.group.add(eastDoor1Header);

    const signScience = createDoorSign('ZONA 03 // LABORATORIO', 'GEOLOGÍA & BIOLOGÍA', '#4ade80');
    signScience.position.set(4.82, height - 0.5, -3.75);
    signScience.rotation.y = Math.PI / 2;
    this.group.add(signScience);

    // 2. Center Wall Segment: from z = -2.0 to z = 2.0 (length 4.0, center z = 0.0)
    this.group.add(createPartitionBlock(0.24, 4.0, 5.0, 0.0));

    // 3. Divider Wall between Science Lab and Suit Bay (z = 0.0, x from 5.0 to 16.5, length 11.5)
    this.group.add(createPartitionBlock(11.5, 0.24, 10.75, 0.0));

    // Doorway 4: EVA Suit Bay & Airlock (z from 2.0 to 5.5, width 3.5m, center z = 3.75)
    const eastDoor2Header = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1.0, 3.5), headerMat);
    eastDoor2Header.position.set(5.0, height - 0.5, 3.75);
    this.group.add(eastDoor2Header);

    const signSuit = createDoorSign('ZONA 04 // ESCLUSA EVA', 'TRAJES Y SALIDA A MARTE', '#facc15');
    signSuit.position.set(4.82, height - 0.5, 3.75);
    signSuit.rotation.y = Math.PI / 2;
    this.group.add(signSuit);

    // 4. South Wall Segment: from z = 5.5 to z = 16.5 (length 11.0, center z = 11.0)
    this.group.add(createPartitionBlock(0.24, 11.0, 5.0, 11.0));

    // Architectural Doorway trim lights along archways
    const archwayConfigs = [
      { x: -5.0, z: -3.75 },
      { x: -5.0, z: 3.75 },
      { x: 5.0, z: -3.75 },
      { x: 5.0, z: 3.75 }
    ];

    for (const cfg of archwayConfigs) {
      const archLight = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.05, 3.5), cyanTrimMat);
      archLight.position.set(cfg.x, height - 1.02, cfg.z);
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
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.3
    });

    // Airlock exit vestibule platform
    const platformGeo = new THREE.BoxGeometry(4.0, 0.25, 3.6);
    const platform = new THREE.Mesh(platformGeo, rampMat);
    platform.position.set(radius + 0.6, -0.05, 7.5);
    rampGroup.add(platform);

    // Sloped ramp down to Martian soil
    const rampGeo = new THREE.BoxGeometry(5.5, 0.18, 3.0);
    const ramp = new THREE.Mesh(rampGeo, rampMat);
    ramp.position.set(radius + 4.2, -0.18, 7.5);
    ramp.rotation.z = 0.08;
    rampGroup.add(ramp);

    // Yellow hazard safety strip along ramp edge
    const stripGeo = new THREE.BoxGeometry(5.5, 0.05, 0.12);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xffd600 });
    const strip1 = new THREE.Mesh(stripGeo, stripMat);
    strip1.position.set(radius + 4.2, -0.06, 6.0);
    strip1.rotation.z = 0.08;
    rampGroup.add(strip1);

    const strip2 = new THREE.Mesh(stripGeo, stripMat);
    strip2.position.set(radius + 4.2, -0.06, 9.0);
    strip2.rotation.z = 0.08;
    rampGroup.add(strip2);

    this.group.add(rampGroup);
  }

  private buildPanoramicWindow(radius: number, height: number): void {
    const windowGroup = new THREE.Group();
    windowGroup.name = 'PanoramicWindow';

    // Window frame border - Matte-Black Aerospace Titanium Frame
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      metalness: 0.85,
      roughness: 0.3
    });

    const windowWidth = CONFIG.HABITAT.WINDOW_WIDTH;
    const windowHeight = CONFIG.HABITAT.WINDOW_HEIGHT;

    // Top beam
    const topBeamGeo = new THREE.BoxGeometry(windowWidth + 0.6, 0.35, 0.35);
    const topBeam = new THREE.Mesh(topBeamGeo, frameMat);
    topBeam.position.set(0, height - 0.35, -radius + 0.15);
    windowGroup.add(topBeam);

    // Bottom sill
    const botBeamGeo = new THREE.BoxGeometry(windowWidth + 0.6, 0.45, 0.45);
    const botBeam = new THREE.Mesh(botBeamGeo, frameMat);
    botBeam.position.set(0, 0.65, -radius + 0.15);
    windowGroup.add(botBeam);

    // Ultra-clear reinforced Martian viewport glass
    const glassGeo = new THREE.PlaneGeometry(windowWidth, windowHeight);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xbee3f8,
      transmission: 0.94,
      transparent: true,
      opacity: 0.18,
      roughness: 0.04,
      metalness: 0.1,
      ior: 1.52,
      side: THREE.DoubleSide
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.position.set(0, height / 2 + 0.15, -radius + 0.15);
    windowGroup.add(glass);

    // Triple vertical mullions for architectural realism
    for (const offset of [-windowWidth / 3, 0, windowWidth / 3]) {
      const mullionGeo = new THREE.BoxGeometry(0.14, windowHeight, 0.22);
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
