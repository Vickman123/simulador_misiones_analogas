/**
 * Global Configuration for Mars Analog Mission
 * SPACE Tech Labs
 */

export const CONFIG = {
  APP_NAME: 'MARS ANALOG MISSION',
  SUBTITLE: 'SPACE Tech Labs — Immersive Analog Mission Simulator',
  VERSION: '1.0.0-MVP',
  STORAGE_KEY: 'SPACE_TECH_LABS_MAM_v1',

  GRAPHICS: {
    FOV: 75,
    NEAR_PLANE: 0.1,
    FAR_PLANE: 250,
    DESKTOP_PIXEL_RATIO: Math.min(window.devicePixelRatio || 1, 2),
    XR_PIXEL_RATIO: 1.0, // Optimized for Quest 3 / Quest 3S
    SHADOWS_ENABLED: true
  },

  COLORS: {
    SPACE_BLACK: 0x07090e,
    SURFACE_DARK: 0x0f131a,
    METALLIC_PANEL: 0x1c2331,
    MARS_ORANGE: 0xff5722,
    MARS_ORANGE_LIGHT: 0xff7043,
    TECH_CYAN: 0x00e5ff,
    TECH_GREEN: 0x00e676,
    TECH_RED: 0xff1744,
    TECH_AMBER: 0xffab00,
    WARM_INTERIOR_LIGHT: 0xffe0b2,
    MARS_SKY: 0x994828,
    MARS_TERRAIN: 0xb5532c
  },

  HABITAT: {
    RADIUS: 17.5,
    HEIGHT: 4.6,
    WALKABLE_RADIUS: 16.2,
    WINDOW_WIDTH: 13.0,
    WINDOW_HEIGHT: 3.6,
    CAMERA_HEIGHT: 1.70 // Standard astronaut eye height in meters
  },

  EVA: {
    OUTDOORS_MAX_RADIUS: 110.0,
    MARS_GRAVITY: -3.71, // 0.38g vs -9.81 on Earth
    JUMP_VELOCITY: 4.8,
    SUIT_O2_DURATION_SECONDS: 600
  },

  MISSION: {
    ID: 'M-001',
    NAME: 'HABITAT RECOVERY & BIOGROWTH VALIDATION',
    TARGET_DURATION_SECONDS: 600, // 10 minutes nominal
    MAX_DURATION_SECONDS: 900 // 15 minutes max
  },

  CONTROLS: {
    WALK_SPEED: 3.5, // meters/second
    RUN_SPEED: 5.5,
    MOUSE_SENSITIVITY: 0.0022,
    CONTROLLER_DEADZONE: 0.15
  }
} as const;
