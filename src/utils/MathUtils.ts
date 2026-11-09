/**
 * Mathematical utilities and collision containment helpers.
 */

export interface BoundingBox2D {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

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
   * Resolve player movement against 2D Axis-Aligned Bounding Boxes with sliding collision
   */
  public static resolveCollisions(
    targetX: number,
    targetZ: number,
    boxes: BoundingBox2D[],
    playerRadius: number = 0.32
  ): { x: number; z: number } {
    let resolvedX = targetX;
    let resolvedZ = targetZ;

    for (const b of boxes) {
      const minX = b.minX - playerRadius;
      const maxX = b.maxX + playerRadius;
      const minZ = b.minZ - playerRadius;
      const maxZ = b.maxZ + playerRadius;

      if (resolvedX > minX && resolvedX < maxX && resolvedZ > minZ && resolvedZ < maxZ) {
        const dLeft = resolvedX - minX;
        const dRight = maxX - resolvedX;
        const dTop = resolvedZ - minZ;
        const dBottom = maxZ - resolvedZ;

        const minOverlap = Math.min(dLeft, dRight, dTop, dBottom);

        if (minOverlap === dLeft) {
          resolvedX = minX;
        } else if (minOverlap === dRight) {
          resolvedX = maxX;
        } else if (minOverlap === dTop) {
          resolvedZ = minZ;
        } else {
          resolvedZ = maxZ;
        }
      }
    }

    return { x: resolvedX, z: resolvedZ };
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

    // Collision with fixed circular obstacles
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
