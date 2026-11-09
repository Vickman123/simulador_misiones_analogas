import { EventBus } from '../utils/EventBus';
import { AudioManager } from '../core/AudioManager';
import { PlatformManager } from '../app/PlatformManager';
import { MissionManager } from '../mission/MissionManager';
import { MissionType } from '../mission/MissionTypes';
import { bindFastClick } from '../utils/DOMUtils';

export class MainMenu {
  private containerEl: HTMLElement | null;
  private btnDesktop: HTMLElement | null;
  private btnVR: HTMLElement | null;
  private selectedMode: MissionType = 'standard';

  constructor() {
    this.containerEl = document.getElementById('screen-main-menu');
    this.btnDesktop = document.getElementById('btn-start-desktop');
    this.btnVR = document.getElementById('btn-start-vr');

    this.bindEvents();
    this.initModeSelector();
    this.adaptForDevice();
  }

  private initModeSelector(): void {
    const cards = document.querySelectorAll<HTMLElement>('.mode-card');
    cards.forEach((card) => {
      bindFastClick(card, () => {
        AudioManager.getInstance().playClick();
        cards.forEach((c) => c.classList.remove('active'));
        card.classList.add('active');

        const mode = (card.dataset.mode as MissionType) || 'standard';
        this.selectedMode = mode;
        MissionManager.getInstance().setMissionType(mode);
        this.adaptForDevice();
      });
    });
  }

  private adaptForDevice(): void {
    const isMobile = PlatformManager.getInstance().getIsMobile();
    if (this.btnDesktop) {
      const label = this.btnDesktop.querySelector('.btn-label');
      if (label) {
        if (this.selectedMode === 'tutorial') {
          label.textContent = isMobile ? 'INICIAR TUTORIAL (TÁCTIL)' : 'INICIAR TUTORIAL ACADÉMICO';
        } else if (this.selectedMode === 'certification') {
          label.textContent = isMobile ? 'INICIAR EXAMEN (CERTIFICACIÓN)' : 'INICIAR EXAMEN DE CERTIFICACIÓN';
        } else {
          label.textContent = isMobile ? 'INICIAR MISIÓN (MÓVIL / TÁCTIL)' : 'INICIAR MISIÓN ESTÁNDAR';
        }
      }
    }

    // Check WebXR support
    PlatformManager.getInstance().checkVRSupport().then((supported) => {
      if (!supported && isMobile && this.btnVR) {
        this.btnVR.style.opacity = '0.6';
        const label = this.btnVR.querySelector('.btn-label');
        if (label) {
          label.textContent = 'MODO VR (REQUIERE META QUEST)';
        }
      }
    });
  }

  private bindEvents(): void {
    bindFastClick(this.btnDesktop, () => {
      AudioManager.getInstance().playClick();
      this.hide();
      MissionManager.getInstance().setMissionType(this.selectedMode);
      if (this.selectedMode === 'tutorial') {
        // Direct start without briefing to get straight into learning
        MissionManager.getInstance().startMission();
        EventBus.getInstance().emit('ui:notify', '🎓 Bienvenido al Tutorial: Sigue las instrucciones del banner superior.');
      } else {
        EventBus.getInstance().emit('ui:openBriefing');
      }
    });

    bindFastClick(this.btnVR, () => {
      AudioManager.getInstance().playClick();
      MissionManager.getInstance().setMissionType(this.selectedMode);
      EventBus.getInstance().emit('xr:requestEnter');
    });

    EventBus.getInstance().on('ui:showMainMenu', () => {
      this.show();
      this.adaptForDevice();
    });

    EventBus.getInstance().on('platform:modeChanged', () => {
      this.adaptForDevice();
    });
  }

  public show(): void {
    if (this.containerEl) {
      this.containerEl.classList.remove('hidden');
      this.containerEl.classList.add('visible');
    }
  }

  public hide(): void {
    if (this.containerEl) {
      this.containerEl.classList.remove('visible');
      this.containerEl.classList.add('hidden');
    }
  }
}
