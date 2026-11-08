/**
 * Mathematical utilities and collision containment helpers.
 */

export class MathUtils {
  public static clamp(val: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, val));
  }

  public static lerp(start: number, end: number, t: number): number {
    return start + (end - start) * MathUtils.clamp(t, 0, 1);
  }

  public static formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const tenths = Math.floor((seconds % 1) * 10);
    const mm = mins.toString().padStart(2, '0');
    const ss = secs.toString().padStart(2, '0');
    return `${mm}:${ss}.${tenths}`;
  }

  /**
   * Constrain a 3D position vector (x, z) within an elliptical/capsule walkable boundary
   * representing the interior of the habitat module.
   */
  public static clampToHabitatWalkable(
    x: number,
    z: number,
    bounds: { minX: number; maxX: number; minZ: number; maxZ: number; obstacles?: Array<{ x: number; z: number; radius: number }> }
  ): { x: number; z: number } {
    let outX = MathUtils.clamp(x, bounds.minX, bounds.maxX);
    let outZ = MathUtils.clamp(z, bounds.minZ, bounds.maxZ);

    // Collision with fixed consoles/modules (prevent walking through equipment)
    if (bounds.obstacles) {
      for (const obs of bounds.obstacles) {
        const dx = outX - obs.x;
        const dz = outZ - obs.z;
        const distSq = dx * dx + dz * dz;
        const minRadius = obs.radius;
        if (distSq < minRadius * minRadius) {
          const dist = Math.sqrt(distSq) || 0.001;
          const overlap = minRadius - dist;
          outX += (dx / dist) * overlap;
          outZ += (dz / dist) * overlap;
        }
      }
    }

    return { x: outX, z: outZ };
  }
}
