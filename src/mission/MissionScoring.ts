export interface ScoreReport {
  totalScore: number; // 0 to 100
  rating: 'SOBRESALIENTE' | 'COMPETENTE' | 'NECESITA REVISIÓN';
  breakdown: {
    objectivesScore: number; // Max 40
    proceduralScore: number; // Max 30
    resourcesScore: number;  // Max 20
    timeScore: number;       // Max 10
  };
  metrics: {
    timeElapsedSeconds: number;
    proceduralMistakes: number;
    scienceAccuracy: number;
    completedObjectivesCount: number;
  };
  educationalNotes: string[];
  recommendations: string[];
}

/**
 * Pure decoupled evaluation and scoring algorithm.
 */
export class MissionScoring {
  public static calculate(params: {
    completedObjectivesCount: number;
    totalObjectivesCount: number;
    proceduralMistakes: number;
    scienceAccuracy: number; // 0 to 100
    timeElapsedSeconds: number;
    targetTimeSeconds: number;
  }): ScoreReport {
    // 1. Objectives Score (Max 40)
    const objRatio = params.totalObjectivesCount > 0 ? params.completedObjectivesCount / params.totalObjectivesCount : 0;
    const objectivesScore = Math.round(objRatio * 40);

    // 2. Procedural Accuracy (Max 30)
    // 6 points deducted per operational mistake
    const proceduralScore = Math.max(0, Math.round(30 - params.proceduralMistakes * 6));

    // 3. Resources & Scientific Decisions (Max 20)
    const resourcesScore = Math.round((Math.max(0, Math.min(100, params.scienceAccuracy)) / 100) * 20);

    // 4. Time Efficiency (Max 10)
    let timeScore = 10;
    if (params.timeElapsedSeconds > params.targetTimeSeconds) {
      const overtime = params.timeElapsedSeconds - params.targetTimeSeconds;
      timeScore = Math.max(2, Math.round(10 - (overtime / 60) * 2.5));
    }

    const totalScore = Math.min(100, Math.max(0, objectivesScore + proceduralScore + resourcesScore + timeScore));

    let rating: ScoreReport['rating'] = 'COMPETENTE';
    if (totalScore >= 88) {
      rating = 'SOBRESALIENTE';
    } else if (totalScore < 70) {
      rating = 'NECESITA REVISIÓN';
    }

    const educationalNotes: string[] = [
      'El aislamiento y la gestión de atmósferas en bases análogas exigen adherencia irrestricta a listas de comprobación (checklists).',
      'En sistemas de soporte vital de circuito cerrado (ECLSS), una variación en el bucle secundario puede comprometer la remoción de CO₂.',
      'El cultivo botánico in situ (ISRU bio-regenerativo) depende de balances exactos de PAR (Radiación Fotosintéticamente Activa) y humedad radicular.'
    ];

    const recommendations: string[] = [];
    if (params.proceduralMistakes > 0) {
      recommendations.push(`Se registraron ${params.proceduralMistakes} desvíos de procedimiento en la secuencia de emergencia. Repase la guía de aislamiento de válvulas antes del desacople.`);
    } else {
      recommendations.push('Ejecución procedimental impecable sin errores de secuencia.');
    }

    if (params.scienceAccuracy < 75) {
      recommendations.push('Mejore la calibración del fotoperiodo e irrigación para optimizar la tasa fotosintética del espécimen botánico.');
    } else {
      recommendations.push('Parámetros de crecimiento vegetal ajustados en rango óptimo.');
    }

    if (timeScore < 8) {
      recommendations.push('Optimice los tiempos de desplazamiento entre estaciones dentro del módulo del hábitat.');
    }

    return {
      totalScore,
      rating,
      breakdown: {
        objectivesScore,
        proceduralScore,
        resourcesScore,
        timeScore
      },
      metrics: {
        timeElapsedSeconds: params.timeElapsedSeconds,
        proceduralMistakes: params.proceduralMistakes,
        scienceAccuracy: params.scienceAccuracy,
        completedObjectivesCount: params.completedObjectivesCount
      },
      educationalNotes,
      recommendations
    };
  }
}
