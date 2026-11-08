export interface MissionObjective {
  id: string;
  order: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isCurrent: boolean;
  scoreWeight: number; // Part of 40 pts base
}

export const HABITAT_RECOVERY_OBJECTIVES: MissionObjective[] = [
  {
    id: 'obj_inspection',
    order: 1,
    title: 'Inspección de Soporte Vital',
    description: 'Acceda a la consola ECLSS y ejecute la rutina de diagnóstico integral.',
    isCompleted: false,
    isCurrent: true,
    scoreWeight: 12
  },
  {
    id: 'obj_science',
    order: 2,
    title: 'Experimento BIOGROWTH-01',
    description: 'Calibre fotoperiodo y suministro hidropónico en la Estación de Ciencias.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 14
  },
  {
    id: 'obj_emergency',
    order: 3,
    title: 'Resolución de Contingencia de Filtración',
    description: 'Obtenga filtro HEPA-C1 en almacén y reemplace el cartucho saturado.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 14
  }
];
