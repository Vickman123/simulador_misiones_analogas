import * as THREE from 'three';
import { CONFIG } from '../app/Configuration';

/**
 * Procedural Martian terrain, atmospheric dust particles, and celestial sky.
 */
export class HabitatEnvironment {
  public readonly group: THREE.Group;
  private dustParticles: THREE.Points | null = null;
  private dustPositions: Float32Array | null = null;

  constructor() {
    this.group = new THREE.Group();
    this.group.name = 'HabitatEnvironment';

    this.createSkyDome();
    this.createMartianTerrain();
    this.createMartianSun();
    this.createAtmosphericDust();
  }

  private createSkyDome(): void {
    const skyGeo = new THREE.SphereGeometry(180, 24, 16);
    // Invert geometry so it is visible from the inside
    skyGeo.scale(-1, 1, 1);

    const vertexShader = `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition).y;
        // Mars atmospheric gradient: rusty orange at horizon transitioning to deep cosmic black-red at zenith
        vec3 horizonColor = vec3(0.72, 0.32, 0.16);
        vec3 zenithColor = vec3(0.08, 0.04, 0.05);
        vec3 color = mix(horizonColor, zenithColor, max(pow(max(h, 0.0), 0.5), 0.0));
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const skyMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.BackSide,
      depthWrite: false
    });

    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.group.add(sky);
  }

  private createMartianTerrain(): void {
    // Large undulating ground outside the habitat
    const terrainGeo = new THREE.PlaneGeometry(240, 240, 48, 48);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      // Create natural crater ridges and Martian sand dunes using multi-frequency sinusoids
      const dist = Math.sqrt(x * x + z * z);
      let y = 0;
      if (dist > CONFIG.HABITAT.RADIUS + 3) {
        y = Math.sin(x * 0.04) * 2.5 + Math.cos(z * 0.035) * 2.8 + Math.sin((x + z) * 0.08) * 1.2;
        // Distant crater rim to the north
        if (z < -30) {
          y += Math.pow(Math.abs(z + 30) * 0.12, 1.4);
        }
      } else {
        y = -0.05; // Flat surface directly under habitat
      }
      pos.setY(i, y);
    }
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      color: CONFIG.COLORS.MARS_TERRAIN,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true
    });

    const terrain = new THREE.Mesh(terrainGeo, terrainMat);
    terrain.position.set(0, -0.05, 0);
    terrain.receiveShadow = true;
    this.group.add(terrain);

    // Scattered Martian boulders
    const rockGeo = new THREE.DodecahedronGeometry(1, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x823b1e,
      roughness: 0.9,
      metalness: 0.1
    });

    const rockCount = 45;
    for (let i = 0; i < rockCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 10 + Math.random() * 60;
      const rx = Math.cos(angle) * radius;
      const rz = Math.sin(angle) * radius;

      // Don't place rocks right in front of door
      const rock = new THREE.Mesh(rockGeo, rockMat);
      const scale = 0.4 + Math.random() * 1.5;
      rock.scale.set(scale, scale * (0.6 + Math.random() * 0.5), scale);
      rock.position.set(rx, scale * 0.4, rz);
      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      rock.castShadow = true;
      this.group.add(rock);
    }
  }

  private createMartianSun(): void {
    // The sun on Mars appears smaller and slightly blue-white due to dust scattering
    const sunGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xfff3e0
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(60, 45, -100);
    this.group.add(sun);

    // Subtle sun corona
    const coronaGeo = new THREE.RingGeometry(2.6, 6.5, 24);
    const coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffcc80,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });
    const corona = new THREE.Mesh(coronaGeo, coronaMat);
    corona.position.copy(sun.position);
    corona.lookAt(0, 0, 0);
    this.group.add(corona);
  }

  private createAtmosphericDust(): void {
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Confine particles around the observation window exterior
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = -CONFIG.HABITAT.RADIUS - Math.random() * 15;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xff8a65,
      size: 0.08,
      transparent: true,
      opacity: 0.65
    });

    this.dustParticles = new THREE.Points(geometry, material);
    this.dustPositions = positions;
    this.group.add(this.dustParticles);
  }

  public update(delta: number): void {
    // Gently animate floating Martian dust outside the panoramic window
    if (this.dustParticles && this.dustPositions) {
      const count = this.dustPositions.length / 3;
      for (let i = 0; i < count; i++) {
        // Drift along X (Martian wind) and slight oscillation
        this.dustPositions[i * 3] += 0.8 * delta;
        this.dustPositions[i * 3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.1 * delta;

        // Wrap around
        if (this.dustPositions[i * 3] > 18) {
          this.dustPositions[i * 3] = -18;
        }
      }
      this.dustParticles.geometry.attributes.position.needsUpdate = true;
    }
  }
}
