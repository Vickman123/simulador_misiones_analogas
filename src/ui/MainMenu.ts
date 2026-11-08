import { EventBus } from '../utils/EventBus';
import { AudioManager } from '../core/AudioManager';

export class MainMenu {
  private containerEl: HTMLElement | null;
  private btnDesktop: HTMLElement | null;
  private btnVR: HTMLElement | null;

  constructor() {
    this.containerEl = document.getElementById('screen-main-menu');
    this.btnDesktop = document.getElementById('btn-start-desktop');
    this.btnVR = document.getElementById('btn-start-vr');

    this.bindEvents();
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
