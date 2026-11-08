import { EventBus } from '../utils/EventBus';
import { MissionManager } from '../mission/MissionManager';
import { MissionState } from '../mission/MissionState';
import { LifeSupportTelemetry } from '../systems/LifeSupportSystem';
import { IInteractable } from '../core/InteractionManager';

/**
 * Manages the in-game 2D HUD (top status bar, objectives sidebar, emergency banner, reticle).
 */
export class MissionHUD {
  private timerEl: HTMLElement | null;
  private habitatStatusEl: HTMLElement | null;
  private progressPercentEl: HTMLElement | null;
  private progressFillEl: HTMLElement | null;
  private objectivesListEl: HTMLElement | null;
  private emergencyBannerEl: HTMLElement | null;

  // Mini telemetry
  private telO2El: HTMLElement | null;
  private telCo2El: HTMLElement | null;
  private telPressEl: HTMLElement | null;
  private telPowerEl: HTMLElement | null;

  // Reticle & Tooltip
  private reticleContainerEl: HTMLElement | null;
  private tooltipTextEl: HTMLElement | null;

  constructor() {
    this.timerEl = document.getElementById('hud-timer');
    this.habitatStatusEl = document.getElementById('hud-habitat-status');
    this.progressPercentEl = document.getElementById('hud-progress-percent');
    this.progressFillEl = document.getElementById('hud-progress-fill');
    this.objectivesListEl = document.getElementById('hud-objectives-list');
    this.emergencyBannerEl = document.getElementById('emergency-banner');

    this.telO2El = document.getElementById('tel-o2');
    this.telCo2El = document.getElementById('tel-co2');
    this.telPressEl = document.getElementById('tel-press');
    this.telPowerEl = document.getElementById('tel-power');

    this.reticleContainerEl = document.getElementById('reticle-container');
    this.tooltipTextEl = document.getElementById('tooltip-text');

    this.bindEvents();
    this.renderObjectives();
  }

  private bindEvents(): void {
    // Timer tick
    EventBus.getInstance().on('mission:timerTick', (data: { formatted: string }) => {
      if (this.timerEl) this.timerEl.textContent = data.formatted;
    });

    // Objective updates
    EventBus.getInstance().on('mission:objectiveUpdated', () => {
      this.renderObjectives();
    });

    // Life support updates
    EventBus.getInstance().on('lifesupport:updated', (tel: LifeSupportTelemetry) => {
      if (this.telO2El) this.telO2El.textContent = `${tel.o2Percent.toFixed(1)}%`;
      if (this.telCo2El) this.telCo2El.textContent = `${Math.round(tel.co2Ppm)} ppm`;
      if (this.telPressEl) this.telPressEl.textContent = `${tel.cabinPressureKpa.toFixed(1)} kPa`;
      if (this.telPowerEl) this.telPowerEl.textContent = `${tel.powerKw.toFixed(1)} kW`;

      if (this.habitatStatusEl) {
        this.habitatStatusEl.textContent = tel.filterLoopStatus;
        this.habitatStatusEl.className = 'metric-value';
        if (tel.filterLoopStatus === 'NOMINAL' || tel.filterLoopStatus === 'RESTAURADO') {
          this.habitatStatusEl.classList.add('status-nominal');
        } else if (tel.filterLoopStatus === 'ADVERTENCIA') {
          this.habitatStatusEl.classList.add('status-warning');
        } else {
          this.habitatStatusEl.classList.add('status-critical');
        }
      }
    });

    // State changes (Emergency banner toggle)
    EventBus.getInstance().on('mission:stateChanged', (data: { current: MissionState }) => {
      if (this.emergencyBannerEl) {
        if (data.current === MissionState.EMERGENCY) {
          this.emergencyBannerEl.classList.remove('hidden');
        } else if (data.current === MissionState.RECOVERY || data.current === MissionState.COMPLETED) {
          this.emergencyBannerEl.classList.add('hidden');
        }
      }
    });

    // Interaction hover feedback
    EventBus.getInstance().on('interaction:hoverChanged', (data: { interactable: IInteractable | null; hasTarget: boolean }) => {
      if (this.reticleContainerEl) {
        if (data.hasTarget && data.interactable) {
          this.reticleContainerEl.classList.add('interactive');
          if (this.tooltipTextEl) {
            this.tooltipTextEl.textContent = `${data.interactable.name} — ${data.interactable.actionPrompt}`;
          }
        } else {
          this.reticleContainerEl.classList.remove('interactive');
        }
      }
    });
  }

  public renderObjectives(): void {
    const mission = MissionManager.getInstance().getActiveMission();
    const objectives = mission.getObjectives();
    const percent = mission.getProgressPercent();

    if (this.progressPercentEl) this.progressPercentEl.textContent = `${percent}%`;
    if (this.progressFillEl) this.progressFillEl.style.width = `${percent}%`;

    if (!this.objectivesListEl) return;

    this.objectivesListEl.innerHTML = '';
    for (const obj of objectives) {
      const li = document.createElement('li');
      li.className = 'objective-item';
      if (obj.isCompleted) li.classList.add('completed');
      if (obj.isCurrent) li.classList.add('current');

      const icon = document.createElement('div');
      icon.className = 'objective-icon';
      icon.innerHTML = obj.isCompleted ? '✓' : `${obj.order}`;

      const descBox = document.createElement('div');
      descBox.className = 'objective-desc';

      const title = document.createElement('span');
      title.className = 'objective-name';
      title.textContent = obj.title;

      const sub = document.createElement('span');
      sub.className = 'objective-subtext';
      sub.textContent = obj.description;

      descBox.appendChild(title);
      descBox.appendChild(sub);

      li.appendChild(icon);
      li.appendChild(descBox);
      this.objectivesListEl.appendChild(li);
    }
  }
}
