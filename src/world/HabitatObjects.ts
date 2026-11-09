import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';
import { AssetLoader } from '../utils/AssetLoader';
import { InteractionManager, IInteractable } from '../core/InteractionManager';
import { EventBus } from '../utils/EventBus';

export class HabitatObjects {
  public readonly group: THREE.Group;

  // Real-time canvas updates for screens
  private lifeSupportCanvasUpdate?: () => void;
  private lifeSupportCtx?: CanvasRenderingContext2D;

  private scienceCanvasUpdate?: () => void;
  private scienceCtx?: CanvasRenderingContext2D;

  // Equipment references
  public lifeSupportConsole!: THREE.Group;
  public scienceStation!: THREE.Group;
  public resourceCabinet!: THREE.Group;
  public airlockPanel!: THREE.Group;
  public missionControlPanel!: THREE.Group;

  // Filter cartridge in cabinet
  public filterCartridgeMesh!: THREE.Mesh;
  private animTime: number = 0;
  private hologramMesh?: THREE.Mesh;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HabitatObjects';

    this.buildMissionControl();
    this.buildCentralHologram();
    this.buildLifeSupportConsole();
    this.buildScienceStation();
    this.buildResourceCabinet();
    this.buildAirlock();
    this.buildMessHall();
    this.buildCrewQuarters();
    this.buildGeologyLab();
    this.buildSuitBay();
    this.buildMartianExteriorProps();
  }

  /**
   * Helper to attach a glowing holographic ring indicator and floating sign above interactables
   */
  private createInteractionBadge(name: string, labelText: string, colorHex: number = CONFIG.COLORS.TECH_CYAN, yOffset = 1.6): THREE.Group {
    const badgeGroup = new THREE.Group();
    badgeGroup.position.y = yOffset;
    badgeGroup.name = `Badge_${name}`;

    // Floating pulsing ring (larger for better visibility)
    const ringGeo = new THREE.RingGeometry(0.24, 0.32, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.name = 'badge_ring';
    ring.rotation.x = Math.PI / 2;
    badgeGroup.add(ring);

    // Center icon diamond (floating octahedron)
    const iconGeo = new THREE.OctahedronGeometry(0.12, 0);
    const iconMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: false
    });
    const icon = new THREE.Mesh(iconGeo, iconMat);
    icon.name = 'badge_diamond';
    badgeGroup.add(icon);

    // Holographic billboard text badge
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // High-contrast semi-translucent dark pill
        ctx.fillStyle = 'rgba(8, 12, 22, 0.88)';
        ctx.beginPath();
        const hexStr = `#${colorHex.toString(16).padStart(6, '0')}`;
        ctx.roundRect(16, 16, 480, 96, 24);
        ctx.fill();

        ctx.strokeStyle = hexStr;
        ctx.lineWidth = 5;
        ctx.stroke();

        // Neon Glow border effect
        ctx.shadowColor = hexStr;
        ctx.shadowBlur = 12;

        // Label Text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px "Rajdhani", "Orbitron", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(labelText, 256, 64);

        const texture = new THREE.CanvasTexture(canvas);
        texture.minFilter = THREE.LinearFilter;
        const spriteMat = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          depthTest: false
        });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.name = 'badge_sprite';
        sprite.scale.set(1.5, 0.38, 1);
        sprite.position.set(0, 0.38, 0);
        badgeGroup.add(sprite);
      }
    } catch (e) {
      // Fallback if canvas is unavailable
    }

    return badgeGroup;
  }

  private buildMissionControl(): void {
    this.missionControlPanel = new THREE.Group();
    this.missionControlPanel.name = 'missionControlPanel';
    this.missionControlPanel.position.set(0, 0, -9.5);

    // Pristine white aerospace desk console with matte-black edge bevels
    const deskGeo = new THREE.BoxGeometry(4.4, 0.95, 1.4);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.22,
      metalness: 0.12
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.y = 0.475;
    desk.castShadow = true;
    desk.receiveShadow = true;
    this.missionControlPanel.add(desk);

    // Matte-black trim border around desktop (pequeños márgenes negros)
    const blackTrimGeo = new THREE.BoxGeometry(4.46, 0.06, 1.46);
    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });
    const blackTrim = new THREE.Mesh(blackTrimGeo, blackMat);
    blackTrim.position.y = 0.96;
    this.missionControlPanel.add(blackTrim);

    // Black pedestal base
    const baseGeo = new THREE.BoxGeometry(4.44, 0.12, 1.44);
    const base = new THREE.Mesh(baseGeo, blackMat);
    base.position.y = 0.06;
    this.missionControlPanel.add(base);

    // Main triple-display console rack
    const screenGeo = new THREE.BoxGeometry(3.2, 0.95, 0.08);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x050812,
      roughness: 0.15,
      metalness: 0.85,
      emissive: 0x032438,
      emissiveIntensity: 0.7
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.5, -0.25);
    screen.rotation.x = -0.1;
    this.missionControlPanel.add(screen);

    // Matte-black monitor chassis frame
    const chassisGeo = new THREE.BoxGeometry(3.28, 1.02, 0.12);
    const chassis = new THREE.Mesh(chassisGeo, blackMat);
    chassis.position.copy(screen.position);
    chassis.position.z -= 0.03;
    chassis.rotation.copy(screen.rotation);
    this.missionControlPanel.add(chassis);

    // Glowing cyan screen bezel
    const bezelGeo = new THREE.BoxGeometry(3.24, 0.98, 0.04);
    const bezelMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_CYAN,
      wireframe: true
    });
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.position.copy(screen.position);
    bezel.position.z += 0.02;
    bezel.rotation.copy(screen.rotation);
    this.missionControlPanel.add(bezel);

    const badge = this.createInteractionBadge('MissionControl', 'CENTRO DE CONTROL', CONFIG.COLORS.TECH_CYAN, 2.15);
    this.missionControlPanel.add(badge);

    this.group.add(this.missionControlPanel);

    // Register with InteractionManager
    const interactable: IInteractable = {
      id: 'missionControl',
      name: 'Centro de Mando y Telemetría',
      actionPrompt: 'Consultar estado general de la misión',
      object3D: this.missionControlPanel,
      canInteract: () => true,
      onHoverStart: () => {
        badge.scale.set(1.2, 1.2, 1.2);
      },
      onHoverEnd: () => {
        badge.scale.set(1, 1, 1);
      },
      onInteract: () => {
        EventBus.getInstance().emit('ui:openBriefing');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  /**
   * Central Holographic Mars Projector in Hub
   */
  private buildCentralHologram(): void {
    const holoGroup = new THREE.Group();
    holoGroup.name = 'CentralHologram';
    holoGroup.position.set(0, 0, -2.5);

    // Matte-black base kickplate
    const basePlateGeo = new THREE.CylinderGeometry(0.85, 0.9, 0.12, 32);
    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });
    const basePlate = new THREE.Mesh(basePlateGeo, blackMat);
    basePlate.position.y = 0.06;
    holoGroup.add(basePlate);

    // Sleek white circular pedestal
    const pedestalGeo = new THREE.CylinderGeometry(0.75, 0.82, 0.38, 32);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.15
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = 0.25;
    holoGroup.add(pedestal);

    // Black top rim
    const topRimGeo = new THREE.TorusGeometry(0.72, 0.03, 12, 32);
    const topRim = new THREE.Mesh(topRimGeo, blackMat);
    topRim.rotation.x = Math.PI / 2;
    topRim.position.y = 0.44;
    holoGroup.add(topRim);

    // Glowing emitter ring
    const emitterGeo = new THREE.RingGeometry(0.35, 0.65, 32);
    const emitterMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      side: THREE.DoubleSide
    });
    const emitter = new THREE.Mesh(emitterGeo, emitterMat);
    emitter.rotation.x = -Math.PI / 2;
    emitter.position.y = 0.445;
    holoGroup.add(emitter);

    // Holographic wireframe Mars sphere
    const sphereGeo = new THREE.SphereGeometry(0.55, 24, 20);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.75
    });
    this.hologramMesh = new THREE.Mesh(sphereGeo, sphereMat);
    this.hologramMesh.position.y = 1.25;
    holoGroup.add(this.hologramMesh);

    // Holographic orbital ring
    const ringGeo = new THREE.RingGeometry(0.72, 0.76, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55
    });
    const orbitRing = new THREE.Mesh(ringGeo, ringMat);
    orbitRing.rotation.x = Math.PI / 3;
    orbitRing.position.y = 1.25;
    holoGroup.add(orbitRing);

    this.group.add(holoGroup);
  }

  private buildLifeSupportConsole(): void {
    this.lifeSupportConsole = new THREE.Group();
    this.lifeSupportConsole.name = 'lifeSupportConsole';
    this.lifeSupportConsole.position.set(-2.8, 0, 6.0);
    this.lifeSupportConsole.rotation.y = Math.PI - 0.25;

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Terminal Body - High-Tech White Space Composite
    const bodyGeo = new THREE.BoxGeometry(2.4, 2.0, 0.95);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.25,
      metalness: 0.15
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 1.0;
    body.castShadow = true;
    body.receiveShadow = true;
    this.lifeSupportConsole.add(body);

    // Black baseboard kickplate (márgenes negros en la base)
    const baseGeo = new THREE.BoxGeometry(2.46, 0.14, 1.0);
    const base = new THREE.Mesh(baseGeo, blackMat);
    base.position.y = 0.07;
    this.lifeSupportConsole.add(base);

    // Black screen frame bezel
    const screenBorderGeo = new THREE.BoxGeometry(1.86, 1.16, 0.06);
    const screenBorder = new THREE.Mesh(screenBorderGeo, blackMat);
    screenBorder.position.set(0, 1.25, 0.47);
    this.lifeSupportConsole.add(screenBorder);

    // Dynamic Telemetry Screen Canvas
    const screenData = AssetLoader.getInstance().createConsoleCanvas(512, 320);
    this.lifeSupportCtx = screenData.ctx;
    this.lifeSupportCanvasUpdate = screenData.update;

    this.renderLifeSupportCanvas(20.9, 420, 101.3, 'NOMINAL');

    const screenGeo = new THREE.PlaneGeometry(1.8, 1.1);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenData.texture
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.25, 0.51);
    this.lifeSupportConsole.add(screen);

    const badge = this.createInteractionBadge('LifeSupport', '1. SOPORTE VITAL', 0x00e5ff, 2.3);
    this.lifeSupportConsole.add(badge);

    this.group.add(this.lifeSupportConsole);

    // Register with InteractionManager
    const interactable: IInteractable = {
      id: 'lifeSupportConsole',
      name: 'Consola de Soporte Vital',
      actionPrompt: 'Inspeccionar lecturas atmosféricas y filtración',
      object3D: this.lifeSupportConsole,
      canInteract: () => true,
      onHoverStart: () => {
        badge.scale.set(1.2, 1.2, 1.2);
      },
      onHoverEnd: () => {
        badge.scale.set(1, 1, 1);
      },
      onInteract: () => {
        EventBus.getInstance().emit('ui:openConsole', 'lifesupport');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  public renderLifeSupportCanvas(o2: number, co2: number, pressure: number, filterStatus: string): void {
    if (!this.lifeSupportCtx) return;
    const ctx = this.lifeSupportCtx;
    const w = 512;
    const h = 320;

    ctx.fillStyle = '#0a0e17';
    ctx.fillRect(0, 0, w, h);

    // Header
    ctx.fillStyle = '#00e5ff';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('SPACE TECH LABS // LIFE SUPPORT SYS', 20, 36);

    ctx.strokeStyle = 'rgba(0, 229, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, 48);
    ctx.lineTo(w - 20, 48);
    ctx.stroke();

    // Values Grid
    ctx.font = '14px monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('OXÍGENO (O₂):', 24, 88);
    ctx.fillStyle = o2 < 19.5 ? '#ff1744' : '#00e676';
    ctx.font = 'bold 28px monospace';
    ctx.fillText(`${o2.toFixed(1)} %`, 24, 122);

    ctx.font = '14px monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('DIÓXIDO DE CARBONO (CO₂):', 270, 88);
    ctx.fillStyle = co2 > 800 ? '#ff1744' : '#00e5ff';
    ctx.font = 'bold 28px monospace';
    ctx.fillText(`${Math.round(co2)} ppm`, 270, 122);

    ctx.font = '14px monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('PRESIÓN CABINA:', 24, 180);
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 28px monospace';
    ctx.fillText(`${pressure.toFixed(1)} kPa`, 24, 214);

    ctx.font = '14px monospace';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('BUCLE FILTRACIÓN:', 270, 180);
    const isError = filterStatus.includes('ANOMALÍA') || filterStatus.includes('FALLA');
    ctx.fillStyle = isError ? '#ff1744' : '#00e676';
    ctx.font = 'bold 24px monospace';
    ctx.fillText(filterStatus, 270, 214);

    // Interactive button cue at bottom
    ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
    ctx.fillRect(20, 245, w - 40, 50);
    ctx.strokeStyle = '#00e5ff';
    ctx.strokeRect(20, 245, w - 40, 50);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('[ CLIC / GATILLO: ABRIR DIAGNÓSTICO DETALLADO ]', w / 2, 276);
    ctx.textAlign = 'left';

    this.lifeSupportCanvasUpdate?.();
  }

  private buildScienceStation(): void {
    this.scienceStation = new THREE.Group();
    this.scienceStation.name = 'scienceStation';
    this.scienceStation.position.set(9.5, 0, -4.8);
    this.scienceStation.rotation.y = -Math.PI / 3;

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Pristine White Laboratory Workbench
    const benchGeo = new THREE.BoxGeometry(2.8, 0.9, 1.1);
    const benchMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.2,
      metalness: 0.15
    });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.y = 0.45;
    bench.castShadow = true;
    bench.receiveShadow = true;
    this.scienceStation.add(bench);

    // Matte-black base kickplate (margen negro en base)
    const baseGeo = new THREE.BoxGeometry(2.84, 0.12, 1.14);
    const base = new THREE.Mesh(baseGeo, blackMat);
    base.position.y = 0.06;
    this.scienceStation.add(base);

    // Matte-black tabletop perimeter margin trim
    const trimGeo = new THREE.BoxGeometry(2.82, 0.04, 1.12);
    const trim = new THREE.Mesh(trimGeo, blackMat);
    trim.position.y = 0.91;
    this.scienceStation.add(trim);

    // BIOGROWTH-01 Growth Chamber (Transparent glass cylinder with internal seedling)
    const chamberGlassGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.75, 24);
    const chamberGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.9,
      opacity: 0.35,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.5
    });
    const chamberGlass = new THREE.Mesh(chamberGlassGeo, chamberGlassMat);
    chamberGlass.position.set(0, 1.35, 0);
    this.scienceStation.add(chamberGlass);

    // Base & Top caps of chamber - Clean aerospace white with black sealing gaskets
    const capGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.08, 24);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.4, roughness: 0.2 });
    const capBottom = new THREE.Mesh(capGeo, capMat);
    capBottom.position.set(0, 0.97, 0);
    const capTop = new THREE.Mesh(capGeo, capMat);
    capTop.position.set(0, 1.73, 0);
    this.scienceStation.add(capBottom, capTop);

    // Black gasket rings on chamber caps
    const ringGasketGeo = new THREE.TorusGeometry(0.42, 0.02, 8, 24);
    const ringBot = new THREE.Mesh(ringGasketGeo, blackMat);
    ringBot.rotation.x = Math.PI / 2;
    ringBot.position.set(0, 1.01, 0);
    const ringTop = new THREE.Mesh(ringGasketGeo, blackMat);
    ringTop.rotation.x = Math.PI / 2;
    ringTop.position.set(0, 1.69, 0);
    this.scienceStation.add(ringBot, ringTop);

    // Hydroponic seedling inside
    const stemGeo = new THREE.CylinderGeometry(0.015, 0.02, 0.32, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x388e3c, roughness: 0.8 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.set(0, 1.25, 0);
    this.scienceStation.add(stem);

    // Foliage leaves
    const leafGeo = new THREE.SphereGeometry(0.09, 8, 8);
    leafGeo.scale(1.8, 0.4, 1.2);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.6 });
    for (let i = 0; i < 3; i++) {
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(Math.cos((i * Math.PI * 2) / 3) * 0.09, 1.38, Math.sin((i * Math.PI * 2) / 3) * 0.09);
      leaf.rotation.y = (i * Math.PI * 2) / 3;
      this.scienceStation.add(leaf);
    }

    // Specialized LED Grow Light inside chamber
    const growLight = new THREE.PointLight(0xd500f9, 0.8, 2.5); // Magenta / PAR spectrum
    growLight.position.set(0, 1.68, 0);
    this.scienceStation.add(growLight);

    // Black Monitor Frame & Terminal Screen
    const screenFrameGeo = new THREE.BoxGeometry(1.0, 0.7, 0.06);
    const screenFrame = new THREE.Mesh(screenFrameGeo, blackMat);
    screenFrame.position.set(-0.75, 1.3, 0.25);
    screenFrame.rotation.y = 0.2;
    this.scienceStation.add(screenFrame);

    const screenData = AssetLoader.getInstance().createConsoleCanvas(512, 320);
    this.scienceCtx = screenData.ctx;
    this.scienceCanvasUpdate = screenData.update;
    this.renderScienceCanvas('BIOGROWTH-01', 'ESPERANDO CALIBRACIÓN', 65, 45);

    const screenGeo = new THREE.PlaneGeometry(0.92, 0.62);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenData.texture });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(-0.75, 1.3, 0.285);
    screen.rotation.y = 0.2;
    this.scienceStation.add(screen);

    const badge = this.createInteractionBadge('ScienceStation', '2. CIENCIA BIOLÓGICA', CONFIG.COLORS.TECH_GREEN, 2.15);
    this.scienceStation.add(badge);

    this.group.add(this.scienceStation);

    // Register with InteractionManager
    const interactable: IInteractable = {
      id: 'scienceStation',
      name: 'Estación de Ciencias BIOGROWTH-01',
      actionPrompt: 'Configurar espectro de luz y riego hidropónico',
      object3D: this.scienceStation,
      canInteract: () => true,
      onHoverStart: () => {
        badge.scale.set(1.2, 1.2, 1.2);
      },
      onHoverEnd: () => {
        badge.scale.set(1, 1, 1);
      },
      onInteract: () => {
        EventBus.getInstance().emit('ui:openConsole', 'science');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  public renderScienceCanvas(sample: string, status: string, light: number, water: number): void {
    if (!this.scienceCtx) return;
    const ctx = this.scienceCtx;
    ctx.fillStyle = '#081016';
    ctx.fillRect(0, 0, 512, 320);

    ctx.fillStyle = '#00e5ff';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('LABORATORIO // ' + sample, 20, 36);

    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 48, 472, 1);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px monospace';
    ctx.fillText('ESTADO DEL CULTIVO:', 24, 85);
    ctx.fillStyle = status === 'CRECIMIENTO ÓPTIMO' ? '#00e676' : '#ffab00';
    ctx.font = 'bold 22px monospace';
    ctx.fillText(status, 24, 118);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px monospace';
    ctx.fillText(`FOTOPERIODO (LUZ): ${light}%`, 24, 165);
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`IRRIGACIÓN NUTRIENTES: ${water}%`, 24, 215);

    ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
    ctx.fillRect(20, 250, 472, 45);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('[ CLIC / GATILLO: AJUSTAR EXPERIMENTO ]', 256, 278);
    ctx.textAlign = 'left';

    this.scienceCanvasUpdate?.();
  }

  private buildResourceCabinet(): void {
    this.resourceCabinet = new THREE.Group();
    this.resourceCabinet.name = 'resourceCabinet';
    this.resourceCabinet.position.set(2.8, 0, 6.0);
    this.resourceCabinet.rotation.y = Math.PI + 0.25;

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Cabinet Frame - Crisp White Cleanroom Locker
    const frameGeo = new THREE.BoxGeometry(1.8, 2.3, 0.9);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.25,
      metalness: 0.15
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 1.15;
    frame.castShadow = true;
    this.resourceCabinet.add(frame);

    // Matte-black base kickplate (margen negro base)
    const baseGeo = new THREE.BoxGeometry(1.86, 0.14, 0.96);
    const base = new THREE.Mesh(baseGeo, blackMat);
    base.position.y = 0.07;
    this.resourceCabinet.add(base);

    // Matte-black top rim cap
    const topCapGeo = new THREE.BoxGeometry(1.86, 0.08, 0.96);
    const topCap = new THREE.Mesh(topCapGeo, blackMat);
    topCap.position.y = 2.32;
    this.resourceCabinet.add(topCap);

    // Matte-black vertical door seam
    const seamGeo = new THREE.BoxGeometry(0.04, 2.1, 0.02);
    const seam = new THREE.Mesh(seamGeo, blackMat);
    seam.position.set(0, 1.15, 0.46);
    this.resourceCabinet.add(seam);

    // Hazard Stripes on cabinet face
    const stripeGeo = new THREE.PlaneGeometry(1.5, 0.16);
    const stripeMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_AMBER
    });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(0, 1.9, 0.465);
    this.resourceCabinet.add(stripe);

    // Replacement Filter Cartridge Model (Módulo HEPA-C1)
    const cartGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.5, 16);
    const cartMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.8,
      roughness: 0.3
    });
    this.filterCartridgeMesh = new THREE.Mesh(cartGeo, cartMat);
    this.filterCartridgeMesh.position.set(0, 1.05, 0.3);
    this.filterCartridgeMesh.rotation.z = Math.PI / 2;
    this.resourceCabinet.add(this.filterCartridgeMesh);

    // Tech cyan glow band around filter cartridge
    const ringGeo = new THREE.TorusGeometry(0.21, 0.02, 8, 16);
    const ringMat = new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.TECH_CYAN });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    this.filterCartridgeMesh.add(ring);

    const badge = this.createInteractionBadge('ResourceCabinet', '3. ALMACÉN Y REPUESTOS', CONFIG.COLORS.TECH_AMBER, 2.4);
    this.resourceCabinet.add(badge);

    this.group.add(this.resourceCabinet);

    // Register with InteractionManager
    const interactable: IInteractable = {
      id: 'resourceCabinet',
      name: 'Gabinete de Recursos y Repuestos',
      actionPrompt: 'Extraer unidad de filtración HEPA-C1 de repuesto',
      object3D: this.resourceCabinet,
      canInteract: () => true,
      onHoverStart: () => {
        badge.scale.set(1.2, 1.2, 1.2);
      },
      onHoverEnd: () => {
        badge.scale.set(1, 1, 1);
      },
      onInteract: () => {
        EventBus.getInstance().emit('ui:openConsole', 'resources');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  private buildAirlock(): void {
    this.airlockPanel = new THREE.Group();
    this.airlockPanel.name = 'airlockPanel';
    this.airlockPanel.position.set(13.5, 0, 7.5);
    this.airlockPanel.rotation.y = -Math.PI + 0.4;

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Airlock Door Bulkhead - Sterile White & Titanium
    const doorGeo = new THREE.BoxGeometry(2.0, 2.6, 0.35);
    const doorMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.4,
      roughness: 0.3
    });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.y = 1.3;
    door.castShadow = true;
    this.airlockPanel.add(door);

    // Heavy matte-black outer frame rim (márgenes negros de compuerta)
    const frameGeo = new THREE.BoxGeometry(2.15, 2.75, 0.3);
    const frame = new THREE.Mesh(frameGeo, blackMat);
    frame.position.y = 1.3;
    this.airlockPanel.add(frame);

    // Status beacon (Green / Sealed)
    const beaconGeo = new THREE.SphereGeometry(0.08, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.TECH_GREEN });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(0, 2.45, 0.2);
    this.airlockPanel.add(beacon);

    // Airlock control interface with black bevel
    const panelBorderGeo = new THREE.BoxGeometry(0.48, 0.6, 0.04);
    const panelBorder = new THREE.Mesh(panelBorderGeo, blackMat);
    panelBorder.position.set(0.75, 1.3, 0.19);
    this.airlockPanel.add(panelBorder);

    const panelGeo = new THREE.BoxGeometry(0.44, 0.56, 0.08);
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0.75, 1.3, 0.21);
    this.airlockPanel.add(panel);

    const badge = this.createInteractionBadge('Airlock', 'ESCLUSA DE SALIDA EVA', 0x38bdf8, 2.5);
    this.airlockPanel.add(badge);

    this.group.add(this.airlockPanel);

    const interactable: IInteractable = {
      id: 'airlockPanel',
      name: 'Compuerta Esclusa (Airlock EVA)',
      actionPrompt: 'Verificar presurización de compuerta',
      object3D: this.airlockPanel,
      canInteract: () => true,
      onHoverStart: () => {
        badge.scale.set(1.2, 1.2, 1.2);
      },
      onHoverEnd: () => {
        badge.scale.set(1, 1, 1);
      },
      onInteract: () => {
        EventBus.getInstance().emit('ui:notify', 'Esclusa presurizada a 101.3 kPa. EVA exterior restringida durante Misión 001.');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  /**
   * 1. Mess Hall & Galley: Dining, food packs, water dispenser, and crew social board.
   */
  private buildMessHall(): void {
    const messHall = new THREE.Group();
    messHall.name = 'MessHall';
    messHall.position.set(-10.5, 0, 7.0);

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Modern White Ergonomic Dining Table
    const tableGeo = new THREE.BoxGeometry(3.2, 0.75, 1.4);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.22,
      metalness: 0.12
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.y = 0.375;
    table.castShadow = true;
    table.receiveShadow = true;
    messHall.add(table);

    // Matte-black tabletop perimeter margin trim
    const tableTrimGeo = new THREE.BoxGeometry(3.24, 0.04, 1.44);
    const tableTrim = new THREE.Mesh(tableTrimGeo, blackMat);
    tableTrim.position.y = 0.755;
    messHall.add(tableTrim);

    // Matte-black pedestal kickplate base
    const pedGeo = new THREE.BoxGeometry(2.4, 0.1, 1.0);
    const ped = new THREE.Mesh(pedGeo, blackMat);
    ped.position.y = 0.05;
    messHall.add(ped);

    // 8 astronaut stools: white frames with black trim rings and charcoal padded cushions
    const stoolGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.45, 16);
    const stoolMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
    const stoolBaseGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.06, 16);
    const cushionGeo = new THREE.CylinderGeometry(0.23, 0.23, 0.07, 16);
    const cushionMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });

    const stoolPositions = [
      [-1.2, 0.95], [-0.4, 0.95], [0.4, 0.95], [1.2, 0.95],
      [-1.2, -0.95], [-0.4, -0.95], [0.4, -0.95], [1.2, -0.95]
    ];
    for (const [sx, sz] of stoolPositions) {
      const stoolGroup = new THREE.Group();
      stoolGroup.position.set(sx, 0, sz);

      const stool = new THREE.Mesh(stoolGeo, stoolMat);
      stool.position.y = 0.225;
      stool.castShadow = true;
      stoolGroup.add(stool);

      const stoolBase = new THREE.Mesh(stoolBaseGeo, blackMat);
      stoolBase.position.y = 0.03;
      stoolGroup.add(stoolBase);

      const cushion = new THREE.Mesh(cushionGeo, cushionMat);
      cushion.position.y = 0.46;
      stoolGroup.add(cushion);

      messHall.add(stoolGroup);
    }

    // Space food ration packs on table
    const foodColors = [0xff5722, 0x4caf50, 0x0284c7, 0xf59e0b];
    for (let i = 0; i < 4; i++) {
      const foodGeo = new THREE.BoxGeometry(0.26, 0.08, 0.18);
      const foodMat = new THREE.MeshStandardMaterial({ color: foodColors[i], roughness: 0.4 });
      const food = new THREE.Mesh(foodGeo, foodMat);
      food.position.set(-0.8 + i * 0.5, 0.81, (i % 2 === 0 ? 0.25 : -0.25));
      food.rotation.y = (i * 0.2) - 0.1;
      messHall.add(food);
    }

    // Water & nutrient dispenser unit on wall with black frame
    const dispenserGeo = new THREE.BoxGeometry(0.7, 1.4, 0.45);
    const dispenserMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2, metalness: 0.15 });
    const dispenser = new THREE.Mesh(dispenserGeo, dispenserMat);
    dispenser.position.set(-3.2, 1.1, 0);
    messHall.add(dispenser);

    const dispFrameGeo = new THREE.BoxGeometry(0.76, 1.46, 0.42);
    const dispFrame = new THREE.Mesh(dispFrameGeo, blackMat);
    dispFrame.position.set(-3.2, 1.1, -0.01);
    messHall.add(dispFrame);

    // Cyan glowing screen on dispenser
    const dispScreenGeo = new THREE.PlaneGeometry(0.42, 0.3);
    const dispScreenMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
    const dispScreen = new THREE.Mesh(dispScreenGeo, dispScreenMat);
    dispScreen.position.set(-3.2, 1.35, 0.24);
    messHall.add(dispScreen);

    const badge = this.createInteractionBadge('MessHall', 'ZONA DE COMEDOR Y CONVIVENCIA', 0xffd180, 2.0);
    messHall.add(badge);

    this.group.add(messHall);

    const interactable: IInteractable = {
      id: 'messHall',
      name: 'Comedor y Convivencia de la Tripulación (Galley)',
      actionPrompt: 'Consumir ración liofilizada y consultar plan de convivencia',
      object3D: messHall,
      canInteract: () => true,
      onHoverStart: () => badge.scale.set(1.2, 1.2, 1.2),
      onHoverEnd: () => badge.scale.set(1, 1, 1),
      onInteract: () => {
        EventBus.getInstance().emit('ui:notify', '🍲 Ración espacial consumida (Guiso liofilizado con electrolitos). Moral y energía de la tripulación al 100%.');
        EventBus.getInstance().emit('achievement:check', 'ach_habitat_life');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  /**
   * 2. Crew Quarters: Individual sleeping pods with thermal blankets and personal monitors.
   */
  private buildCrewQuarters(): void {
    const quarters = new THREE.Group();
    quarters.name = 'CrewQuarters';
    quarters.position.set(-10.5, 0, -8.0);

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // 4 Capsule Sleeping Berths in Pristine Space White with matte-black outer trims
    const berthOffsets = [-3.0, -1.0, 1.0, 3.0];
    for (let i = 0; i < berthOffsets.length; i++) {
      const bx = berthOffsets[i];

      // Outer Shell
      const berthGeo = new THREE.BoxGeometry(1.3, 1.2, 2.3);
      const berthMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.1 });
      const berth = new THREE.Mesh(berthGeo, berthMat);
      berth.position.set(bx, 0.6, 0);
      berth.castShadow = true;
      quarters.add(berth);

      // Matte-black base kickplate
      const baseGeo = new THREE.BoxGeometry(1.34, 0.12, 2.34);
      const base = new THREE.Mesh(baseGeo, blackMat);
      base.position.set(bx, 0.06, 0);
      quarters.add(base);

      // Matte-black top rim contour
      const topRimGeo = new THREE.BoxGeometry(1.34, 0.06, 2.34);
      const topRim = new THREE.Mesh(topRimGeo, blackMat);
      topRim.position.set(bx, 1.22, 0);
      quarters.add(topRim);

      // Mattress & blanket
      const bedGeo = new THREE.BoxGeometry(1.1, 0.22, 2.0);
      const bedMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.8 });
      const bed = new THREE.Mesh(bedGeo, bedMat);
      bed.position.set(bx, 1.15, 0);
      quarters.add(bed);

      // Ergonomic Pillow
      const pillowGeo = new THREE.BoxGeometry(0.75, 0.12, 0.42);
      const pillowMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const pillow = new THREE.Mesh(pillowGeo, pillowMat);
      pillow.position.set(bx, 1.3, -0.75);
      quarters.add(pillow);

      // Personal reading light & monitor with black frame
      const frameGeo = new THREE.BoxGeometry(0.36, 0.26, 0.04);
      const frame = new THREE.Mesh(frameGeo, blackMat);
      frame.position.set(bx + 0.45, 1.4, -0.85);
      quarters.add(frame);

      const lightGeo = new THREE.PlaneGeometry(0.32, 0.22);
      const lightMat = new THREE.MeshBasicMaterial({ color: 0x90caf9 });
      const lamp = new THREE.Mesh(lightGeo, lightMat);
      lamp.position.set(bx + 0.45, 1.4, -0.82);
      quarters.add(lamp);
    }

    const badge = this.createInteractionBadge('CrewQuarters', 'DORMITORIOS TRIPULACIÓN', 0x90caf9, 2.1);
    quarters.add(badge);

    this.group.add(quarters);

    const interactable: IInteractable = {
      id: 'crewQuarters',
      name: 'Camarotes de la Tripulación (Crew Berths)',
      actionPrompt: 'Inspeccionar cabinas de descanso y ciclo circadiano',
      object3D: quarters,
      canInteract: () => true,
      onHoverStart: () => badge.scale.set(1.2, 1.2, 1.2),
      onHoverEnd: () => badge.scale.set(1, 1, 1),
      onInteract: () => {
        EventBus.getInstance().emit('ui:notify', '🛏️ Cabinas de descanso acústico. Ciclo circadiano sincronizado a 24 horas y 39 minutos (Sol marciano).');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  /**
   * 3. Geology & Science Workbench: Rock sample trays, stereomicroscope, optical spectrometer.
   */
  private buildGeologyLab(): void {
    const geoLab = new THREE.Group();
    geoLab.name = 'GeologyLab';
    geoLab.position.set(11.5, 0, -10.5);

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Pristine White Workbench
    const benchGeo = new THREE.BoxGeometry(3.2, 0.85, 1.2);
    const benchMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.15, roughness: 0.2 });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.y = 0.425;
    bench.castShadow = true;
    geoLab.add(bench);

    // Matte-black baseboard kickplate
    const baseGeo = new THREE.BoxGeometry(3.26, 0.12, 1.26);
    const base = new THREE.Mesh(baseGeo, blackMat);
    base.position.y = 0.06;
    geoLab.add(base);

    // Matte-black countertop perimeter margin trim
    const trimGeo = new THREE.BoxGeometry(3.24, 0.04, 1.24);
    const trim = new THREE.Mesh(trimGeo, blackMat);
    trim.position.y = 0.86;
    geoLab.add(trim);

    // High-Precision Digital Microscope model with black/gunmetal casing
    const scopeMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 });
    const scopeBaseGeo = new THREE.BoxGeometry(0.35, 0.08, 0.35);
    const scopeBase = new THREE.Mesh(scopeBaseGeo, scopeMat);
    scopeBase.position.set(-0.9, 0.92, 0);
    geoLab.add(scopeBase);

    const armGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.48, 12);
    const arm = new THREE.Mesh(armGeo, scopeMat);
    arm.position.set(-0.9, 1.15, -0.08);
    arm.rotation.x = 0.2;
    geoLab.add(arm);

    // Optical Spectrometer Display with black frame
    const specBorderGeo = new THREE.BoxGeometry(0.76, 0.54, 0.04);
    const specBorder = new THREE.Mesh(specBorderGeo, blackMat);
    specBorder.position.set(0.9, 1.25, -0.15);
    geoLab.add(specBorder);

    const specScreenGeo = new THREE.PlaneGeometry(0.7, 0.48);
    const specScreenMat = new THREE.MeshBasicMaterial({ color: 0x059669 });
    const specScreen = new THREE.Mesh(specScreenGeo, specScreenMat);
    specScreen.position.set(0.9, 1.25, -0.12);
    geoLab.add(specScreen);

    // Rock sample trays on workbench
    for (let r = 0; r < 3; r++) {
      const rockGeo = new THREE.DodecahedronGeometry(0.11, 0);
      const rockMat = new THREE.MeshStandardMaterial({ color: r === 0 ? 0x8d6e63 : (r === 1 ? 0xffb74d : 0x78909c), roughness: 0.9 });
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(-0.2 + r * 0.4, 0.96, 0.05);
      geoLab.add(rock);
    }

    const badge = this.createInteractionBadge('GeologyLab', 'LABORATORIO DE GEOLOGÍA', 0x69f0ae, 2.1);
    geoLab.add(badge);

    this.group.add(geoLab);

    const interactable: IInteractable = {
      id: 'geologyBench',
      name: 'Banco de Geología y Mineralogía Marciana',
      actionPrompt: 'Analizar composición de muestras de regolito y rocas',
      object3D: geoLab,
      canInteract: () => true,
      onHoverStart: () => badge.scale.set(1.2, 1.2, 1.2),
      onHoverEnd: () => badge.scale.set(1, 1, 1),
      onInteract: () => {
        EventBus.getInstance().emit('ui:notify', '🔬 Espectrómetro de masas listo. Sal al exterior en EVA para recolectar muestras en la superficie.');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  /**
   * 4. EVA Suit Bay: Wall racks with 2 EMU spacesuits (helmets, PLSS packs, golden visors).
   */
  private buildSuitBay(): void {
    const suitBay = new THREE.Group();
    suitBay.name = 'SuitBay';
    suitBay.position.set(9.5, 0, 5.0);

    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Wall rack frame - Crisp white gantry with matte-black structural trims
    const rackGeo = new THREE.BoxGeometry(3.0, 2.5, 0.18);
    const rackMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25, metalness: 0.2 });
    const rack = new THREE.Mesh(rackGeo, rackMat);
    rack.position.set(0, 1.25, -0.6);
    suitBay.add(rack);

    // Black column trims on rack edges
    for (const rx of [-1.52, 1.52]) {
      const colGeo = new THREE.BoxGeometry(0.08, 2.54, 0.22);
      const col = new THREE.Mesh(colGeo, blackMat);
      col.position.set(rx, 1.25, -0.6);
      suitBay.add(col);
    }

    // Black kickplate base for suit rack
    const rackBaseGeo = new THREE.BoxGeometry(3.12, 0.14, 0.3);
    const rackBase = new THREE.Mesh(rackBaseGeo, blackMat);
    rackBase.position.set(0, 0.07, -0.6);
    suitBay.add(rackBase);

    // 2 EMU Spacesuits hanging in racks
    const suitOffsets = [-0.75, 0.75];
    for (const so of suitOffsets) {
      const suitGroup = new THREE.Group();
      suitGroup.position.set(so, 0.4, -0.3);

      // Torso & Life Support PLSS backpack
      const torsoGeo = new THREE.BoxGeometry(0.7, 0.9, 0.48);
      const suitFabricMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.5,
        metalness: 0.08
      });
      const torso = new THREE.Mesh(torsoGeo, suitFabricMat);
      torso.position.y = 1.05;
      torso.castShadow = true;
      suitGroup.add(torso);

      // Black mission patch on chest
      const patchGeo = new THREE.PlaneGeometry(0.18, 0.12);
      const patch = new THREE.Mesh(patchGeo, blackMat);
      patch.position.set(0.15, 1.25, 0.25);
      suitGroup.add(patch);

      // Golden Helmet Visor
      const helmetGeo = new THREE.SphereGeometry(0.26, 16, 16);
      const visorMat = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        metalness: 0.95,
        roughness: 0.05
      });
      const helmet = new THREE.Mesh(helmetGeo, visorMat);
      helmet.position.set(0, 1.7, 0.08);
      suitGroup.add(helmet);

      // Legs / Boots
      for (const lx of [-0.2, 0.2]) {
        const legGeo = new THREE.CylinderGeometry(0.13, 0.15, 0.7, 12);
        const leg = new THREE.Mesh(legGeo, suitFabricMat);
        leg.position.set(lx, 0.38, 0);
        suitGroup.add(leg);

        // Black boot soles
        const bootGeo = new THREE.BoxGeometry(0.18, 0.08, 0.26);
        const boot = new THREE.Mesh(bootGeo, blackMat);
        boot.position.set(lx, 0.04, 0.04);
        suitGroup.add(boot);
      }

      suitBay.add(suitGroup);
    }

    const badge = this.createInteractionBadge('SuitBay', 'ESTACIÓN DE TRAJES EVA (SALIDA A MARTE)', 0xffd600, 2.4);
    suitBay.add(badge);

    this.group.add(suitBay);

    const interactable: IInteractable = {
      id: 'suitBay',
      name: 'Estación de Trajes Espaciales EMU-MARS',
      actionPrompt: 'Equipar traje presurizado y salir a explorar la superficie de Marte',
      object3D: suitBay,
      canInteract: () => true,
      onHoverStart: () => badge.scale.set(1.2, 1.2, 1.2),
      onHoverEnd: () => badge.scale.set(1, 1, 1),
      onInteract: () => {
        EventBus.getInstance().emit('eva:suitUp');
      }
    };
    InteractionManager.getInstance().register(interactable);
  }

  /**
   * 5. Martian Exterior Props: Collectible rock samples & exterior return airlock door.
   */
  private buildMartianExteriorProps(): void {
    const blackMat = new THREE.MeshStandardMaterial({
      color: 0x090d16,
      roughness: 0.5,
      metalness: 0.5
    });

    // Exterior return airlock bulkhead
    const exteriorAirlock = new THREE.Group();
    exteriorAirlock.name = 'ExteriorAirlock';
    exteriorAirlock.position.set(18.2, 0, 7.5);

    const doorGeo = new THREE.BoxGeometry(0.35, 2.8, 2.2);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.y = 1.4;
    door.castShadow = true;
    exteriorAirlock.add(door);

    // Black frame bezel
    const frameGeo = new THREE.BoxGeometry(0.38, 2.95, 2.35);
    const frame = new THREE.Mesh(frameGeo, blackMat);
    frame.position.y = 1.4;
    exteriorAirlock.add(frame);

    const badge = this.createInteractionBadge('AirlockExterior', 'COMPUERTA EXTERIOR (INGRESAR AL HÁBITAT)', 0x00e5ff, 2.6);
    exteriorAirlock.add(badge);

    this.group.add(exteriorAirlock);

    const interactableDoor: IInteractable = {
      id: 'airlockExteriorDoor',
      name: 'Compuerta Exterior del Airlock (Ingreso)',
      actionPrompt: 'Entrar al hábitat, represurizar y retirar traje espacial',
      object3D: exteriorAirlock,
      canInteract: () => true,
      onHoverStart: () => badge.scale.set(1.2, 1.2, 1.2),
      onHoverEnd: () => badge.scale.set(1, 1, 1),
      onInteract: () => {
        EventBus.getInstance().emit('eva:returnInside');
      }
    };
    InteractionManager.getInstance().register(interactableDoor);

    // 3 Collectible Rock Samples on Mars Ground (Strictly placed outside on Martian ground)
    const rockData = [
      { id: 'rockSampleAlpha', name: 'Muestra Alfa (Basalto de Argyre)', pos: [28, 0.2, 12], color: 0x8d6e63, badgeColor: 0xff5722 },
      { id: 'rockSampleBeta', name: 'Muestra Beta (Sulfatos Hidratados)', pos: [16, 0.2, 32], color: 0xffb74d, badgeColor: 0xffd600 },
      { id: 'rockSampleGamma', name: 'Muestra Gamma (Hematita Marciana)', pos: [-32, 0.2, 24], color: 0x607d8b, badgeColor: 0x00e5ff }
    ];

    for (const r of rockData) {
      const rockGroup = new THREE.Group();
      rockGroup.name = r.id;
      rockGroup.position.set(r.pos[0], r.pos[1], r.pos[2]);

      const meshGeo = new THREE.DodecahedronGeometry(0.4, 1);
      const meshMat = new THREE.MeshStandardMaterial({ color: r.color, roughness: 0.9, flatShading: true });
      const rockMesh = new THREE.Mesh(meshGeo, meshMat);
      rockMesh.castShadow = true;
      rockGroup.add(rockMesh);

      const rockBadge = this.createInteractionBadge(r.id, r.name, r.badgeColor, 1.0);
      rockGroup.add(rockBadge);

      this.group.add(rockGroup);

      const rockInteractable: IInteractable = {
        id: r.id,
        name: r.name,
        actionPrompt: 'Recolectar muestra geológica con el contenedor del traje',
        object3D: rockGroup,
        canInteract: () => true,
        onHoverStart: () => rockBadge.scale.set(1.2, 1.2, 1.2),
        onHoverEnd: () => rockBadge.scale.set(1, 1, 1),
        onInteract: () => {
          rockGroup.visible = false;
          EventBus.getInstance().emit('eva:collectSample', r.id);
        }
      };
      InteractionManager.getInstance().register(rockInteractable);
    }
  }

  public update(delta: number): void {
    this.animTime += delta;

    // Rotate central hologram wireframe
    if (this.hologramMesh) {
      this.hologramMesh.rotation.y += delta * 0.5;
    }

    // Animate holographic interaction badges: rotation and smooth bobbing
    const badges = this.group.children.flatMap((g) => g.children.filter((c) => c.name.startsWith('Badge_')));
    for (const b of badges) {
      const ring = b.getObjectByName('badge_ring');
      const diamond = b.getObjectByName('badge_diamond');
      if (ring) {
        ring.rotation.z += delta * 1.5;
      }
      if (diamond) {
        diamond.rotation.y += delta * 2.0;
        diamond.rotation.x += delta * 1.0;
        diamond.position.y = Math.sin(this.animTime * 3) * 0.05;
      }
    }
  }
}
