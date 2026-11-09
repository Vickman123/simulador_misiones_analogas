import { EventBus } from '../../utils/EventBus';
import { TUTORIAL_OBJECTIVES, MissionObjective } from '../MissionObjectives';
import { AudioManager } from '../../core/AudioManager';
import { IMission, MissionType } from '../MissionTypes';

export class TutorialMission implements IMission {
  public readonly id = 'M-TUTORIAL';
  public readonly name = 'ACADEMIA: ENTRENAMIENTO DE CONTROLES & HÁBITAT';
  public readonly type: MissionType = 'tutorial';
  public objectives: MissionObjective[] = [];

  private totalDistanceMoved: number = 0;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.objectives = JSON.parse(JSON.stringify(TUTORIAL_OBJECTIVES));
    this.totalDistanceMoved = 0;
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

  public handleMovement(distanceMoved: number): void {
    const obj = this.objectives.find((o) => o.id === 'tut_movement');
    if (obj && !obj.isCompleted) {
      this.totalDistanceMoved += distanceMoved;
      if (this.totalDistanceMoved >= 1.8) {
        this.completeObjective('tut_movement', 'tut_mission_control');
      }
    }
  }

  public handleInteraction(interactableId: string): void {
    switch (interactableId) {
      case 'missionControl':
        this.completeObjective('tut_mission_control', 'tut_lifesupport');
        break;
      case 'lifeSupportConsole':
        this.completeObjective('tut_lifesupport', 'tut_science');
        break;
      case 'scienceStation':
        this.completeObjective('tut_science', 'tut_resources');
        break;
      case 'resourceCabinet':
        this.completeObjective('tut_resources');
        break;
    }
  }

  public handleLifeSupportDiagnostic(): void {
    this.completeObjective('tut_lifesupport', 'tut_science');
  }

  public handleScienceCompleted(): void {
    this.completeObjective('tut_science', 'tut_resources');
  }
}
