import { EventBus } from '../utils/EventBus';
import { LifeSupportSystem } from '../systems/LifeSupportSystem';
import { ScienceExperimentSystem } from '../systems/ScienceExperimentSystem';
import { ResourceSystem } from '../systems/ResourceSystem';
import { EmergencySystem } from '../systems/EmergencySystem';
import { AudioManager } from '../core/AudioManager';

export class InteractionPanel {
  private modalLifeSupport: HTMLElement | null;
  private contentLifeSupport: HTMLElement | null;

  private modalScience: HTMLElement | null;
  private contentScience: HTMLElement | null;

  private modalResources: HTMLElement | null;
  private contentResources: HTMLElement | null;

  constructor() {
    this.modalLifeSupport = document.getElementById('modal-lifesupport');
    this.contentLifeSupport = document.getElementById('lifesupport-content');

    this.modalScience = document.getElementById('modal-science');
    this.contentScience = document.getElementById('science-content');

    this.modalResources = document.getElementById('modal-resources');
    this.contentResources = document.getElementById('resources-content');

    this.bindEvents();
  }

  private bindEvents(): void {
    // Open console event
    EventBus.getInstance().on('ui:openConsole', (type: 'lifesupport' | 'science' | 'resources') => {
      this.closeAll();
      if (type === 'lifesupport') this.openLifeSupport();
      if (type === 'science') this.openScience();
      if (type === 'resources') this.openResources();
    });

    // Close buttons
    document.getElementById('btn-close-lifesupport')?.addEventListener('click', () => this.closeAll());
    document.getElementById('btn-close-science')?.addEventListener('click', () => this.closeAll());
    document.getElementById('btn-close-resources')?.addEventListener('click', () => this.closeAll());

    // Notification toast
    EventBus.getInstance().on('ui:notify', (msg: string) => {
      alert(`[AVISO HÁBITAT] ${msg}`);
    });
  }

  public closeAll(): void {
    this.modalLifeSupport?.classList.add('hidden');
    this.modalScience?.classList.add('hidden');
    this.modalResources?.classList.add('hidden');
    EventBus.getInstance().emit('ui:consoleClosed');
  }

  /* --------------------------------------------------------------------------
     1. LIFE SUPPORT CONSOLE
     -------------------------------------------------------------------------- */
  private openLifeSupport(): void {
    this.modalLifeSupport?.classList.remove('hidden');
    this.renderLifeSupportUI();
  }

