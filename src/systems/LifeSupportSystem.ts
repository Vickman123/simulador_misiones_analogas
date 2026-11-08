import { EventBus } from '../utils/EventBus';

export interface LifeSupportTelemetry {
  o2Percent: number;
  co2Ppm: number;
  cabinPressureKpa: number;
  powerKw: number;
  filterLoopStatus: 'NOMINAL' | 'ADVERTENCIA' | 'ANOMALÍA CRÍTICA' | 'RESTAURADO';
  diagnosticCompleted: boolean;
}

/**
 * Simulates the Habitat Life Support subsystem (ECLSS).
 */
export class LifeSupportSystem {
  private static instance: LifeSupportSystem;

  private telemetry: LifeSupportTelemetry = {
    o2Percent: 20.9,
    co2Ppm: 420,
    cabinPressureKpa: 101.3,
    powerKw: 98.4,
    filterLoopStatus: 'NOMINAL',
    diagnosticCompleted: false
  };

  private isEmergencyActive: boolean = false;

  private constructor() {
    this.bindEvents();
  }

  public static getInstance(): LifeSupportSystem {
    if (!LifeSupportSystem.instance) {
      LifeSupportSystem.instance = new LifeSupportSystem();
    }
    return LifeSupportSystem.instance;
  }

  private bindEvents(): void {
    EventBus.getInstance().on('emergency:started', () => {
      this.isEmergencyActive = true;
      this.telemetry.filterLoopStatus = 'ANOMALÍA CRÍTICA';
      EventBus.getInstance().emit('lifesupport:updated', this.telemetry);
    });

    EventBus.getInstance().on('emergency:resolved', () => {
      this.isEmergencyActive = false;
      this.telemetry.filterLoopStatus = 'RESTAURADO';
      this.telemetry.co2Ppm = 440;
      this.telemetry.o2Percent = 20.8;
      EventBus.getInstance().emit('lifesupport:updated', this.telemetry);
    });
  }

  public getTelemetry(): Readonly<LifeSupportTelemetry> {
    return this.telemetry;
  }

  /**
   * Run the interactive 3-step diagnostic on the console
   */
  public runDiagnostic(): { steps: Array<{ name: string; status: 'OK' | 'WARN'; detail: string }>; anomalyFound: boolean } {
    this.telemetry.diagnosticCompleted = true;
    this.telemetry.filterLoopStatus = 'ADVERTENCIA';

    const result = {
      steps: [
        { name: '1. Inyectores de O₂ Criogénico', status: 'OK' as const, detail: 'Presión en colector nominal (2.4 bar)' },
        { name: '2. Válvulas Reguladoras Barométricas', status: 'OK' as const, detail: 'Hermeticidad 101.3 kPa verificada' },
        { name: '3. Circuito de Filtración Secundario', status: 'WARN' as const, detail: 'Restricción de flujo detectada en cartucho HEPA-C1' }
      ],
      anomalyFound: true
    };

    EventBus.getInstance().emit('lifesupport:diagnosticComplete', result);
    EventBus.getInstance().emit('lifesupport:updated', this.telemetry);
    return result;
  }

  public update(delta: number): void {
    if (this.isEmergencyActive) {
      // CO2 increases gradually during filtration anomaly
      this.telemetry.co2Ppm = Math.min(920, this.telemetry.co2Ppm + delta * 8.5);
      this.telemetry.o2Percent = Math.max(19.6, this.telemetry.o2Percent - delta * 0.03);
      EventBus.getInstance().emit('lifesupport:updated', this.telemetry);
    }
  }

  public reset(): void {
    this.telemetry = {
      o2Percent: 20.9,
      co2Ppm: 420,
      cabinPressureKpa: 101.3,
      powerKw: 98.4,
      filterLoopStatus: 'NOMINAL',
      diagnosticCompleted: false
    };
    this.isEmergencyActive = false;
  }
}
