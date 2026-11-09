import { EventBus } from '../utils/EventBus';
import { AudioManager } from '../core/AudioManager';

export interface EVASuitTelemetry {
  o2Percent: number;
  batteryPercent: number;
  suitPressureKpa: number;
  heartRateBpm: number;
  samplesCollected: number;
  totalSamples: number;
}

export class EVASystem {
  private static instance: EVASystem;

  private isSuitDonned: boolean = false;
  private o2Percent: number = 100.0;
  private batteryPercent: number = 100.0;
  private suitPressureKpa: number = 29.6;
  private heartRateBpm: number = 78;
  private samplesCollected: number = 0;
  private readonly totalSamples: number = 3;

  private helmetHudEl: HTMLElement | null = null;
  private suitO2El: HTMLElement | null = null;
  private suitPressEl: HTMLElement | null = null;
  private suitBatEl: HTMLElement | null = null;
  private suitHrEl: HTMLElement | null = null;
  private suitSamplesEl: HTMLElement | null = null;

  private collectedRockIds: Set<string> = new Set();

  private constructor() {
    this.bindEvents();
  }

  public static getInstance(): EVASystem {
    if (!EVASystem.instance) {
      EVASystem.instance = new EVASystem();
    }
    return EVASystem.instance;
  }

  public initDOM(): void {
    this.helmetHudEl = document.getElementById('helmet-hud');
    this.suitO2El = document.getElementById('suit-o2-val');
    this.suitPressEl = document.getElementById('suit-press-val');
    this.suitBatEl = document.getElementById('suit-bat-val');
    this.suitHrEl = document.getElementById('suit-hr-val');
    this.suitSamplesEl = document.getElementById('suit-samples-val');
  }

  private bindEvents(): void {
    EventBus.getInstance().on('eva:suitUp', () => {
      this.donSuitAndExit();
    });

    EventBus.getInstance().on('eva:returnInside', () => {
      this.doffSuitAndEnter();
    });

    EventBus.getInstance().on('eva:collectSample', (sampleId: string) => {
      this.collectSample(sampleId);
    });
  }

  public getIsSuitDonned(): boolean {
    return this.isSuitDonned;
  }

  public donSuitAndExit(): void {
    if (this.isSuitDonned) return;
    this.isSuitDonned = true;

    try {
      AudioManager.getInstance().playSuccessTone();
    } catch (e) {
      // Audio fallback
    }

    if (!this.helmetHudEl) this.initDOM();
    if (this.helmetHudEl) {
      this.helmetHudEl.classList.remove('hidden');
    }

    EventBus.getInstance().emit('ui:notify', '👨‍🚀 Traje EMU-MARS equipado. Esclusa despresurizada a 0.6 kPa. ¡Bienvenido a la superficie de Marte!');
    EventBus.getInstance().emit('eva:stateChanged', { isOutdoors: true });
    EventBus.getInstance().emit('achievement:check', 'ach_mars_walker');
  }

  public doffSuitAndEnter(): void {
    if (!this.isSuitDonned) return;
    this.isSuitDonned = false;

    try {
      AudioManager.getInstance().playSuccessTone();
    } catch (e) {
      // Audio fallback
    }

    if (this.helmetHudEl) {
      this.helmetHudEl.classList.add('hidden');
    }

    EventBus.getInstance().emit('ui:notify', '🏠 Esclusa represurizada a 101.3 kPa. Traje EMU retirado. Has regresado al interior del hábitat.');
    EventBus.getInstance().emit('eva:stateChanged', { isOutdoors: false });
  }

  public collectSample(sampleId: string): void {
    if (this.collectedRockIds.has(sampleId)) return;
    this.collectedRockIds.add(sampleId);
    this.samplesCollected += 1;

    try {
      AudioManager.getInstance().playSuccessTone();
    } catch (e) {
      // Audio fallback
    }

    let sampleName = 'Muestra Geológica';
    if (sampleId === 'rockSampleAlpha') sampleName = 'Muestra Alfa: Basalto rico en Olivino';
    if (sampleId === 'rockSampleBeta') sampleName = 'Muestra Beta: Sulfatos y Arcillas de Impacto';
    if (sampleId === 'rockSampleGamma') sampleName = 'Muestra Gamma: Nódulos de Hematita Marciana';

    EventBus.getInstance().emit('ui:notify', `💎 ¡Recolectada! ${sampleName} (${this.samplesCollected}/${this.totalSamples})`);
    this.updateHUD();

    if (this.samplesCollected >= this.totalSamples) {
      EventBus.getInstance().emit('achievement:check', 'ach_geologist');
    }
  }

  public update(delta: number): void {
    if (!this.isSuitDonned) return;

    // Gradual consumption of suit life support
    this.o2Percent = Math.max(88, this.o2Percent - delta * 0.02);
    this.batteryPercent = Math.max(90, this.batteryPercent - delta * 0.015);

    // Heart rate responds to walking
    this.heartRateBpm = 76 + Math.round(Math.sin(Date.now() * 0.002) * 6);

    this.updateHUD();
  }

  private updateHUD(): void {
    if (this.suitO2El) this.suitO2El.textContent = `${this.o2Percent.toFixed(1)}%`;
    if (this.suitPressEl) this.suitPressEl.textContent = `${this.suitPressureKpa.toFixed(1)} kPa`;
    if (this.suitBatEl) this.suitBatEl.textContent = `${Math.round(this.batteryPercent)}%`;
    if (this.suitHrEl) this.suitHrEl.textContent = `${this.heartRateBpm} BPM`;
    if (this.suitSamplesEl) this.suitSamplesEl.textContent = `${this.samplesCollected}/${this.totalSamples}`;
  }

  public getTelemetry(): EVASuitTelemetry {
    return {
      o2Percent: this.o2Percent,
      batteryPercent: this.batteryPercent,
      suitPressureKpa: this.suitPressureKpa,
      heartRateBpm: this.heartRateBpm,
      samplesCollected: this.samplesCollected,
      totalSamples: this.totalSamples
    };
  }

  public reset(): void {
    this.isSuitDonned = false;
    this.o2Percent = 100.0;
    this.batteryPercent = 100.0;
    this.suitPressureKpa = 29.6;
    this.heartRateBpm = 78;
    this.samplesCollected = 0;
    this.collectedRockIds.clear();
    if (this.helmetHudEl) {
      this.helmetHudEl.classList.add('hidden');
    }
  }
}
