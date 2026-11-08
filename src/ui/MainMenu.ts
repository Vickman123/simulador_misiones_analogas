import { EventBus } from '../utils/EventBus';
import { AudioManager } from '../core/AudioManager';
import { PlatformManager } from '../app/PlatformManager';

export class MainMenu {
  private containerEl: HTMLElement | null;
  private btnDesktop: HTMLElement | null;
  private btnVR: HTMLElement | null;

  constructor() {
    this.containerEl = document.getElementById('screen-main-menu');
    this.btnDesktop = document.getElementById('btn-start-desktop');
    this.btnVR = document.getElementById('btn-start-vr');

    this.bindEvents();
    this.adaptForDevice();
  }

  private adaptForDevice(): void {
    const isMobile = PlatformManager.getInstance().getIsMobile();
    if (isMobile && this.btnDesktop) {
      const label = this.btnDesktop.querySelector('.btn-label');
      if (label) {
        label.textContent = 'INICIAR MISIÓN (MÓVIL / TÁCTIL)';
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
    this.btnDesktop?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      this.hide();
      EventBus.getInstance().emit('ui:openBriefing');
    });

    this.btnVR?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
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
