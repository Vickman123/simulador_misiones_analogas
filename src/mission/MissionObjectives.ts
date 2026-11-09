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

export const TUTORIAL_OBJECTIVES: MissionObjective[] = [
  {
    id: 'tut_movement',
    order: 1,
    title: 'Familiarización de Desplazamiento',
    description: 'Usa el joystick táctil o teclas WASD para caminar unos metros por el hábitat.',
    isCompleted: false,
    isCurrent: true,
    scoreWeight: 20
  },
  {
    id: 'tut_mission_control',
    order: 2,
    title: 'Centro de Mando & Telemetría',
    description: 'Acércate e interactúa con el Centro de Control frontal [CENTRO DE CONTROL].',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 20
  },
  {
    id: 'tut_lifesupport',
    order: 3,
    title: 'Consola de Soporte Vital (ECLSS)',
    description: 'Localiza la consola cian a la izquierda [1. SOPORTE VITAL] e inicia el diagnóstico.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 20
  },
  {
    id: 'tut_science',
    order: 4,
    title: 'Módulo Botánico BIOGROWTH-01',
    description: 'Inspecciona la Estación de Ciencias verde a la derecha [2. CIENCIA BIOLÓGICA].',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 20
  },
  {
    id: 'tut_resources',
    order: 5,
    title: 'Gabinete de Suministros & Herramientas',
    description: 'Visita el almacén ámbar al fondo [3. ALMACÉN Y REPUESTOS] para completar el entrenamiento.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 20
  }
];

export const CERTIFICATION_OBJECTIVES: MissionObjective[] = [
  {
    id: 'cert_diagnostics',
    order: 1,
    title: 'Auditoría Atmosférica y Filtración ECLSS',
    description: 'Ejecute diagnóstico completo verificando parámetros O2, CO2 y presión sin desviaciones.',
    isCompleted: false,
    isCurrent: true,
    scoreWeight: 10
  },
  {
    id: 'cert_biogrowth',
    order: 2,
    title: 'Calibración Fotónica BIOGROWTH-01',
    description: 'Configure fotoperiodo óptimo (Azul+Rojo) e irrigación hidropónica de precisión.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 10
  },
  {
    id: 'cert_emergency',
    order: 3,
    title: 'Respuesta ante Contingencia Crítica',
    description: 'Siga el checklist de 5 pasos con tolerancia cero a errores para reemplazar el filtro saturado.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 10
  },
  {
    id: 'cert_airlock',
    order: 4,
    title: 'Verificación de Hermeticidad en Esclusa (Airlock)',
    description: 'Inspeccione y certifique la presurización de la compuerta de salida exterior EVA.',
    isCompleted: false,
    isCurrent: false,
    scoreWeight: 10
  }
];
