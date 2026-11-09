import { EventBus } from '../utils/EventBus';
import { MissionManager } from '../mission/MissionManager';
import { AudioManager } from '../core/AudioManager';
import { bindFastClick } from '../utils/DOMUtils';

export class MissionBriefing {
  private modalEl: HTMLElement | null;
  private btnAccept: HTMLElement | null;
  private btnClose: HTMLElement | null;
  private modalTagEl: HTMLElement | null;
  private titleEl: HTMLElement | null;
  private speakerTextEl: HTMLElement | null;

  constructor() {
    this.modalEl = document.getElementById('modal-briefing');
    this.btnAccept = document.getElementById('btn-accept-briefing');
    this.btnClose = document.getElementById('btn-close-briefing');
    this.modalTagEl = this.modalEl?.querySelector('.modal-tag') || null;
    this.titleEl = this.modalEl?.querySelector('h2') || null;
    this.speakerTextEl = this.modalEl?.querySelector('.speaker-text') || null;

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
      EventBus.getInstance().emit('ui:showMainMenu');
    });

    EventBus.getInstance().on('ui:openBriefing', () => {
      this.show();
    });
  }

  public show(): void {
    const mode = MissionManager.getInstance().getMissionType();
    if (mode === 'certification') {
      if (this.modalTagEl) this.modalTagEl.textContent = 'EVALUACIÓN OFICIAL DE CERTIFICACIÓN';
      if (this.titleEl) this.titleEl.textContent = 'EXAMEN DE ASTRONAUTA ANÁLOGO';
      if (this.speakerTextEl) {
        this.speakerTextEl.innerHTML = `
          <p><strong>Comité de Evaluación de SPACE Tech Labs:</strong></p>
          <p>Bienvenido, aspirante a tripulante análogo. Esta prueba certifica tu capacidad operacional en aislamiento marciano a través de 4 fases rigurosas:</p>
          <ol class="briefing-steps">
            <li><strong>Auditoría ECLSS:</strong> Ejecuta el diagnóstico de soporte vital y valida parámetros de cabina.</li>
            <li><strong>Calibración Botánica:</strong> Sincroniza el fotoperiodo de luz e irrigación en BIOGROWTH-01.</li>
            <li><strong>Respuesta a Contingencia:</strong> Reemplaza el filtro HEPA-C1 saturado bajo checklist estricto.</li>
            <li><strong>Certificación de Esclusa (Airlock):</strong> Inspecciona la compuerta exterior y confirma presurización.</li>
          </ol>
          <div class="mobile-brief-hint">
            🏅 <strong>Certificación:</strong> Al obtener 75+ puntos recibirás tu Diploma Oficial descargable e imprimible con sello y código de verificación.
          </div>
        `;
      }
      if (this.btnAccept) this.btnAccept.textContent = 'INICIAR EXAMEN DE CERTIFICACIÓN';
    } else {
      if (this.modalTagEl) this.modalTagEl.textContent = 'ORDEN DE OPERACIONES';
      if (this.titleEl) this.titleEl.textContent = 'BRIEFING DE LA MISIÓN 001';
      if (this.speakerTextEl) {
        this.speakerTextEl.innerHTML = `
          <p><strong>Comandante de Misión Análoga:</strong></p>
          <p>Bienvenido a bordo de la estación análoga de investigación. Tu jornada contempla tres actividades clave:</p>
          <ol class="briefing-steps">
            <li><strong>Inspección Diagnóstica:</strong> Accede a la Consola de Soporte Vital y verifica los subsistemas de presurización y filtración.</li>
            <li><strong>Validación Biológica BIOGROWTH-01:</strong> En la Estación Científica, calibra los espectros lumínicos e irrigación hidropónica de la muestra análoga.</li>
            <li><strong>Resolución de Contingencia:</strong> Resuelve cualquier desviación operativa mediante los protocolos de reemplazo de filtros y presurización.</li>
          </ol>
          <div class="mobile-brief-hint">
            💡 <strong>Controles táctiles:</strong> Usa el joystick a la izquierda para caminar, desliza a la derecha para girar y toca las consolas o el botón "INTERACTUAR" para operar.
          </div>
        `;
      }
      if (this.btnAccept) this.btnAccept.textContent = 'COMENZAR OPERACIONES';
    }
    this.modalEl?.classList.remove('hidden');
  }

  public hide(): void {
    this.modalEl?.classList.add('hidden');
  }
}
