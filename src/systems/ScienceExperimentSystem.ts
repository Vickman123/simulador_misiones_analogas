import { EventBus } from '../utils/EventBus';

export interface PlantSample {
  id: string;
  name: string;
  scientificName: string;
  targetLight: number; // Percent
  targetWater: number; // Percent
  description: string;
}

export interface ExperimentResult {
  sampleId: string;
  sampleName: string;
  appliedLight: number;
  appliedWater: number;
  accuracyScore: number; // 0 to 100
  outcome: 'CRECIMIENTO ÓPTIMO' | 'CRECIMIENTO MODERADO' | 'ESTRÉS VEGETAL';
  growthIndexPercent: number;
  educationalNote: string;
}

export class ScienceExperimentSystem {
  private static instance: ScienceExperimentSystem;

  public readonly availableSamples: PlantSample[] = [
    {
      id: 'S-01',
      name: 'Arabidopsis Análoga',
      scientificName: 'Arabidopsis thaliana (Ecol-Mars-1)',
      targetLight: 70,
      targetWater: 55,
      description: 'Planta modelo para estudios genéticos en gravedad reducida y fotoperiodos regulados.'
    },
    {
      id: 'S-02',
      name: 'Espirulina Biocultivo',
      scientificName: 'Arthrospira platensis (Strain-M)',
      targetLight: 85,
      targetWater: 80,
      description: 'Cianobacteria fotosintética de alto rendimiento proteico y producción de O₂.'
    },
    {
      id: 'S-03',
      name: 'Tomate Enano Marciano',
      scientificName: 'Solanum lycopersicum Micro-Tom',
      targetLight: 60,
      targetWater: 65,
      description: 'Cultivo compacto apto para cámaras hidropónicas de hábitat con tolerancia a sales.'
    }
  ];

  private selectedSample: PlantSample = this.availableSamples[0];
  private lightLevel: number = 50;
  private waterLevel: number = 50;
  private completedResult: ExperimentResult | null = null;

  private constructor() {}

  public static getInstance(): ScienceExperimentSystem {
    if (!ScienceExperimentSystem.instance) {
      ScienceExperimentSystem.instance = new ScienceExperimentSystem();
    }
    return ScienceExperimentSystem.instance;
  }

  public setSample(sampleId: string): void {
    const found = this.availableSamples.find((s) => s.id === sampleId);
    if (found) {
      this.selectedSample = found;
      EventBus.getInstance().emit('science:sampleChanged', this.selectedSample);
    }
  }

  public getSelectedSample(): PlantSample {
    return this.selectedSample;
  }

  public setLight(val: number): void {
    this.lightLevel = Math.max(0, Math.min(100, Math.round(val)));
  }

  public getLight(): number {
    return this.lightLevel;
  }

  public setWater(val: number): void {
    this.waterLevel = Math.max(0, Math.min(100, Math.round(val)));
  }

  public getWater(): number {
    return this.waterLevel;
  }

  public getCompletedResult(): ExperimentResult | null {
    return this.completedResult;
  }

  /**
   * Evaluates the experiment deterministically based on parameters
   */
  public executeExperiment(): ExperimentResult {
    const lightDelta = Math.abs(this.lightLevel - this.selectedSample.targetLight);
    const waterDelta = Math.abs(this.waterLevel - this.selectedSample.targetWater);

    // Score deduction: max penalty is 100
    const totalDelta = lightDelta + waterDelta;
    const accuracy = Math.max(0, Math.min(100, 100 - totalDelta));

    let outcome: ExperimentResult['outcome'] = 'CRECIMIENTO ÓPTIMO';
    let growthIndex = 94;
    let note = '';

    if (accuracy >= 85) {
      outcome = 'CRECIMIENTO ÓPTIMO';
      growthIndex = Math.round(88 + (accuracy - 85) * 0.8);
      note = 'Calibración fotobiológica de precisión. Tasa fotosintética nominal alcanzada.';
    } else if (accuracy >= 60) {
      outcome = 'CRECIMIENTO MODERADO';
      growthIndex = Math.round(62 + (accuracy - 60) * 1.0);
      note = 'Crecimiento aceptable pero con desviación del punto óptimo de saturación lumínica o nutricional.';
    } else {
      outcome = 'ESTRÉS VEGETAL';
      growthIndex = Math.round(Math.max(20, accuracy * 0.7));
      note = 'Desbalance fisiológico severo detectado: revise parámetros de PAR e irrigación hidropónica.';
    }

    this.completedResult = {
      sampleId: this.selectedSample.id,
      sampleName: this.selectedSample.name,
      appliedLight: this.lightLevel,
      appliedWater: this.waterLevel,
      accuracyScore: accuracy,
      outcome,
      growthIndexPercent: growthIndex,
      educationalNote: note
    };

    EventBus.getInstance().emit('science:completed', this.completedResult);
    return this.completedResult;
  }

  public reset(): void {
    this.selectedSample = this.availableSamples[0];
    this.lightLevel = 50;
    this.waterLevel = 50;
    this.completedResult = null;
  }
}
