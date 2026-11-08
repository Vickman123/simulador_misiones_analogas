import { EventBus } from '../utils/EventBus';
import { ResourceSystem } from './ResourceSystem';

export interface EmergencyProtocolStep {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  requiredItemId?: string;
}

export class EmergencySystem {
  private static instance: EmergencySystem;

  private isActive: boolean = false;
  private isResolved: boolean = false;
  private currentStepIndex: number = 0;
  private proceduralMistakes: number = 0;

  public readonly steps: EmergencyProtocolStep[] = [
    {
      id: 'step_isolate',
      name: '1. Aislar Bucle Secundario',
      description: 'Cerrar la válvula de aislamiento V-204 para evitar retorno de contaminantes.',
      completed: false
    },
    {
      id: 'step_depressurize',
      name: '2. Purgar y Despresurizar Caja de Filtro',
      description: 'Aliviar presión residual hasta 0.2 bar manométricos.',
      completed: false
    },
    {
      id: 'step_replace',
      name: '3. Instalar Cartucho HEPA-C1 de Repuesto',
      description: 'Insertar la nueva unidad de filtrado obtenida del Gabinete de Recursos.',
      completed: false,
      requiredItemId: 'filter_hepa_c1'
    },
    {
      id: 'step_torque',
      name: '4. Ajustar Brida de Sellado Dinamométrico',
      description: 'Aplicar 35 N·m con la llave de acople rápido para garantizar hermeticidad.',
      completed: false
    },
    {
      id: 'step_reopen',
      name: '5. Restablecer Flujo y Calibrar Presión',
      description: 'Reabrir V-204 y verificar caída de presión nominal (< 12 Pa).',
      completed: false
    }
  ];

  private constructor() {}

  public static getInstance(): EmergencySystem {
    if (!EmergencySystem.instance) {
      EmergencySystem.instance = new EmergencySystem();
    }
    return EmergencySystem.instance;
  }

  public triggerEmergency(): void {
    if (this.isActive || this.isResolved) return;
    this.isActive = true;
    this.currentStepIndex = 0;
    this.proceduralMistakes = 0;

    EventBus.getInstance().emit('emergency:started', {
      timestamp: Date.now(),
      severity: 'CRITICAL',
      subsystem: 'ECLSS_SECONDARY_FILTRATION'
    });
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getIsResolved(): boolean {
    return this.isResolved;
  }

  public getCurrentStep(): EmergencyProtocolStep | null {
    if (!this.isActive || this.currentStepIndex >= this.steps.length) return null;
    return this.steps[this.currentStepIndex];
  }

  public executeStep(stepId: string): { success: boolean; message: string; allComplete: boolean } {
    if (!this.isActive) {
      return { success: false, message: 'No hay contingencia activa en este momento.', allComplete: false };
    }

    const expected = this.steps[this.currentStepIndex];
    if (expected.id !== stepId) {
      this.proceduralMistakes += 1;
      return {
        success: false,
        message: `Secuencia incorrecta. Paso esperado: "${expected.name}". Respete los protocolos operacionales de SPACE Tech Labs.`,
        allComplete: false
      };
    }

    // Check item prerequisite
    if (expected.requiredItemId) {
      const hasItem = ResourceSystem.getInstance().hasItem(expected.requiredItemId);
      if (!hasItem) {
        this.proceduralMistakes += 1;
        return {
          success: false,
          message: 'Falta componente requerido: Diríjase al Gabinete de Recursos para extraer el Cartucho HEPA-C1.',
          allComplete: false
        };
      }
      ResourceSystem.getInstance().consumeFilter();
    }

    expected.completed = true;
    this.currentStepIndex += 1;

    EventBus.getInstance().emit('emergency:stepCompleted', {
      stepId,
      stepIndex: this.currentStepIndex,
      totalSteps: this.steps.length
    });

    if (this.currentStepIndex >= this.steps.length) {
      this.isActive = false;
      this.isResolved = true;
      EventBus.getInstance().emit('emergency:resolved', {
        proceduralMistakes: this.proceduralMistakes
      });
      return { success: true, message: '¡Circuito restaurado con éxito! Condiciones atmosféricas estabilizadas.', allComplete: true };
    }

    return { success: true, message: `Paso "${expected.name}" completado correctamente.`, allComplete: false };
  }

  public getProceduralMistakes(): number {
    return this.proceduralMistakes;
  }

  public reset(): void {
    this.isActive = false;
    this.isResolved = false;
    this.currentStepIndex = 0;
    this.proceduralMistakes = 0;
    this.steps.forEach((s) => (s.completed = false));
  }
}
