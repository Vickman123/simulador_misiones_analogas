import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

export class SceneManager {
  public readonly scene: THREE.Scene;

  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(CONFIG.COLORS.SPACE_BLACK);
    // Subtle distant Martian atmospheric fog visible through the observation window
    this.scene.fog = new THREE.FogExp2(CONFIG.COLORS.MARS_SKY, 0.006);
  }

  public add(object: THREE.Object3D): void {
    this.scene.add(object);
  }

  public remove(object: THREE.Object3D): void {
    this.scene.remove(object);
  }

  public setEmergencyAtmosphere(active: boolean): void {
    // Dynamic transition for emergency immersion
    if (active) {
      this.scene.fog = new THREE.FogExp2(0x3a0808, 0.015);
    } else {
      this.scene.fog = new THREE.FogExp2(CONFIG.COLORS.MARS_SKY, 0.006);
    }
  }
}
