/**
 * Storage Schema for local user persistence
 */

export interface MissionRunLog {
  missionId: string;
  date: string;
  score: number;
  timeSeconds: number;
  objectivesCompleted: number;
  proceduralScore: number;
  resourcesScore: number;
  efficiencyScore: number;
}

export interface UserProgressData {
  schemaVersion: number;
  completedMissions: string[];
  bestScore: number;
  bestTimeSeconds: number;
  totalRuns: number;
  soundEnabled: boolean;
  lastMissionDate: string | null;
  history: MissionRunLog[];
}

export const DEFAULT_STORAGE_DATA: UserProgressData = {
  schemaVersion: 1,
  completedMissions: [],
  bestScore: 0,
  bestTimeSeconds: 0,
  totalRuns: 0,
  soundEnabled: true,
  lastMissionDate: null,
  history: []
};
