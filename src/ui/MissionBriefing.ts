import { EventBus } from '../utils/EventBus';
import { MissionManager } from '../mission/MissionManager';
import { AudioManager } from '../core/AudioManager';
import { bindFastClick } from '../utils/DOMUtils';

export class MissionBriefing {
  private modalEl: HTMLElement | null;
  private btnAccept: HTMLElement | null;
  private btnClose: HTMLElement | null;

  constructor() {
    this.modalEl = document.getElementById('modal-briefing');
    this.btnAccept = document.getElementById('btn-accept-briefing');
    this.btnClose = document.getElementById('btn-close-briefing');

    this.bindEvents();
  }

  private bindEvents(): void {
    bindFastClick(this.btnAccept, () => {
      AudioManager.getInstance().playClick();
      this.hide();
      MissionManager.getInstance().startMission();
      AudioManager.getInstance().startAmbientHum();
    });

    bindFastClick(this.btnClose, () => {
      AudioManager.getInstance().playClick();
      this.hide();
    });

    EventBus.getInstance().on('ui:openBriefing', () => {
      this.show();
    });
  }

  public show(): void {
    this.modalEl?.classList.remove('hidden');
  }

  public hide(): void {
    this.modalEl?.classList.add('hidden');
  }
}
