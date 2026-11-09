import { MissionObjective } from './MissionObjectives';

export type MissionType = 'tutorial' | 'standard' | 'certification';

export interface IMission {
  readonly id: string;
  readonly name: string;
  readonly type: MissionType;
  objectives: MissionObjective[];

  reset(): void;
  getObjectives(): MissionObjective[];
  getCompletedCount(): number;
  getProgressPercent(): number;

  handleLifeSupportDiagnostic?(): void;
  handleScienceCompleted?(): void;
  handleEmergencyResolved?(): void;
  handleInteraction?(interactableId: string): void;
  handleMovement?(distanceMoved: number): void;
}
