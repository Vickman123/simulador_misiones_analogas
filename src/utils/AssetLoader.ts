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
   * Generates a seamless high-gloss white cleanroom epoxy floor texture
   * High-contrast design: pristine white composite tiles framed by crisp matte-black rubber gaskets and registration marks
   */
  public createFloorTexture(): THREE.CanvasTexture {
    const key = 'habitat_white_cleanroom_floor_black_margins';
    if (this.textureCache.has(key)) {
      return this.textureCache.get(key) as THREE.CanvasTexture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // 1. Pristine white cleanroom composite tile base
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, 512, 512);

    // 2. Subtle specular inner bevel on tiles
    ctx.fillStyle = '#ffffff';
    for (let x = 0; x < 512; x += 64) {
      for (let y = 0; y < 512; y += 64) {
        ctx.fillRect(x + 4, y + 4, 56, 56);
      }
    }

    // 3. Crisp Matte-Black Rubber Gasket Seams (Pequeños márgenes negros)
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3.5;
    for (let x = 0; x <= 512; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    for (let y = 0; y <= 512; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // 4. Solid Black Corner Registration Marks (+)
    ctx.strokeStyle = '#020617';
    ctx.lineWidth = 2.5;
    for (let x = 0; x <= 512; x += 64) {
      for (let y = 0; y <= 512; y += 64) {
        ctx.beginPath();
        ctx.moveTo(x - 6, y);
        ctx.lineTo(x + 6, y);
        ctx.moveTo(x, y - 6);
        ctx.lineTo(x, y + 6);
        ctx.stroke();
      }
    }

    // 5. High-contrast Black Perimeter Margin
    ctx.strokeStyle = '#020617';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, 512, 512);

    // 6. Navigation Corridor Guideline (Black border with Tech-Cyan center core)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 250, 512, 12);
    ctx.fillStyle = '#00e5ff';
    ctx.fillRect(0, 254, 512, 4);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(10, 10);
    this.textureCache.set(key, texture);
    return texture;
  }
}
