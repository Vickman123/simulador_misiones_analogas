import { EventBus } from '../utils/EventBus';
import { MissionManager } from '../mission/MissionManager';
import { MissionState } from '../mission/MissionState';
import { LifeSupportTelemetry } from '../systems/LifeSupportSystem';
import { ResourceSystem } from '../systems/ResourceSystem';
import { IInteractable } from '../core/InteractionManager';

/**
 * Manages the in-game 2D HUD (top status bar, objectives sidebar, emergency banner, guide banner, reticle).
 */
export class MissionHUD {
  private timerEl: HTMLElement | null;
  private habitatStatusEl: HTMLElement | null;
  private progressPercentEl: HTMLElement | null;
  private progressFillEl: HTMLElement | null;
  private objectivesListEl: HTMLElement | null;
  private emergencyBannerEl: HTMLElement | null;

  // Real-time dynamic objective guide
  private guideBannerEl: HTMLElement | null;
  private guideInstructionEl: HTMLElement | null;
  private guideHintEl: HTMLElement | null;

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

    this.guideBannerEl = document.getElementById('objective-guide-banner');
    this.guideInstructionEl = document.getElementById('guide-instruction');
    this.guideHintEl = document.getElementById('guide-hint');

    this.telO2El = document.getElementById('tel-o2');
    this.telCo2El = document.getElementById('tel-co2');
    this.telPressEl = document.getElementById('tel-press');
    this.telPowerEl = document.getElementById('tel-power');

    this.reticleContainerEl = document.getElementById('reticle-container');
    this.tooltipTextEl = document.getElementById('tooltip-text');

    this.bindEvents();
    this.renderObjectives();
    this.updateGuideBanner();
  }

  private bindEvents(): void {
    // Timer tick
    EventBus.getInstance().on('mission:timerTick', (data: { formatted: string }) => {
      if (this.timerEl) this.timerEl.textContent = data.formatted;
    });

    // Objective updates
    EventBus.getInstance().on('mission:objectiveUpdated', () => {
      this.renderObjectives();
      this.updateGuideBanner();
    });

    // Resource acquisition
    EventBus.getInstance().on('resources:itemRetrieved', () => {
      this.updateGuideBanner();
    });

    // Emergency start
    EventBus.getInstance().on('emergency:started', () => {
      this.updateGuideBanner();
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
      this.updateGuideBanner();
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

  public updateGuideBanner(): void {
    if (!this.guideInstructionEl || !this.guideHintEl) return;
    const mission = MissionManager.getInstance().getActiveMission();
    const objectives = mission.getObjectives();
    const state = MissionManager.getInstance().getState();

    if (state === MissionState.COMPLETED) {
      this.guideInstructionEl.textContent = '✅ ¡MISIÓN 001 COMPLETADA CON ÉXITO!';
      this.guideHintEl.textContent = 'Revisa tu informe de evaluación y logros operacionales obtenidos.';
      return;
    }

    const currentObj = objectives.find((o) => o.isCurrent) || objectives.find((o) => !o.isCompleted);
    if (!currentObj) {
      this.guideInstructionEl.textContent = '✅ Objetivos primarios concluidos';
      this.guideHintEl.textContent = 'Generando evaluación final de misión...';
      return;
    }

    if (currentObj.id === 'obj_inspection') {
      this.guideInstructionEl.textContent = 'PASO 1: Dirígete a la Consola de Soporte Vital';
      this.guideHintEl.textContent = 'Sigue el marcador azul [1. SOPORTE VITAL] a tu izquierda e inicia el diagnóstico.';
    } else if (currentObj.id === 'obj_science') {
      this.guideInstructionEl.textContent = 'PASO 2: Dirígete a la Estación de Ciencias';
      this.guideHintEl.textContent = 'Sigue el marcador verde [2. CIENCIA BIOLÓGICA] a tu derecha y calibra BIOGROWTH-01.';
    } else if (currentObj.id === 'obj_emergency') {
      const hasFilter = ResourceSystem.getInstance().hasItem('filter_hepa_c1');
      if (!hasFilter) {
        this.guideInstructionEl.textContent = '⚠️ PASO 3: Ve al Almacén por el filtro de repuesto';
        this.guideHintEl.textContent = 'Sigue el marcador ámbar [3. ALMACÉN Y REPUESTOS] al fondo y extrae el filtro HEPA-C1.';
      } else {
        this.guideInstructionEl.textContent = '🛠️ PASO 4: Regresa a Soporte Vital para el reemplazo';
        this.guideHintEl.textContent = 'Ve a [1. SOPORTE VITAL] y ejecuta los 5 pasos del procedimiento de reemplazo.';
      }
    }
  }
}
