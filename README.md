# MARS ANALOG MISSION
## SPACE Tech Labs — Immersive Analog Mission Simulator

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r160-black.svg)](https://threejs.org/)
[![WebXR](https://img.shields.io/badge/WebXR-Meta%20Quest%203%20%2F%203S-orange.svg)](https://immersiveweb.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.1-purple.svg)](https://vitejs.dev/)

**MARS ANALOG MISSION** es una experiencia inmersiva y simulador educativo de alta fidelidad desarrollado por **SPACE Tech Labs**. Permite a los participantes entrenar como astronautas análogos en una estación de investigación marciana (Argyre Planitia Analog Station), resolviendo contingencias operacionales en soporte vital y ejecutando experimentos biológicos en gravedad reducida.

El producto opera tanto en **navegadores de escritorio (PC/Mac)** con controles en primera persona (WASD + Mouse) como en **visores de realidad virtual Meta Quest 3 y Meta Quest 3S** mediante **WebXR** directo sin necesidad de instalar aplicaciones nativas.

---

## 🚀 Características Principales

1. **Arquitectura Modular & Desacoplada**:
   - Motor Three.js encapsulado en gestores independientes (`SceneManager`, `CameraManager`, `RendererManager`, `InputManager`).
   - Sistema de interacción universal (`InteractionManager` con contrato `IInteractable`) común para PC y WebXR.
   - Máquina de estados finita (`MissionManager`) que gobierna el ciclo de vida de la simulación.
   - Subsistemas científicos independientes: `LifeSupportSystem` (ECLSS), `ScienceExperimentSystem` (BIOGROWTH-01), `EmergencySystem` y `ResourceSystem`.

2. **Escenario 3D Optimizado**:
   - Hábitat análogo con piso técnico antideslizante, vigas estructurales presurizadas y mirador panorámico con vista a las dunas y cielo marciano.
   - Generación procedural autónoma (sin descargas lentas de texturas externas).
   - Menos de 45 draw calls y consumo controlado para mantener **72–90 FPS sostenidos en Meta Quest**.
   - Iluminación ambiental cálida interior (3200K) en contraste con el exterior marciano, con transición a estrobos rojos en estados de contingencia.

3. **Misión 001 — Habitat Recovery**:
   - **Objetivo 1 (Inspección ECLSS)**: Diagnóstico de subsistemas de oxígeno, CO₂, presión barométrica y detección de advertencia en el bucle secundario de filtrado.
   - **Objetivo 2 (Experimento BIOGROWTH-01)**: Selección de muestras botánicas análogas (*Arabidopsis*, *Espirulina*, *Tomate Micro-Tom*), calibración de espectro lumínico PAR e irrigación hidropónica con resultados biométricos deterministas.
   - **Objetivo 3 (Resolución de Emergencia)**: Alarma de saturación en filtro HEPA-C1, retiro del repuesto en el Gabinete de Recursos, y ejecución estricta del protocolo de reemplazo (aislamiento, purga, sustitución, torque dinamométrico y restablecimiento de flujo).
   - **Objetivo 4 (Evaluación Operacional)**: Informe final con calificación de 0 a 100 puntos desglosada en objetivos (40%), procedimientos (30%), decisiones científicas (20%) y eficiencia temporal (10%).

4. **Audio Espacial & Sintetizado**:
   - Sintetizador procedural mediante **Web Audio API** (zumbido de ventilación de soporte vital, confirmaciones de escaneo, clics tecnológicos y alarma sonora de emergencia). Cero peso en assets de audio externos.

5. **Persistencia Local**:
   - Almacenamiento versionado (`v1`) en `localStorage` con fallback seguro para guardar récord de puntuación, mejor tiempo, historial de misiones y preferencias.

---

## 🛠️ Tecnologías Utilizadas

- **TypeScript 5.3**: Tipado estricto en todos los módulos y subsistemas.
- **Three.js r160**: Renderizado 3D PBR, shader de atmósfera marciana, texturas Canvas dinámicas y partículas de polvo marciano.
- **WebXR Device API**: Soporte estéreo, tracking de controladores Touch de Meta Quest 3/3S, raycasting háptico y locomoción suave con thumbstick.
- **Vite 5**: Empaquetador ultrarrápido con base path relativo (`./`) para despliegue universal.

---

## 💻 Requisitos y Ejecución Local

### Prerrequisitos
- Node.js v18+ o v20 LTS
- npm v9+

### Instalación y Desarrollo
```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd "mision sts neri vela"

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo local
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

### Compilación para Producción
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.

Para previsualizar la compilación de producción:
```bash
npm run preview
```

---

## 🥽 Instrucciones para Probar en Meta Quest 3 / Quest 3S

La aplicación está diseñada para ejecutarse directamente desde el **Meta Quest Browser**:

### Opción A — Despliegue en GitHub Pages (Recomendado)
1. Despliega el proyecto en GitHub Pages (ver sección siguiente).
2. Abre el **Meta Quest Browser** dentro de tu visor.
3. Navega a la URL HTTPS generada (por ejemplo: `https://usuario.github.io/repositorio/`).
4. Haz clic en el botón **"ENTRAR A VR"** o **"MODO WEBXR"**.
5. Acepta la solicitud de sesión inmersiva y utiliza los controladores Touch para apuntar, interactuar con el gatillo y desplazarte con el thumbstick izquierdo.

### Opción B — Pruebas Locales vía Wi-Fi o Cable USB (ADB)
Dado que WebXR exige un contexto seguro (HTTPS o `localhost`):
1. **Vía Cable USB (ADB Reverse)**:
   ```bash
   adb reverse tcp:3000 tcp:3000
   ```
   Abre en el navegador del Quest: `http://localhost:3000`.
2. **Vía Wi-Fi con Flag de Chrome/Quest Browser**:
   - Inicia `npm run dev -- --host`.
   - Anota tu IP local (ej. `http://192.168.1.82:3000`).
   - En el Quest Browser, abre `chrome://flags/#unsafely-treat-insecure-origin-as-secure`.
   - Agrega tu IP local y habilita la bandera.

---

## 🌐 Instrucciones de Despliegue en GitHub Pages

El proyecto incluye el flujo de trabajo automatizado en `.github/workflows/deploy.yml`.

1. Sube tu código al repositorio en GitHub en la rama `main` o `master`:
   ```bash
   git add .
   git commit -m "feat: complete Mars Analog Mission MVP"
   git push origin main
   ```
2. En GitHub, ve a **Settings > Pages**.
3. En **Source**, selecciona **GitHub Actions**.
4. La GitHub Action compilará automáticamente el proyecto y desplegará el simulador en la URL oficial de GitHub Pages con HTTPS activo.

---

## 📋 Criterios de Evaluación Pedagógica

La puntuación final se calcula mediante un algoritmo de 0 a 100 puntos:
- **40 Puntos**: Objetivos de misión (12 pts inspección, 14 pts experimento biológico, 14 pts contingencia).
- **30 Puntos**: Precisión procedimental (se penalizan los intentos fuera de secuencia o la falta de verificación de válvulas).
- **20 Puntos**: Decisiones de laboratorio y recursos (ajuste de fotoperiodo PAR y nutrición hidropónica de la muestra).
- **10 Puntos**: Eficiencia temporal (completar dentro de la ventana nominal de 10 minutos).

---

## ⚠️ Aviso de Seguridad y Calidad Educativa

Este software es un **simulador educativo y de divulgación científica** desarrollado por **SPACE Tech Labs**. Las variables de soporte vital, parámetros biométricos y procedimientos operacionales corresponden a modelos análogos ficticios y no constituyen entrenamiento operacional certificado para vuelos espaciales tripulados.
