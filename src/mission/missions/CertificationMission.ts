import { EventBus } from '../../utils/EventBus';
import { CERTIFICATION_OBJECTIVES, MissionObjective } from '../MissionObjectives';
import { EmergencySystem } from '../../systems/EmergencySystem';
import { AudioManager } from '../../core/AudioManager';
import { IMission, MissionType } from '../MissionTypes';

export class CertificationMission implements IMission {
  public readonly id = 'M-CERT-01';
  public readonly name = 'EVALUACIÓN OFICIAL: CERTIFICACIÓN DE ASTRONAUTA ANÁLOGO';
  public readonly type: MissionType = 'certification';
  public objectives: MissionObjective[] = [];

  private isEmergencyTriggered: boolean = false;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.objectives = JSON.parse(JSON.stringify(CERTIFICATION_OBJECTIVES));
    this.isEmergencyTriggered = false;
  }

  public getObjectives(): MissionObjective[] {
    return this.objectives;
  }

  public getCompletedCount(): number {
    return this.objectives.filter((o) => o.isCompleted).length;
  }

  public getProgressPercent(): number {
    const total = this.objectives.length;
    if (total === 0) return 0;
    return Math.round((this.getCompletedCount() / total) * 100);
  }

  private completeObjective(id: string, nextId?: string): void {
    const obj = this.objectives.find((o) => o.id === id);
    if (obj && !obj.isCompleted) {
      obj.isCompleted = true;
      obj.isCurrent = false;

      if (nextId) {
        const next = this.objectives.find((o) => o.id === nextId);
        if (next && !next.isCompleted) {
          next.isCurrent = true;
        }
      } else {
        const nextPending = this.objectives.find((o) => !o.isCompleted);
        if (nextPending) nextPending.isCurrent = true;
      }

      AudioManager.getInstance().playSuccessTone();
      EventBus.getInstance().emit('mission:objectiveUpdated', {
        objectiveId: obj.id,
        completed: true,
        percent: this.getProgressPercent()
      });
    }
  }

  public handleLifeSupportDiagnostic(): void {
    this.completeObjective('cert_diagnostics', 'cert_biogrowth');
  }

  public handleScienceCompleted(): void {
    this.completeObjective('cert_biogrowth', 'cert_emergency');

    // Trigger rapid emergency under certification protocol
    if (!this.isEmergencyTriggered) {
      this.isEmergencyTriggered = true;
      window.setTimeout(() => {
        EmergencySystem.getInstance().triggerEmergency();
      }, 1200);
    }
  }

  public handleEmergencyResolved(): void {
    this.completeObjective('cert_emergency', 'cert_airlock');
  }

  public handleInteraction(interactableId: string): void {
    if (interactableId === 'airlockPanel') {
      const emerg = this.objectives.find((o) => o.id === 'cert_emergency');
      if (emerg && emerg.isCompleted) {
        this.completeObjective('cert_airlock');
      }
    }
  }
}
