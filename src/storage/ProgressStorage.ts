import { CONFIG } from '../app/Configuration';
import { UserProgressData, DEFAULT_STORAGE_DATA, MissionRunLog } from './StorageSchema';

/**
 * Robust Local Storage manager with in-memory fallback.
 */
export class ProgressStorage {
  private static instance: ProgressStorage;
  private memoryCache: UserProgressData;
  private isStorageAvailable: boolean;

  private constructor() {
    this.memoryCache = { ...DEFAULT_STORAGE_DATA };
    this.isStorageAvailable = this.checkStorageAvailability();
    this.loadData();
  }

  public static getInstance(): ProgressStorage {
    if (!ProgressStorage.instance) {
      ProgressStorage.instance = new ProgressStorage();
    }
    return ProgressStorage.instance;
  }

  private checkStorageAvailability(): boolean {
    try {
      const testKey = '__mam_test_storage__';
      window.localStorage.setItem(testKey, 'ok');
      window.localStorage.removeItem(testKey);
      return true;
    } catch {
      console.warn('[ProgressStorage] localStorage is unavailable. Using in-memory fallback.');
      return false;
    }
  }

  private loadData(): void {
    if (!this.isStorageAvailable) return;
    try {
      const raw = window.localStorage.getItem(CONFIG.STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.schemaVersion === DEFAULT_STORAGE_DATA.schemaVersion) {
          this.memoryCache = { ...DEFAULT_STORAGE_DATA, ...parsed };
        } else {
          // Schema migration hook if version changes in future
          this.memoryCache = { ...DEFAULT_STORAGE_DATA, ...parsed, schemaVersion: DEFAULT_STORAGE_DATA.schemaVersion };
          this.saveData();
        }
      }
    } catch (e) {
      console.error('[ProgressStorage] Error reading saved progress:', e);
    }
  }

  private saveData(): void {
    if (!this.isStorageAvailable) return;
    try {
      window.localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(this.memoryCache));
    } catch (e) {
      console.error('[ProgressStorage] Error writing progress data:', e);
    }
  }

  public getData(): Readonly<UserProgressData> {
    return this.memoryCache;
  }

  public recordMissionRun(log: MissionRunLog): void {
    this.memoryCache.totalRuns += 1;
    this.memoryCache.lastMissionDate = log.date;
    if (!this.memoryCache.completedMissions.includes(log.missionId)) {
      this.memoryCache.completedMissions.push(log.missionId);
    }

    if (log.score > this.memoryCache.bestScore) {
      this.memoryCache.bestScore = log.score;
    }

    if (this.memoryCache.bestTimeSeconds === 0 || log.timeSeconds < this.memoryCache.bestTimeSeconds) {
      this.memoryCache.bestTimeSeconds = log.timeSeconds;
    }

    this.memoryCache.history.unshift(log);
    // Keep last 15 runs
    if (this.memoryCache.history.length > 15) {
      this.memoryCache.history.pop();
    }

    this.saveData();
  }

  public setSoundEnabled(enabled: boolean): void {
    this.memoryCache.soundEnabled = enabled;
    this.saveData();
  }

  public clearProgress(): void {
    this.memoryCache = { ...DEFAULT_STORAGE_DATA };
    if (this.isStorageAvailable) {
      try {
        window.localStorage.removeItem(CONFIG.STORAGE_KEY);
      } catch (e) {
        console.error(e);
      }
    }
  }
}
