import { MissionState } from './MissionState';
import { ScoreReport } from './MissionScoring';

export interface MissionEventsMap {
  'mission:stateChanged': { previous: MissionState; current: MissionState };
  'mission:objectiveUpdated': { objectiveId: string; completed: boolean; percent: number };
  'mission:timerTick': { elapsedSeconds: number; formatted: string };
  'mission:completed': { report: ScoreReport };
  'mission:failed': { reason: string };
}
