import { MissionState } from './MissionState';
import { HabitatRecoveryMission } from './missions/HabitatRecovery';
import { TutorialMission } from './missions/TutorialMission';
import { CertificationMission } from './missions/CertificationMission';
import { IMission, MissionType } from './MissionTypes';
import { MissionScoring, ScoreReport } from './MissionScoring';
import { ProgressStorage } from '../storage/ProgressStorage';
import { EventBus } from '../utils/EventBus';
import { CONFIG } from '../app/Configuration';
import { MathUtils } from '../utils/MathUtils';
import { EmergencySystem } from '../systems/EmergencySystem';
import { ScienceExperimentSystem } from '../systems/ScienceExperimentSystem';
import { LifeSupportSystem } from '../systems/LifeSupportSystem';
import { ResourceSystem } from '../systems/ResourceSystem';

/**
 * Finite State Machine orchestrating the Mission simulation lifecycle.
 */
export class MissionManager {
  private static instance: MissionManager;

  private state: MissionState = MissionState.INITIALIZING;
  private previousState: MissionState = MissionState.INITIALIZING;
  private missionType: MissionType = 'standard';
  private activeMission: IMission;

  private elapsedSeconds: number = 0;
  private isTimerRunning: boolean = false;
  private latestReport: ScoreReport | null = null;

  private constructor() {
    this.activeMission = new HabitatRecoveryMission();
    this.bindEvents();
  }

  public static getInstance(): MissionManager {
    if (!MissionManager.instance) {
      MissionManager.instance = new MissionManager();
    }
    return MissionManager.instance;
  }

  private bindEvents(): void {
    // Connect LifeSupport diagnostic completion
    EventBus.getInstance().on('lifesupport:diagnosticComplete', () => {
      this.activeMission.handleLifeSupportDiagnostic?.();
      this.checkMissionAdvancement();
    });

    // Connect Science experiment completion
    EventBus.getInstance().on('science:completed', () => {
      this.activeMission.handleScienceCompleted?.();
      this.checkMissionAdvancement();
    });

    // Connect Emergency triggers and resolution
    EventBus.getInstance().on('emergency:started', () => {
      this.setState(MissionState.EMERGENCY);
    });

    EventBus.getInstance().on('emergency:resolved', () => {
      this.setState(MissionState.RECOVERY);
      this.activeMission.handleEmergencyResolved?.();
      this.checkMissionAdvancement();
    });

    // Connect interaction triggers for tutorial & certification
    EventBus.getInstance().on('interaction:triggered', (interactableId: string) => {
      this.activeMission.handleInteraction?.(interactableId);
      this.checkMissionAdvancement();
    });
  }

  public setMissionType(type: MissionType): void {
    this.missionType = type;
    if (type === 'tutorial') {
      this.activeMission = new TutorialMission();
    } else if (type === 'certification') {
      this.activeMission = new CertificationMission();
    } else {
      this.activeMission = new HabitatRecoveryMission();
    }
    EventBus.getInstance().emit('mission:typeChanged', type);
  }

  public getMissionType(): MissionType {
    return this.missionType;
  }

  public getState(): MissionState {
    return this.state;
  }

  public setState(newState: MissionState): void {
    if (this.state !== newState) {
      this.previousState = this.state;
      this.state = newState;
      EventBus.getInstance().emit('mission:stateChanged', {
        previous: this.previousState,
        current: this.state
      });
    }
  }

  public getActiveMission(): IMission {
    return this.activeMission;
  }

  public getElapsedSeconds(): number {
    return this.elapsedSeconds;
  }

  public getLatestReport(): ScoreReport | null {
    return this.latestReport;
  }

  public startMission(): void {
    this.resetMission();
    this.setState(MissionState.ACTIVE);
    this.isTimerRunning = true;
  }

  public pauseMission(): void {
    if (this.state === MissionState.ACTIVE || this.state === MissionState.EMERGENCY || this.state === MissionState.RECOVERY) {
      this.setState(MissionState.PAUSED);
      this.isTimerRunning = false;
    }
  }

  public resumeMission(): void {
    if (this.state === MissionState.PAUSED) {
      this.setState(this.previousState || MissionState.ACTIVE);
      this.isTimerRunning = true;
    }
  }

  public resetMission(): void {
    this.elapsedSeconds = 0;
    this.isTimerRunning = false;
    this.latestReport = null;
    this.activeMission.reset();
    LifeSupportSystem.getInstance().reset();
    ScienceExperimentSystem.getInstance().reset();
    ResourceSystem.getInstance().reset();
    EmergencySystem.getInstance().reset();
    this.setState(MissionState.READY);
  }

  private checkMissionAdvancement(): void {
    const total = this.activeMission.objectives.length;
    const completed = this.activeMission.getCompletedCount();

    if (completed >= total && this.state !== MissionState.COMPLETED) {
      this.completeMission();
    }
  }

  private completeMission(): void {
    this.isTimerRunning = false;
    this.setState(MissionState.COMPLETED);

    // Calculate official evaluation score
    const scienceResult = ScienceExperimentSystem.getInstance().getCompletedResult();
    const scienceAccuracy = scienceResult ? scienceResult.accuracyScore : 75;
    const proceduralMistakes = EmergencySystem.getInstance().getProceduralMistakes();

    this.latestReport = MissionScoring.calculate({
      completedObjectivesCount: this.activeMission.getCompletedCount(),
      totalObjectivesCount: this.activeMission.objectives.length,
      proceduralMistakes,
      scienceAccuracy,
      timeElapsedSeconds: Math.round(this.elapsedSeconds),
      targetTimeSeconds: CONFIG.MISSION.TARGET_DURATION_SECONDS
    });

    // Record run to local storage
    ProgressStorage.getInstance().recordMissionRun({
      missionId: this.activeMission.id,
      date: new Date().toISOString(),
      score: this.latestReport.totalScore,
      timeSeconds: Math.round(this.elapsedSeconds),
      objectivesCompleted: this.activeMission.getCompletedCount(),
      proceduralScore: this.latestReport.breakdown.proceduralScore,
      resourcesScore: this.latestReport.breakdown.resourcesScore,
      efficiencyScore: this.latestReport.breakdown.timeScore
    });

    if (this.missionType === 'certification') {
      EventBus.getInstance().emit('certification:completed', {
        report: this.latestReport,
        mission: this.activeMission
      });
    } else if (this.missionType === 'tutorial') {
      EventBus.getInstance().emit('tutorial:completed', {
        report: this.latestReport,
        mission: this.activeMission
      });
    } else {
      EventBus.getInstance().emit('mission:completed', { report: this.latestReport });
    }
  }

  public update(delta: number): void {
    if (this.isTimerRunning) {
      this.elapsedSeconds += delta;

      // In tutorial mode, advance movement objective
      if (this.missionType === 'tutorial') {
        this.activeMission.handleMovement?.(delta * 0.8);
        this.checkMissionAdvancement();
      }

      EventBus.getInstance().emit('mission:timerTick', {
        elapsedSeconds: this.elapsedSeconds,
        formatted: MathUtils.formatTime(this.elapsedSeconds)
      });

      // Update simulation subsystems
      LifeSupportSystem.getInstance().update(delta);
    }
  }
}
