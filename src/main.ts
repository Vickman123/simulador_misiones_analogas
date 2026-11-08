import './styles.css';
import { Application } from './app/Application';

window.addEventListener('DOMContentLoaded', () => {
  try {
    const app = new Application();
    (window as any).__MARS_ANALOG_APP__ = app;
  } catch (error) {
    console.error('[Main] Failed to initialize MARS ANALOG MISSION application:', error);
    const errContainer = document.createElement('div');
    errContainer.style.cssText = 'position:fixed;top:20px;left:20px;background:#b71c1c;color:#fff;padding:16px;border-radius:8px;z-index:9999;font-family:sans-serif;max-width:400px;';
    errContainer.innerHTML = `<h3>Error al iniciar simulador</h3><p>${error instanceof Error ? error.message : String(error)}</p>`;
    document.body.appendChild(errContainer);
  }
});
