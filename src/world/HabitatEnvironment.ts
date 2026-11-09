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
    const terrainGeo = new THREE.PlaneGeometry(320, 320, 64, 64);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const dist = Math.sqrt(x * x + z * z);

      // Protect expanded habitat interior (radius 17.5) and exterior ramp (+X direction around z: 5.5 to 7.5)
      const isNearRamp = x >= 14.0 && x <= 26.0 && z >= 2.0 && z <= 10.0;
      const clearRadius = isNearRamp ? 28.0 : (CONFIG.HABITAT.RADIUS + 6.0); // at least 23.5m

      let y = -0.65; // Foundation base well below floor (floor is at y = 0.0)

      if (dist > clearRadius && !isNearRamp) {
        // Smooth transition blend weight from 0 at clearRadius to 1 at clearRadius + 8
        const blend = Math.min(1.0, Math.max(0.0, (dist - clearRadius) / 8.0));
        const rawWave = Math.sin(x * 0.035) * 3.0 + Math.cos(z * 0.03) * 3.2 + Math.sin((x + z) * 0.07) * 1.5;
        let waveHeight = rawWave;
        // Distant crater rim to the north
        if (z < -40) {
          waveHeight += Math.pow(Math.abs(z + 40) * 0.12, 1.4);
        }
        y = -0.65 + blend * (waveHeight + 0.3);
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
    terrain.position.set(0, 0, 0);
    terrain.receiveShadow = true;
    this.group.add(terrain);

    // Scattered Martian boulders - strictly placed OUTDOORS, completely clear of habitat
    const rockGeo = new THREE.DodecahedronGeometry(1, 1);
    const rockMat = new THREE.MeshStandardMaterial({
      color: 0x823b1e,
      roughness: 0.9,
      metalness: 0.1
    });

    const rockCount = 55;
    for (let i = 0; i < rockCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Spawn only outside habitat clear radius (minimum 26.5m)
      const radius = 26.5 + Math.random() * 75;
      const rx = Math.cos(angle) * radius;
      const rz = Math.sin(angle) * radius;

      // Ensure no rocks land on the airlock ramp approach
      if (rx > 14.0 && rx < 28.0 && rz > 1.5 && rz < 10.5) {
        continue;
      }

      const rock = new THREE.Mesh(rockGeo, rockMat);
      const scale = 0.5 + Math.random() * 1.8;
      rock.scale.set(scale, scale * (0.6 + Math.random() * 0.5), scale);
      rock.position.set(rx, scale * 0.35 - 0.3, rz);
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
