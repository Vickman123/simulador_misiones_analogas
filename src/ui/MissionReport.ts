import { EventBus } from '../utils/EventBus';
import { ScoreReport } from '../mission/MissionScoring';
import { MathUtils } from '../utils/MathUtils';
import { MissionManager } from '../mission/MissionManager';
import { AudioManager } from '../core/AudioManager';

export class MissionReport {
  private modalEl: HTMLElement | null;
  private cardContentEl: HTMLElement | null;

  constructor() {
    this.modalEl = document.getElementById('modal-report');
    this.cardContentEl = document.getElementById('report-card-content');

    this.bindEvents();
  }

  private bindEvents(): void {
    EventBus.getInstance().on('mission:completed', (data: { report: ScoreReport }) => {
      this.renderReport(data.report);
      this.show();
    });
  }

  public show(): void {
    this.modalEl?.classList.remove('hidden');
  }

  public hide(): void {
    this.modalEl?.classList.add('hidden');
  }

  private renderReport(report: ScoreReport): void {
    if (!this.cardContentEl) return;

    const formattedTime = MathUtils.formatTime(report.metrics.timeElapsedSeconds);

    const html = `
      <div class="report-header">
        <div class="space-badge">SPACE TECH LABS • EVALUACIÓN OPERACIONAL</div>
        <h2 style="font-family: var(--font-display); font-size: 1.8rem; margin: 8px 0;">INFORME FINAL DE MISIÓN 001</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem;">Estación Análoga Argyre Planitia — Módulo de Investigación</p>
      </div>

      <div class="report-score-box">
        <div class="score-circle">
          <span class="score-number">${report.totalScore}</span>
          <span class="score-total">/ 100 PTS</span>
        </div>
        <div style="text-align: left;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim);">CALIFICACIÓN GLOBAL</div>
          <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: ${report.totalScore >= 80 ? 'var(--tech-cyan)' : 'var(--mars-orange-light)'};">
            ${report.rating}
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">
            Tiempo de Misión: <strong>${formattedTime}</strong>
          </div>
        </div>
      </div>

      <div class="report-breakdown">
        <div class="breakdown-row">
          <span>Cumplimiento de Objetivos (3/3):</span>
          <strong style="color: var(--tech-cyan);">${report.breakdown.objectivesScore} / 40 pts</strong>
        </div>
        <div class="breakdown-row">
          <span>Precisión Procedimental y Seguridad:</span>
          <strong style="color: var(--tech-green);">${report.breakdown.proceduralScore} / 30 pts</strong>
        </div>
        <div class="breakdown-row">
          <span>Decisiones de Laboratorio & Recursos:</span>
          <strong style="color: var(--mars-orange-light);">${report.breakdown.resourcesScore} / 20 pts</strong>
        </div>
        <div class="breakdown-row">
          <span>Eficiencia Temporal:</span>
          <strong style="color: #fff;">${report.breakdown.timeScore} / 10 pts</strong>
        </div>
      </div>

      <div class="report-feedback">
        <strong style="color: var(--tech-cyan);">OBSERVACIONES EDUCATIVAS:</strong>
        <ul style="margin: 6px 0 12px 18px;">
          ${report.educationalNotes.map((note) => `<li>${note}</li>`).join('')}
        </ul>
        <strong style="color: var(--mars-orange-light);">RECOMENDACIONES DE MEJORA:</strong>
        <ul style="margin: 6px 0 0 18px;">
          ${report.recommendations.map((rec) => `<li>${rec}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 16px; margin-top: 20px;">
        <button id="btn-repeat-mission" class="btn-primary-large" style="flex: 1;">
          REPETIR MISIÓN
        </button>
      </div>

      <div style="font-size: 0.72rem; color: var(--text-dim); margin-top: 14px;">
        ✓ Datos de rendimiento guardados localmente bajo la clave del sistema SPACE Tech Labs.
      </div>
    `;

    this.cardContentEl.innerHTML = html;

    document.getElementById('btn-repeat-mission')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      this.hide();
      MissionManager.getInstance().resetMission();
      EventBus.getInstance().emit('ui:showMainMenu');
    });
  }
}
