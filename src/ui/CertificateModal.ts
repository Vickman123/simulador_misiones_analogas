import { EventBus } from '../utils/EventBus';
import { ScoreReport } from '../mission/MissionScoring';
import { MathUtils } from '../utils/MathUtils';
import { AudioManager } from '../core/AudioManager';
import { bindFastClick } from '../utils/DOMUtils';

export class CertificateModal {
  private modalEl: HTMLElement | null;
  private nameInputEl: HTMLInputElement | null;
  private rankEl: HTMLElement | null;
  private scoreEl: HTMLElement | null;
  private timeEl: HTMLElement | null;
  private idEl: HTMLElement | null;
  private btnPrint: HTMLElement | null;
  private btnClose: HTMLElement | null;

  constructor() {
    this.modalEl = document.getElementById('modal-certificate');
    this.nameInputEl = document.getElementById('cert-astronaut-name') as HTMLInputElement | null;
    this.rankEl = document.getElementById('cert-rank-display');
    this.scoreEl = document.getElementById('cert-score-display');
    this.timeEl = document.getElementById('cert-time-display');
    this.idEl = document.getElementById('cert-id-display');
    this.btnPrint = document.getElementById('btn-print-certificate');
    this.btnClose = document.getElementById('btn-close-certificate');

    this.bindEvents();
  }

  private bindEvents(): void {
    EventBus.getInstance().on('certification:completed', (data: { report: ScoreReport }) => {
      this.populate(data.report);
      this.show();
    });

    if (this.nameInputEl) {
      // Remember name in localStorage
      const savedName = localStorage.getItem('mam_astronaut_name');
      if (savedName) this.nameInputEl.value = savedName;

      this.nameInputEl.addEventListener('input', () => {
        if (this.nameInputEl) {
          localStorage.setItem('mam_astronaut_name', this.nameInputEl.value);
        }
      });
    }

    bindFastClick(this.btnPrint, () => {
      AudioManager.getInstance().playClick();
      window.print();
    });

    bindFastClick(this.btnClose, () => {
      AudioManager.getInstance().playClick();
      this.hide();
      EventBus.getInstance().emit('ui:showMainMenu');
    });
  }

  public populate(report: ScoreReport): void {
    const formattedTime = MathUtils.formatTime(report.metrics.timeElapsedSeconds);

    let rank = 'ESPECIALISTA DE MISIÓN ANÁLOGA';
    let rankColor = 'var(--tech-cyan)';

    if (report.totalScore >= 95) {
      rank = 'COMANDANTE ANÁLOGO DE ÉLITE (HONORIS CAUSA)';
      rankColor = '#ffd700'; // Gold
    } else if (report.totalScore >= 85) {
      rank = 'OFICIAL DE SISTEMAS DE HÁBITAT CLASE I';
      rankColor = '#00e676'; // Tech Green
    } else if (report.totalScore >= 75) {
      rank = 'ESPECIALISTA DE MISIÓN ANÁLOGA CLASE II';
      rankColor = 'var(--tech-cyan)';
    } else {
      rank = 'CADETE ANÁLOGO (CERTIFICACIÓN CONDICIONAL)';
      rankColor = '#ffab00'; // Amber
    }

    if (this.rankEl) {
      this.rankEl.textContent = rank;
      this.rankEl.style.color = rankColor;
    }

    if (this.scoreEl) {
      this.scoreEl.textContent = `${report.totalScore} / 100 PTS`;
    }

    if (this.timeEl) {
      this.timeEl.textContent = formattedTime;
    }

    if (this.idEl) {
      const code = 'STL-MARS-' + Math.random().toString(16).substring(2, 6).toUpperCase();
      this.idEl.textContent = code;
    }

    try {
      AudioManager.getInstance().playSuccessTone();
    } catch (e) {
      // Audio fallback
    }
  }

  public show(): void {
    if (this.modalEl) {
      this.modalEl.classList.remove('hidden');
      this.modalEl.classList.add('visible');
    }
  }

  public hide(): void {
    if (this.modalEl) {
      this.modalEl.classList.remove('visible');
      this.modalEl.classList.add('hidden');
    }
  }
}
