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
   * Deterministic Martian terrain elevation profile matching HabitatEnvironment.
   * Inside the habitat (dist <= 17.5m): y = 0.0 (interior floor).
   * Airlock ramp (x from 17.5 to 24.0, z from 5.8 to 9.2): smooth transition from 0.0 to -0.65m.
   * Martian exterior (dist > 17.5m): base -0.65m with procedural undulating dunes, hills and crater rims.
   */
  public static getMartianTerrainHeight(x: number, z: number): number {
    const dist = Math.sqrt(x * x + z * z);

    // 1. Inside Habitat
    if (dist <= 17.5 && !(x >= 17.0 && z >= 5.8 && z <= 9.2)) {
      return 0.0;
    }

    // 2. Airlock Ramp Zone: x in [17.0, 24.0], z in [5.8, 9.2]
    if (x >= 17.0 && x <= 24.0 && z >= 5.8 && z <= 9.2) {
      const t = MathUtils.clamp((x - 17.0) / 7.0, 0, 1);
      return MathUtils.lerp(0.0, -0.65, t);
    }

    // 3. Clear flat apron around the habitat base
    const clearRadius = 23.5;
    if (dist <= clearRadius) {
      return -0.65;
    }

    // 4. Martian Dunes, Hills, and North Crater Rim
    const blend = Math.min(1.0, Math.max(0.0, (dist - clearRadius) / 8.0));
    const rawWave = Math.sin(x * 0.035) * 3.0 + Math.cos(z * 0.03) * 3.2 + Math.sin((x + z) * 0.07) * 1.5;
    let waveHeight = rawWave;
    if (z < -40) {
      waveHeight += Math.pow(Math.abs(z + 40) * 0.12, 1.4);
    }
    return -0.65 + blend * (waveHeight + 0.3);
  }

  /**
   * Resolve player movement using Axis-Separated Continuous Sliding Collision.
   * Tests X movement first, sliding along any obstacle plane,
   * then tests Z movement, sliding along any obstacle plane.
   * Completely eliminates tunneling, corner traps, and invisible wall glitches.
   */
  public static resolveSlidingCollisions(
    currentX: number,
    currentZ: number,
    targetX: number,
    targetZ: number,
    boxes: BoundingBox2D[],
    playerRadius: number = 0.32
  ): { x: number; z: number } {
    let resolvedX = targetX;
    let resolvedZ = targetZ;

    // --- STEP 1: RESOLVE X MOVEMENT (against currentZ) ---
    for (const b of boxes) {
      const minX = b.minX - playerRadius;
      const maxX = b.maxX + playerRadius;
      const minZ = b.minZ - playerRadius;
      const maxZ = b.maxZ + playerRadius;

      if (currentZ > minZ && currentZ < maxZ) {
        if (resolvedX > minX && resolvedX < maxX) {
          if (targetX >= currentX) {
            resolvedX = minX;
          } else {
            resolvedX = maxX;
          }
        }
      }
    }

    // --- STEP 2: RESOLVE Z MOVEMENT (against resolvedX) ---
    for (const b of boxes) {
      const minX = b.minX - playerRadius;
      const maxX = b.maxX + playerRadius;
      const minZ = b.minZ - playerRadius;
      const maxZ = b.maxZ + playerRadius;

      if (resolvedX > minX && resolvedX < maxX) {
        if (resolvedZ > minZ && resolvedZ < maxZ) {
          if (targetZ >= currentZ) {
            resolvedZ = minZ;
          } else {
            resolvedZ = maxZ;
          }
        }
      }
    }

    return { x: resolvedX, z: resolvedZ };
  }

  /**
   * Legacy wrapper maintaining backward compatibility.
   */
  public static resolveCollisions(
    targetX: number,
    targetZ: number,
    boxes: BoundingBox2D[],
    playerRadius: number = 0.32
  ): { x: number; z: number } {
    return MathUtils.resolveSlidingCollisions(targetX, targetZ, targetX, targetZ, boxes, playerRadius);
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
