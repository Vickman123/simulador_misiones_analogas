import * as THREE from 'three';
import { SceneManager } from '../core/SceneManager';
import { CameraManager } from '../core/CameraManager';
import { RendererManager } from '../core/RendererManager';
import { InputManager } from '../core/InputManager';
import { MobileControls } from '../core/MobileControls';
import { AudioManager } from '../core/AudioManager';
import { XRManager } from '../xr/XRManager';
import { XRControllerManager } from '../xr/XRControllerManager';
import { XRInteractionManager } from '../xr/XRInteractionManager';
import { Habitat } from '../world/Habitat';
import { MissionManager } from '../mission/MissionManager';
import { MissionState } from '../mission/MissionState';
import { PlatformManager } from './PlatformManager';
import { MainMenu } from '../ui/MainMenu';
import { MissionBriefing } from '../ui/MissionBriefing';
import { MissionHUD } from '../ui/MissionHUD';
import { InteractionPanel } from '../ui/InteractionPanel';
import { MissionReport } from '../ui/MissionReport';
import { MissionAchievements } from '../mission/MissionAchievements';
import { EventBus } from '../utils/EventBus';
import { bindFastClick } from '../utils/DOMUtils';

export class Application {
  private container: HTMLElement;
  private clock: THREE.Clock;

  // Core Managers
  private sceneManager: SceneManager;
  private cameraManager: CameraManager;
  private rendererManager: RendererManager;
  private inputManager: InputManager;
  private mobileControls: MobileControls;
  private audioManager: AudioManager;

  // WebXR
  private xrManager: XRManager;
  private xrControllerManager: XRControllerManager;
  private xrInteractionManager: XRInteractionManager;

  // World
  private habitat: Habitat;

  // Mission & UI
  private missionManager: MissionManager;
  private mainMenu: MainMenu;
  private briefing: MissionBriefing;
  private hud: MissionHUD;
  private interactionPanel: InteractionPanel;
  private missionReport: MissionReport;

  // Pause elements
  private modalPause: HTMLElement | null;
  private btnSoundToggle: HTMLElement | null;

  constructor() {
    const container = document.getElementById('webgl-container');
    if (!container) {
      throw new Error('WebGL container element #webgl-container not found in DOM.');
    }
    this.container = container;
    this.clock = new THREE.Clock();

    // 1. Initialize 3D Engine Core
    this.sceneManager = new SceneManager();
    this.cameraManager = new CameraManager();
    this.rendererManager = new RendererManager(this.container);
    this.sceneManager.add(this.cameraManager.cameraRig);

    // 2. Initialize World & Habitat
    this.habitat = new Habitat();
    this.sceneManager.add(this.habitat.group);

    // 3. Initialize Audio & Input
    this.audioManager = AudioManager.getInstance();
    this.inputManager = new InputManager(
      this.cameraManager.camera,
      this.cameraManager.cameraRig,
      this.rendererManager.renderer.domElement
    );
    this.mobileControls = new MobileControls(
      this.cameraManager.camera,
      this.inputManager
    );

    // 4. Initialize WebXR for Meta Quest
    this.xrManager = new XRManager(this.rendererManager.renderer);
    this.xrControllerManager = new XRControllerManager(
      this.rendererManager.renderer,
      this.cameraManager.cameraRig
    );
    this.xrInteractionManager = new XRInteractionManager(
      this.xrControllerManager,
      this.cameraManager.cameraRig,
      this.rendererManager.renderer
    );

    // 5. Initialize Mission Systems & UI
    this.missionManager = MissionManager.getInstance();
    MissionAchievements.getInstance();
    this.mainMenu = new MainMenu();
    this.briefing = new MissionBriefing();
    this.hud = new MissionHUD();
    this.interactionPanel = new InteractionPanel();
    this.missionReport = new MissionReport();

    this.modalPause = document.getElementById('modal-pause');
    this.btnSoundToggle = document.getElementById('btn-toggle-sound');

    this.bindApplicationEvents();
    this.startLoop();

    console.log('[Application] MARS ANALOG MISSION initialized successfully.');
  }