  private renderLifeSupportUI(): void {
    if (!this.contentLifeSupport) return;
    const lss = LifeSupportSystem.getInstance();
    const tel = lss.getTelemetry();
    const emerg = EmergencySystem.getInstance();
    const hasFilter = ResourceSystem.getInstance().hasItem('filter_hepa_c1');

    let html = `
      <div class="console-section-title">LECTURAS EN TIEMPO REAL (DATOS SIMULADOS)</div>
      <div class="console-grid">
        <div class="metric-card ${tel.o2Percent < 19.5 ? 'critical' : ''}">
          <div class="metric-card-title">Oxígeno Cabina (O₂)</div>
          <div class="metric-card-val">${tel.o2Percent.toFixed(1)} %</div>
          <div class="metric-card-status">${tel.o2Percent >= 19.5 ? 'ÓPTIMO' : 'BAJO'}</div>
        </div>
        <div class="metric-card ${tel.co2Ppm > 800 ? 'critical' : ''}">
          <div class="metric-card-title">Dióxido de Carbono (CO₂)</div>
          <div class="metric-card-val">${Math.round(tel.co2Ppm)} ppm</div>
          <div class="metric-card-status">${tel.co2Ppm <= 600 ? 'NOMINAL' : 'ACUMULACIÓN'}</div>
        </div>
        <div class="metric-card">
          <div class="metric-card-title">Presión Barométrica</div>
          <div class="metric-card-val">${tel.cabinPressureKpa.toFixed(1)} kPa</div>
          <div class="metric-card-status">HERMÉTICO</div>
        </div>
        <div class="metric-card ${emerg.getIsActive() ? 'critical' : ''}">
          <div class="metric-card-title">Circuito de Filtración</div>
          <div class="metric-card-val" style="font-size: 1.1rem;">${tel.filterLoopStatus}</div>
          <div class="metric-card-status">BUCLE SECUNDARIO</div>
        </div>
      </div>
    `;

    // Routine Diagnostic Section
    if (!emerg.getIsActive() && !emerg.getIsResolved()) {
      html += `
        <div class="console-section-title" style="margin-top: 15px;">RUTINA DE INSPECCIÓN DIAGNÓSTICA</div>
        <p style="color: var(--text-secondary); font-size: 0.85rem;">
          Inicie el escaneo de los subsistemas de soporte vital para verificar el circuito de aire y filtración.
        </p>
        <button id="btn-run-diagnostic" class="btn-primary-large" style="margin-top: 10px;">
          ${tel.diagnosticCompleted ? 'RE-EJECUTAR DIAGNÓSTICO INTEGRAL' : 'EJECUTAR DIAGNÓSTICO INTEGRAL'}
        </button>
      `;

      if (tel.diagnosticCompleted) {
        html += `
          <div style="background: rgba(255, 171, 0, 0.1); border-left: 3px solid #ffab00; padding: 12px; margin-top: 14px; border-radius: 4px;">
            <strong style="color: #ffab00;">RESULTADO DEL DIAGNÓSTICO:</strong>
            <p style="font-size: 0.85rem; margin-top: 4px;">
              ✓ Colector criogénico O₂: Nominal<br/>
              ✓ Válvulas barométricas: Nominal<br/>
              ⚠ <strong>Restricción de flujo detectada:</strong> Cartucho HEPA-C1 presenta pérdida de carga anómala. Continúe con sus asignaciones científicas mientras el sistema monitoriza el componente.
            </p>
          </div>
        `;
      }
    }

    // Emergency Protocol Section
    if (emerg.getIsActive()) {
      html += `
        <div class="console-section-title" style="margin-top: 15px; color: var(--tech-red);">
          PROTOCOLO DE CONTINGENCIA: REEMPLAZO DE FILTRO HEPA-C1
        </div>
        <p style="color: #ffcdd2; font-size: 0.85rem;">
          Siga rigurosamente la secuencia operacional para estabilizar el circuito de purificación.
        </p>

        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
          ${emerg.steps
            .map((step, idx) => {
              const isCurrent = emerg.getCurrentStep()?.id === step.id;
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: ${step.completed ? 'rgba(0, 230, 118, 0.1)' : isCurrent ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)'}; border: 1px solid ${isCurrent ? 'var(--tech-cyan)' : 'transparent'}; border-radius: 4px;">
                  <div>
                    <span style="font-weight: 700; color: ${step.completed ? 'var(--tech-green)' : isCurrent ? 'var(--tech-cyan)' : 'var(--text-secondary)'};">
                      ${step.name}
                    </span>
                    <div style="font-size: 0.75rem; color: var(--text-dim);">${step.description}</div>
                  </div>
                  <div>
                    ${
                      step.completed
                        ? '<span style="color: var(--tech-green); font-weight: 700;">COMPLETADO</span>'
                        : isCurrent
                        ? `<button class="btn-action btn-xr btn-execute-step" data-step="${step.id}" style="padding: 4px 12px;">EJECUTAR</button>`
                        : '<span style="color: var(--text-dim); font-size: 0.8rem;">PENDIENTE</span>'
                    }
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>

        ${
          !hasFilter
            ? `<div style="background: rgba(255, 23, 68, 0.15); border: 1px solid var(--tech-red); padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 0.82rem; color: #ffcdd2;">
                 ⚠ <strong>Aviso de Componente:</strong> Requiere el <em>Cartucho HEPA-C1</em>. Diríjase al <strong>Gabinete de Recursos</strong> para extraerlo antes del paso 3.
               </div>`
            : `<div style="background: rgba(0, 230, 118, 0.1); border: 1px solid var(--tech-green); padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 0.82rem; color: #b9f6ca;">
                 ✓ Cartucho HEPA-C1 en posesión del astronauta.
               </div>`
        }
      `;
    }

    if (emerg.getIsResolved()) {
      html += `
        <div style="background: rgba(0, 230, 118, 0.15); border: 1px solid var(--tech-green); padding: 14px; border-radius: 6px; margin-top: 15px;">
          <h4 style="color: var(--tech-green); font-family: var(--font-display);">¡SISTEMA COMPLETAMENTE RESTABLECIDO!</h4>
          <p style="font-size: 0.85rem; color: var(--text-primary); margin-top: 4px;">
            El flujo secundario opera con hermeticidad total y filtración nominal. Los niveles de CO₂ han sido normalizados.
          </p>
        </div>
      `;
    }

    this.contentLifeSupport.innerHTML = html;

    // Attach listeners
    document.getElementById('btn-run-diagnostic')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      lss.runDiagnostic();
      this.renderLifeSupportUI();
    });

    const stepButtons = this.contentLifeSupport.querySelectorAll('.btn-execute-step');
    stepButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const stepId = (e.currentTarget as HTMLElement).getAttribute('data-step')!;
        AudioManager.getInstance().playClick();
        const res = emerg.executeStep(stepId);
        if (!res.success) {
          alert(res.message);
        } else {
          AudioManager.getInstance().playSuccessTone();
        }
        this.renderLifeSupportUI();
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. SCIENCE EXPERIMENT CONSOLE (BIOGROWTH-01)
     -------------------------------------------------------------------------- */
  private openScience(): void {
    this.modalScience?.classList.remove('hidden');
    this.renderScienceUI();
  }

  private renderScienceUI(): void {
    if (!this.contentScience) return;
    const sci = ScienceExperimentSystem.getInstance();
    const currentSample = sci.getSelectedSample();
    const result = sci.getCompletedResult();

    let html = `
      <div class="console-section-title">SELECCIÓN DE ESPECÍMEN BOTÁNICO</div>
      <div style="display: flex; gap: 10px; margin-bottom: 16px;">
        ${sci.availableSamples
          .map(
            (s) => `
          <button class="btn-action btn-sample-select ${s.id === currentSample.id ? 'btn-xr' : ''}" data-id="${s.id}" style="flex: 1; text-align: left; padding: 10px;">
            <div style="font-weight: 700;">${s.name}</div>
            <div style="font-size: 0.7rem; color: var(--text-dim);">${s.scientificName}</div>
          </button>
        `
          )
          .join('')}
      </div>

      <div style="background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 14px; margin-bottom: 20px;">
        <div style="font-weight: 700; color: var(--tech-cyan);">${currentSample.name}</div>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 6px 0;">${currentSample.description}</p>
        <div style="display: flex; gap: 20px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--mars-orange-light);">
          <span>Fotoperiodo Óptimo: ~${currentSample.targetLight}%</span>
          <span>Irrigación Óptima: ~${currentSample.targetWater}%</span>
        </div>
      </div>

      <div class="console-section-title">CALIBRACIÓN DE PARÁMETROS HIDROPÓNICOS</div>

      <div class="control-row">
        <div class="control-label">
          <span>INTENSIDAD LUMÍNICA (ESPECTRO PAR):</span>
          <span id="lbl-light-val" style="color: var(--tech-cyan); font-weight: 700;">${sci.getLight()}%</span>
        </div>
        <input type="range" id="slider-light" class="control-slider" min="0" max="100" value="${sci.getLight()}">
      </div>

      <div class="control-row">
        <div class="control-label">
          <span>SUMINISTRO DE AGUA Y NUTRIENTES:</span>
          <span id="lbl-water-val" style="color: var(--tech-cyan); font-weight: 700;">${sci.getWater()}%</span>
        </div>
        <input type="range" id="slider-water" class="control-slider" min="0" max="100" value="${sci.getWater()}">
      </div>

      <button id="btn-run-experiment" class="btn-primary-large" style="margin-top: 10px; width: 100%;">
        ${result ? 'RE-CALIBRAR Y EJECUTAR CICLO' : 'INICIAR CICLO EXPERIMENTAL BIOGROWTH-01'}
      </button>
    `;

    if (result) {
      html += `
        <div style="background: rgba(0, 229, 255, 0.08); border-left: 3px solid var(--tech-cyan); border-radius: 6px; padding: 14px; margin-top: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <strong style="color: var(--tech-cyan); font-family: var(--font-display);">RESULTADO: ${result.outcome}</strong>
            <span style="font-family: var(--font-mono); font-weight: 700; color: #fff;">ÍNDICE DE CRECIMIENTO: ${result.growthIndexPercent}%</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-primary); margin-top: 6px;">
            ${result.educationalNote}
          </p>
        </div>
      `;
    }

    this.contentScience.innerHTML = html;

    // Sliders
    const sliderLight = document.getElementById('slider-light') as HTMLInputElement;
    const sliderWater = document.getElementById('slider-water') as HTMLInputElement;
    const lblLight = document.getElementById('lbl-light-val');
    const lblWater = document.getElementById('lbl-water-val');

    sliderLight?.addEventListener('input', () => {
      const val = Number(sliderLight.value);
      sci.setLight(val);
      if (lblLight) lblLight.textContent = `${val}%`;
    });

    sliderWater?.addEventListener('input', () => {
      const val = Number(sliderWater.value);
      sci.setWater(val);
      if (lblWater) lblWater.textContent = `${val}%`;
    });

    // Sample selection
    const sampleButtons = this.contentScience.querySelectorAll('.btn-sample-select');
    sampleButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id')!;
        AudioManager.getInstance().playClick();
        sci.setSample(id);
        this.renderScienceUI();
      });
    });

    // Run experiment button
    document.getElementById('btn-run-experiment')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      sci.executeExperiment();
      AudioManager.getInstance().playSuccessTone();
      this.renderScienceUI();
    });
  }

  /* --------------------------------------------------------------------------
     3. RESOURCE CABINET CONSOLE
     -------------------------------------------------------------------------- */
  private openResources(): void {
    this.modalResources?.classList.remove('hidden');
    this.renderResourcesUI();
  }

  private renderResourcesUI(): void {
    if (!this.contentResources) return;
    const res = ResourceSystem.getInstance();
    const items = res.getAllItems();
    const hasFilter = res.hasItem('filter_hepa_c1');

    const html = `
      <div class="console-section-title">INVENTARIO DEL HÁBITAT</div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${items
          .map(
            (item) => `
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0, 0, 0, 0.4); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 14px;">
            <div>
              <div style="font-weight: 700; color: #fff;">${item.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 2px;">${item.description}</div>
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--tech-cyan); margin-top: 4px;">CATEGORÍA: ${item.category.toUpperCase()}</div>
            </div>
            <div>
              ${
                item.id === 'filter_hepa_c1'
                  ? hasFilter
                    ? '<span style="color: var(--tech-green); font-weight: 700; font-size: 0.85rem;">EN TU EQUIPO</span>'
                    : `<button id="btn-retrieve-filter" class="btn-primary-large" style="padding: 8px 16px; font-size: 0.85rem;">EXTRAER REPUESTO</button>`
                  : '<span style="color: var(--text-secondary); font-size: 0.85rem;">EN DOTACIÓN</span>'
              }
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;

    this.contentResources.innerHTML = html;

    document.getElementById('btn-retrieve-filter')?.addEventListener('click', () => {
      AudioManager.getInstance().playClick();
      res.retrieveFilterFromCabinet();
      AudioManager.getInstance().playSuccessTone();
      this.renderResourcesUI();
    });
  }
}
