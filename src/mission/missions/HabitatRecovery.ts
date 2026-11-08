import { EventBus } from '../../utils/EventBus';
import { HABITAT_RECOVERY_OBJECTIVES, MissionObjective } from '../MissionObjectives';
import { LifeSupportSystem } from '../../systems/LifeSupportSystem';
import { ScienceExperimentSystem } from '../../systems/ScienceExperimentSystem';
import { EmergencySystem } from '../../systems/EmergencySystem';
import { AudioManager } from '../../core/AudioManager';

export class HabitatRecoveryMission {
  public readonly id = 'M-001';
  public readonly name = 'HABITAT RECOVERY';
  public objectives: MissionObjective[] = [];

  private isEmergencyTriggered: boolean = false;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.objectives = JSON.parse(JSON.stringify(HABITAT_RECOVERY_OBJECTIVES));
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

  public handleLifeSupportDiagnostic(): void {
    const obj = this.objectives.find((o) => o.id === 'obj_inspection');
    if (obj && !obj.isCompleted) {
      obj.isCompleted = true;
      obj.isCurrent = false;

      // Advance current to science objective
      const nextObj = this.objectives.find((o) => o.id === 'obj_science');
      if (nextObj) nextObj.isCurrent = true;

      AudioManager.getInstance().playSuccessTone();
      EventBus.getInstance().emit('mission:objectiveUpdated', {
        objectiveId: obj.id,
        completed: true,
        percent: this.getProgressPercent()
      });
    }
  }

  public handleScienceCompleted(): void {
    const obj = this.objectives.find((o) => o.id === 'obj_science');
    if (obj && !obj.isCompleted) {
      obj.isCompleted = true;
      obj.isCurrent = false;

      AudioManager.getInstance().playSuccessTone();
      EventBus.getInstance().emit('mission:objectiveUpdated', {
        objectiveId: obj.id,
        completed: true,
        percent: this.getProgressPercent()
      });

      // Automatically trigger emergency 1.5 seconds later
      if (!this.isEmergencyTriggered) {
        this.isEmergencyTriggered = true;
        window.setTimeout(() => {
          const emergObj = this.objectives.find((o) => o.id === 'obj_emergency');
          if (emergObj) emergObj.isCurrent = true;
          EmergencySystem.getInstance().triggerEmergency();
        }, 1500);
      }
    }
  }

  public handleEmergencyResolved(): void {
    const obj = this.objectives.find((o) => o.id === 'obj_emergency');
    if (obj && !obj.isCompleted) {
      obj.isCompleted = true;
      obj.isCurrent = false;

      AudioManager.getInstance().playSuccessTone();
      EventBus.getInstance().emit('mission:objectiveUpdated', {
        objectiveId: obj.id,
        completed: true,
        percent: this.getProgressPercent()
      });
    }
  }
}