  private bindApplicationEvents(): void {
    // WebXR entry requests
    const enterVRHandler = async () => {
      this.audioManager.playClick();
      const success = await this.xrManager.enterVR();
      if (success) {
        this.mainMenu.hide();
        this.briefing.hide();
        this.inputManager.setEnabled(false); // In VR, controllers handle input
        this.mobileControls.setVisible(false);
        this.missionManager.startMission();
        this.audioManager.startAmbientHum();
      }
    };

    bindFastClick(document.getElementById('btn-enter-xr'), enterVRHandler);
    EventBus.getInstance().on('xr:requestEnter', enterVRHandler);

    EventBus.getInstance().on('xr:sessionEnd', () => {
      this.inputManager.setEnabled(true);
      if (PlatformManager.getInstance().getIsMobile()) {
        this.mobileControls.setVisible(true);
      }
    });

    // Pause menu triggers
    bindFastClick(document.getElementById('btn-pause-menu'), () => {
      this.togglePause();
    });

    EventBus.getInstance().on('ui:togglePause', () => {
      this.togglePause();
    });

    bindFastClick(document.getElementById('btn-resume-mission'), () => {
      this.audioManager.playClick();
      this.resume();
    });

    bindFastClick(document.getElementById('btn-restart-mission'), () => {
      this.audioManager.playClick();
      this.restart();
    });

    bindFastClick(this.btnSoundToggle, () => {
      const current = this.audioManager.getEnabled();
      this.audioManager.setEnabled(!current);
      if (this.btnSoundToggle) {
        this.btnSoundToggle.textContent = `AUDIO: ${!current ? 'ACTIVADO' : 'SILENCIADO'}`;
      }
      this.audioManager.playClick();
    });

    // Emergency audiovisual transitions
    EventBus.getInstance().on('emergency:started', () => {
      this.habitat.lighting.setEmergencyMode(true);
      this.sceneManager.setEmergencyAtmosphere(true);
      this.audioManager.startEmergencySiren();
    });

    EventBus.getInstance().on('emergency:resolved', () => {
      this.habitat.lighting.setEmergencyMode(false);
      this.sceneManager.setEmergencyAtmosphere(false);
      this.audioManager.stopEmergencySiren();
    });

    // Mission state changes
    EventBus.getInstance().on('mission:stateChanged', (data: { current: MissionState }) => {
      if (
        data.current === MissionState.ACTIVE ||
        data.current === MissionState.EMERGENCY ||
        data.current === MissionState.RECOVERY
      ) {
        this.mobileControls.setEnabled(true);
        this.mobileControls.setVisible(true);
      } else if (data.current === MissionState.PAUSED || data.current === MissionState.COMPLETED) {
        this.mobileControls.setEnabled(false);
        this.mobileControls.setVisible(false);
      }
    });

    // Console open/close events
    EventBus.getInstance().on('ui:openConsole', () => {
      this.inputManager.setEnabled(false);
      this.mobileControls.setEnabled(false);
      this.mobileControls.setVisible(false);
    });

    EventBus.getInstance().on('ui:consoleClosed', () => {
      const state = this.missionManager.getState();
      if (
        state === MissionState.ACTIVE ||
        state === MissionState.EMERGENCY ||
        state === MissionState.RECOVERY
      ) {
        this.inputManager.setEnabled(true);
        this.mobileControls.setEnabled(true);
        this.mobileControls.setVisible(true);
      }
    });

    // Briefing and Main Menu transitions
    EventBus.getInstance().on('ui:openBriefing', () => {
      this.mobileControls.setVisible(false);
    });

    EventBus.getInstance().on('mission:completed', () => {
      this.mobileControls.setVisible(false);
    });

    EventBus.getInstance().on('ui:showMainMenu', () => {
      this.mobileControls.setVisible(false);
      this.cameraManager.resetPosition();
      this.inputManager.setEnabled(true);
    });
  }

  private togglePause(): void {
    const isPaused = this.missionManager.getState() === MissionState.PAUSED;
    if (isPaused) {
      this.resume();
    } else {
      this.pause();
    }
  }

  private pause(): void {
    this.missionManager.pauseMission();
    this.inputManager.setEnabled(false);
    this.mobileControls.setEnabled(false);
    this.mobileControls.setVisible(false);
    this.modalPause?.classList.remove('hidden');
  }

  private resume(): void {
    this.modalPause?.classList.add('hidden');
    this.inputManager.setEnabled(true);
    this.mobileControls.setEnabled(true);
    this.mobileControls.setVisible(true);
    this.missionManager.resumeMission();
  }

  private restart(): void {
    this.modalPause?.classList.add('hidden');
    this.mobileControls.setVisible(false);
    this.missionManager.resetMission();
    this.cameraManager.resetPosition();
    this.mainMenu.show();
    this.inputManager.setEnabled(true);
  }

  private startLoop(): void {
    this.rendererManager.setAnimationLoop((_time: DOMHighResTimeStamp, _frame?: any) => {
      const delta = Math.min(this.clock.getDelta(), 0.1); // Clamp delta to avoid huge spikes

      // 1. Update 3D Habitat (procedural dust particles, screens, badges, lighting)
      this.habitat.update(delta);

      // 2. Platform specific update
      if (this.xrManager.getIsVRActive()) {
        this.xrInteractionManager.update(delta);
      } else {
        this.inputManager.update(delta);
      }

      // 3. Update Mission simulation & timer
      this.missionManager.update(delta);

      // 4. Render Scene
      this.rendererManager.render(this.sceneManager.scene, this.cameraManager.camera);
    });
  }
}
