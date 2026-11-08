import * as THREE from 'three';

/**
 * Asset loader supporting procedural textures, canvas generators, and fallback handling.
 */
export class AssetLoader {
  private static instance: AssetLoader;
  private textureCache: Map<string, THREE.Texture> = new Map();

  private constructor() {}

  public static getInstance(): AssetLoader {
    if (!AssetLoader.instance) {
      AssetLoader.instance = new AssetLoader();
    }
    return AssetLoader.instance;
  }

  /**
   * Generates a procedural technical grid / panel texture
   */
  public createTechGridTexture(
    width = 512,
    height = 512,
    gridColor = '#1a2433',
    lineColor = '#00e5ff',
    step = 32
  ): THREE.CanvasTexture {
    const key = `tech_grid_${width}_${height}_${gridColor}_${lineColor}_${step}`;
    if (this.textureCache.has(key)) {
      return this.textureCache.get(key) as THREE.CanvasTexture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;

    // Background
    ctx.fillStyle = gridColor;
    ctx.fillRect(0, 0, width, height);

    // Fine subgrid
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += step / 4) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += step / 4) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Main grid
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1.5;
    for (let x = 0; x <= width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Tech markings
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.font = '10px monospace';
    ctx.fillText('SPACE TECH LABS // SEC-01', 12, 24);
    ctx.fillText('ARGYRE ANALOG HABITAT', 12, height - 12);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    this.textureCache.set(key, texture);
    return texture;
  }

  /**
   * Generates a procedural console screen texture with real-time redraw capability
   */
  public createConsoleCanvas(width = 512, height = 320): {
    texture: THREE.CanvasTexture;
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    update: () => void;
  } {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!;

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    return {
      texture,
      canvas,
      ctx,
      update: () => {
        texture.needsUpdate = true;
      }
    };
  }

  /**
   * Generates a seamless metal floor tile texture
   */
  public createFloorTexture(): THREE.CanvasTexture {
    const key = 'habitat_floor_texture';
    if (this.textureCache.has(key)) {
      return this.textureCache.get(key) as THREE.CanvasTexture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Base dark industrial gray
    ctx.fillStyle = '#141822';
    ctx.fillRect(0, 0, 512, 512);

    // Tread plate / non-slip grip pattern
    ctx.fillStyle = '#222938';
    for (let x = 0; x < 512; x += 16) {
      for (let y = 0; y < 512; y += 16) {
        ctx.fillRect(x + 2, y + 2, 6, 6);
        ctx.fillRect(x + 10, y + 10, 6, 6);
      }
    }

    // Panel border seams
    ctx.strokeStyle = '#090c12';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, 512, 512);

    // Hazard marking stripe in center
    ctx.fillStyle = 'rgba(255, 87, 34, 0.2)';
    ctx.fillRect(0, 240, 512, 32);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    this.textureCache.set(key, texture);
    return texture;
  }
}
