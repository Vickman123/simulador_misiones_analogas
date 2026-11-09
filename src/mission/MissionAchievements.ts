import { EventBus } from '../utils/EventBus';
import { ProgressStorage } from '../storage/ProgressStorage';
import { AudioManager } from '../core/AudioManager';
import { ScoreReport } from './MissionScoring';

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'operational' | 'science' | 'safety' | 'mastery';
}

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    id: 'ach_first_steps',
    icon: '🚀',
    title: 'Primer Contacto',
    description: 'Inicia tu primera simulación en la Estación Análoga Argyre Planitia.',
    category: 'operational'
  },
  {
    id: 'ach_diagnostic',
    icon: '🩺',
    title: 'Diagnóstico Vital',
    description: 'Completa la rutina integral de escaneo en la Consola ECLSS.',
    category: 'operational'
  },
  {
    id: 'ach_botanist',
    icon: '🌱',
    title: 'Botánico Marciano',
    description: 'Calibra con éxito el fotoperiodo e irrigación en BIOGROWTH-01.',
    category: 'science'
  },
  {
    id: 'ach_spare_part',
    icon: '📦',
    title: 'Técnico de Suministros',
    description: 'Localiza y extrae el cartucho de filtración HEPA-C1 del almacén.',
    category: 'operational'
  },
  {
    id: 'ach_hero',
    icon: '🛠️',
    title: 'Salvador del Hábitat',
    description: 'Resuelve la contingencia crítica de filtración restableciendo el soporte vital.',
    category: 'safety'
  },
  {
    id: 'ach_elite',
    icon: '🌟',
    title: 'Astronauta de Élite',
    description: 'Obtén una calificación superior a 90 puntos en el reporte final de misión.',
    category: 'mastery'
  },
  {
    id: 'ach_speedrun',
    icon: '⚡',
    title: 'Respuesta Rápida',
    description: 'Completa la misión 001 en menos de 4 minutos.',
    category: 'mastery'
  },
  {
    id: 'ach_explorer',
    icon: '🔍',
    title: 'Inspección Exhaustiva',
    description: 'Interactúa con todas las terminales y verifica la esclusa exterior.',
    category: 'operational'
  }
];

export class MissionAchievements {
  private static instance: MissionAchievements;
  private visitedStations: Set<string> = new Set();
  private toastContainer: HTMLElement | null = null;

  private constructor() {
    this.createToastContainer();
    this.bindEvents();
  }

  public static getInstance(): MissionAchievements {
    if (!MissionAchievements.instance) {
      MissionAchievements.instance = new MissionAchievements();
    }
    return MissionAchievements.instance;
  }

  private createToastContainer(): void {
    if (typeof document === 'undefined') return;
    let container = document.getElementById('achievement-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'achievement-toast-container';
      container.className = 'achievement-toast-container';
      document.body.appendChild(container);
    }
    this.toastContainer = container;
  }

  private bindEvents(): void {
    // 1. First steps on mission start
    EventBus.getInstance().on('mission:stateChanged', (data: { current: string }) => {
      if (data.current === 'ACTIVE') {
        this.unlock('ach_first_steps');
      }
    });

    // 2. Life support completed
    EventBus.getInstance().on('lifesupport:diagnosticComplete', () => {
      this.unlock('ach_diagnostic');
    });

    // 3. Science completed
    EventBus.getInstance().on('science:completed', () => {
      this.unlock('ach_botanist');
    });

    // 4. Resource retrieved
    EventBus.getInstance().on('resources:itemRetrieved', (item: { id: string }) => {
      if (item.id === 'filter_hepa_c1') {
        this.unlock('ach_spare_part');
      }
    });

    // 5. Emergency resolved
    EventBus.getInstance().on('emergency:resolved', () => {
      this.unlock('ach_hero');
    });

    // 6. Mission completion checks (Elite score & speedrun)
    EventBus.getInstance().on('mission:completed', (data: { report: ScoreReport }) => {
      if (data.report.totalScore >= 90) {
        this.unlock('ach_elite');
      }
      if (data.report.metrics.timeElapsedSeconds <= 240) {
        this.unlock('ach_speedrun');
      }
    });

    // 7. Exploration tracking
    const onInteract = (interactableId: string) => {
      this.visitedStations.add(interactableId);
      if (this.visitedStations.size >= 4) {
        this.unlock('ach_explorer');
      }
    };
    EventBus.getInstance().on('interaction:interacted', onInteract);
    EventBus.getInstance().on('interaction:triggered', onInteract);
  }

  public unlock(achievementId: string): boolean {
    const achievement = ACHIEVEMENTS_LIST.find((a) => a.id === achievementId);
    if (!achievement) return false;

    const storage = ProgressStorage.getInstance();
    const isNew = storage.unlockAchievement(achievementId);
    if (isNew) {
      try {
        AudioManager.getInstance().playSuccessTone();
      } catch (e) {
        // Audio might be blocked by browser policy before first interaction
      }
      this.showToast(achievement);
      EventBus.getInstance().emit('achievement:unlocked', achievement);
      return true;
    }
    return false;
  }

  private showToast(achievement: Achievement): void {
    if (!this.toastContainer) this.createToastContainer();
    if (!this.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'achievement-toast animate-slide-in';
    toast.innerHTML = `
      <div class="toast-glow"></div>
      <div class="toast-icon">${achievement.icon}</div>
      <div class="toast-info">
        <span class="toast-tag">¡LOGRO DESBLOQUEADO!</span>
        <strong class="toast-title">${achievement.title}</strong>
        <p class="toast-desc">${achievement.description}</p>
      </div>
    `;

    this.toastContainer.appendChild(toast);

    // Auto remove after 5 seconds
    window.setTimeout(() => {
      toast.classList.add('animate-slide-out');
      window.setTimeout(() => {
        if (toast.parentElement) {
          toast.parentElement.removeChild(toast);
        }
      }, 500);
    }, 4500);
  }

  public getAllAchievements(): { achievement: Achievement; isUnlocked: boolean }[] {
    const unlocked = ProgressStorage.getInstance().getUnlockedAchievements();
    return ACHIEVEMENTS_LIST.map((ach) => ({
      achievement: ach,
      isUnlocked: unlocked.includes(ach.id)
    }));
  }
}
