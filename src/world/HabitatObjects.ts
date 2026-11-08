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

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HabitatObjects';

    this.buildMissionControl();
    this.buildLifeSupportConsole();
    this.buildScienceStation();
    this.buildResourceCabinet();
    this.buildAirlock();
  }

  /**
   * Helper to attach a glowing holographic ring indicator above interactables
   */
  private createInteractionBadge(name: string, yOffset = 1.6): THREE.Group {
    const badgeGroup = new THREE.Group();
    badgeGroup.position.y = yOffset;
    badgeGroup.name = `Badge_${name}`;

    // Floating pulsing ring
    const ringGeo = new THREE.RingGeometry(0.12, 0.16, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_CYAN,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    badgeGroup.add(ring);

    // Center icon diamond
    const iconGeo = new THREE.OctahedronGeometry(0.06, 0);
    const iconMat = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    const icon = new THREE.Mesh(iconGeo, iconMat);
    badgeGroup.add(icon);

    return badgeGroup;
  }

  private buildMissionControl(): void {
    this.missionControlPanel = new THREE.Group();
    this.missionControlPanel.name = 'missionControlPanel';
    this.missionControlPanel.position.set(0, 0, -5.8);

    // Desk console
    const deskGeo = new THREE.BoxGeometry(3.6, 0.9, 1.2);
    const deskMat = new THREE.MeshStandardMaterial({
      color: CONFIG.COLORS.SURFACE_DARK,
      roughness: 0.4,
      metalness: 0.7
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.y = 0.45;
    desk.castShadow = true;
    desk.receiveShadow = true;
    this.missionControlPanel.add(desk);

    // Main multi-monitor rack
    const screenGeo = new THREE.BoxGeometry(2.4, 0.8, 0.08);
    const screenMat = new THREE.MeshStandardMaterial({
      color: 0x050810,
      roughness: 0.2,
      metalness: 0.9,
      emissive: 0x002830,
      emissiveIntensity: 0.6
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.35, -0.2);
    screen.rotation.x = -0.1;
    this.missionControlPanel.add(screen);

    // Glowing cyan screen bezel
    const bezelGeo = new THREE.BoxGeometry(2.44, 0.84, 0.04);
    const bezelMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.TECH_CYAN,
      wireframe: true
    });
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.position.copy(screen.position);
    bezel.position.z += 0.02;
    bezel.rotation.copy(screen.rotation);
    this.missionControlPanel.add(bezel);

    const badge = this.createInteractionBadge('MissionControl', 1.9);
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

  private buildLifeSupportConsole(): void {
    this.lifeSupportConsole = new THREE.Group();
    this.lifeSupportConsole.name = 'lifeSupportConsole';
    this.lifeSupportConsole.position.set(-5.4, 0, -1.2);
    this.lifeSupportConsole.rotation.y = Math.PI / 3;

    // Terminal Body
    const bodyGeo = new THREE.BoxGeometry(2.2, 1.8, 0.9);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1b2330,
      roughness: 0.5,
      metalness: 0.6
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.9;
    body.castShadow = true;
    body.receiveShadow = true;
    this.lifeSupportConsole.add(body);

    // Dynamic Telemetry Screen Canvas
    const screenData = AssetLoader.getInstance().createConsoleCanvas(512, 320);
    this.lifeSupportCtx = screenData.ctx;
    this.lifeSupportCanvasUpdate = screenData.update;

    this.renderLifeSupportCanvas(20.9, 420, 101.3, 'NOMINAL');

    const screenGeo = new THREE.PlaneGeometry(1.6, 1.0);
    const screenMat = new THREE.MeshBasicMaterial({
      map: screenData.texture
    });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.15, 0.46);
    this.lifeSupportConsole.add(screen);

    const badge = this.createInteractionBadge('LifeSupport', 2.0);
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
    this.scienceStation.position.set(5.4, 0, -1.2);
    this.scienceStation.rotation.y = -Math.PI / 3;

    // Workbench
    const benchGeo = new THREE.BoxGeometry(2.4, 0.9, 1.0);
    const benchMat = new THREE.MeshStandardMaterial({
      color: 0x222a38,
      roughness: 0.3,
      metalness: 0.8
    });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.y = 0.45;
    bench.castShadow = true;
    bench.receiveShadow = true;
    this.scienceStation.add(bench);

    // BIOGROWTH-01 Growth Chamber (Transparent glass cylinder with internal seedling)
    const chamberGlassGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.7, 24);
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
    chamberGlass.position.set(0, 1.3, 0);
    this.scienceStation.add(chamberGlass);

    // Base & Top caps of chamber
    const capGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.08, 24);
    const capMat = new THREE.MeshStandardMaterial({ color: 0x111620, metalness: 0.9, roughness: 0.2 });
    const capBottom = new THREE.Mesh(capGeo, capMat);
    capBottom.position.set(0, 0.95, 0);
    const capTop = new THREE.Mesh(capGeo, capMat);
    capTop.position.set(0, 1.65, 0);
    this.scienceStation.add(capBottom, capTop);

    // Hydroponic seedling inside
    const stemGeo = new THREE.CylinderGeometry(0.015, 0.02, 0.3, 8);
    const stemMat = new THREE.MeshStandardMaterial({ color: 0x388e3c, roughness: 0.8 });
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.set(0, 1.2, 0);
    this.scienceStation.add(stem);

    // Foliage leaves
    const leafGeo = new THREE.SphereGeometry(0.08, 8, 8);
    leafGeo.scale(1.8, 0.4, 1.2);
    const leafMat = new THREE.MeshStandardMaterial({ color: 0x4caf50, roughness: 0.6 });
    for (let i = 0; i < 3; i++) {
      const leaf = new THREE.Mesh(leafGeo, leafMat);
      leaf.position.set(Math.cos((i * Math.PI * 2) / 3) * 0.08, 1.32, Math.sin((i * Math.PI * 2) / 3) * 0.08);
      leaf.rotation.y = (i * Math.PI * 2) / 3;
      this.scienceStation.add(leaf);
    }

    // Specialized LED Grow Light inside chamber
    const growLight = new THREE.PointLight(0xd500f9, 0.6, 2); // Magenta / PAR spectrum
    growLight.position.set(0, 1.6, 0);
    this.scienceStation.add(growLight);

    // Terminal Screen
    const screenData = AssetLoader.getInstance().createConsoleCanvas(512, 320);
    this.scienceCtx = screenData.ctx;
    this.scienceCanvasUpdate = screenData.update;
    this.renderScienceCanvas('BIOGROWTH-01', 'ESPERANDO CALIBRACIÓN', 65, 45);

    const screenGeo = new THREE.PlaneGeometry(0.9, 0.6);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenData.texture });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(-0.65, 1.25, 0.25);
    screen.rotation.y = 0.2;
    this.scienceStation.add(screen);

    const badge = this.createInteractionBadge('ScienceStation', 1.95);
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
    this.resourceCabinet.position.set(-3.8, 0, 4.2);
    this.resourceCabinet.rotation.y = Math.PI - 0.4;

    // Cabinet Frame
    const frameGeo = new THREE.BoxGeometry(1.6, 2.2, 0.8);
    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x18202c,
      roughness: 0.6,
      metalness: 0.5
    });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.y = 1.1;
    frame.castShadow = true;
    this.resourceCabinet.add(frame);

    // Hazard Stripes on cabinet face
    const stripeGeo = new THREE.PlaneGeometry(1.4, 0.15);
    const stripeMat = new THREE.MeshBasicMaterial({
      color: CONFIG.COLORS.MARS_ORANGE
    });
    const stripe = new THREE.Mesh(stripeGeo, stripeMat);
    stripe.position.set(0, 1.8, 0.41);
    this.resourceCabinet.add(stripe);

    // Replacement Filter Cartridge Model (Módulo HEPA-C1)
    const cartGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.45, 16);
    const cartMat = new THREE.MeshStandardMaterial({
      color: 0x37474f,
      metalness: 0.8,
      roughness: 0.3
    });
    this.filterCartridgeMesh = new THREE.Mesh(cartGeo, cartMat);
    this.filterCartridgeMesh.position.set(0, 1.0, 0.25);
    this.filterCartridgeMesh.rotation.z = Math.PI / 2;
    this.resourceCabinet.add(this.filterCartridgeMesh);

    // Tech cyan glow band around filter cartridge
    const ringGeo = new THREE.TorusGeometry(0.19, 0.02, 8, 16);
    const ringMat = new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.TECH_CYAN });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    this.filterCartridgeMesh.add(ring);

    const badge = this.createInteractionBadge('ResourceCabinet', 2.2);
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
    this.airlockPanel.position.set(3.8, 0, 4.2);
    this.airlockPanel.rotation.y = -Math.PI + 0.4;

    // Airlock Door Bulkhead
    const doorGeo = new THREE.BoxGeometry(1.8, 2.4, 0.3);
    const doorMat = new THREE.MeshStandardMaterial({
      color: 0x263238,
      metalness: 0.7,
      roughness: 0.4
    });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.y = 1.2;
    door.castShadow = true;
    this.airlockPanel.add(door);

    // Status beacon (Green / Sealed)
    const beaconGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const beaconMat = new THREE.MeshBasicMaterial({ color: CONFIG.COLORS.TECH_GREEN });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.set(0, 2.25, 0.16);
    this.airlockPanel.add(beacon);

    // Airlock control interface
    const panelGeo = new THREE.BoxGeometry(0.4, 0.5, 0.08);
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3 });
    const panel = new THREE.Mesh(panelGeo, panelMat);
    panel.position.set(0.65, 1.2, 0.16);
    this.airlockPanel.add(panel);

    const badge = this.createInteractionBadge('Airlock', 2.3);
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

  public update(delta: number): void {
    // Subtle rotation of holographic interaction badges
    const badges = this.group.children.flatMap((g) => g.children.filter((c) => c.name.startsWith('Badge_')));
    for (const b of badges) {
      b.rotation.y += delta * 1.5;
    }
  }
}
