// Mirrors the iOS app: BubbyProductionSpriteManifest.swift, BubbyIdleAnimation.swift
// and BubbySpriteAnimationCue.framesPerSecond. Frames are the app's own 64x64 PNGs,
// copied by scripts/sync-app-art.sh.

export type BubbyAnimation =
  | 'idle'
  | 'eating'
  | 'happy_bounce'
  | 'sleepy'
  | 'sick'
  | 'recovery'
  | 'workout'
  | 'spin'
  | 'tap_x_eyes';

export const BUBBY_SPRITE_SIZE = 64;
export const BUBBY_FRAMES_PER_SECOND = 12;

const frame = (name: string) => `/assets/bubby/${name}.png`;

export const bubbyFrames: Record<BubbyAnimation, string[]> = {
  idle: [
    frame('bubby_idle_neutral'),
    frame('bubby_idle_blink'),
    frame('bubby_idle_look_left'),
    frame('bubby_idle_look_right'),
    frame('bubby_idle_look_up'),
  ],
  eating: [frame('bubby_eating_chewing_closed'), frame('bubby_eating_chewing_open')],
  happy_bounce: [frame('bubby_happy_bounce_01'), frame('bubby_happy_bounce_02'), frame('bubby_happy_bounce_03')],
  sleepy: [frame('bubby_sleepy_droopy'), frame('bubby_sleepy_z')],
  sick: [frame('bubby_sick_01'), frame('bubby_sick_02')],
  recovery: [
    frame('bubby_recovery_01'),
    frame('bubby_recovery_02'),
    frame('bubby_recovery_03'),
    frame('bubby_recovery_04'),
  ],
  workout: [frame('bubby_workout_01'), frame('bubby_workout_02')],
  spin: [frame('bubby_spin_01'), frame('bubby_spin_02'), frame('bubby_spin_03'), frame('bubby_spin_04')],
  tap_x_eyes: [frame('bubby_x_eyes')],
};

export const allBubbyFrames = Object.values(bubbyFrames).flat();

const idleHoldMs = { min: 3_000, max: 7_000 };
const idleGlanceMs = { min: 150, max: 300 };
const idleBlinkRoll = 0.5;
const idleLookLeftRoll = 0.68;
const idleLookRightRoll = 0.86;

// Idle holds the neutral face for 3-7 s, then shows a blink or a glance for
// 150-300 ms. Every other animation steps at 12 fps.
export function frameDelayMs(animation: BubbyAnimation, frameIndex: number, random = Math.random): number {
  if (animation !== 'idle') {
    return 1000 / BUBBY_FRAMES_PER_SECOND;
  }

  const range = frameIndex === 0 ? idleHoldMs : idleGlanceMs;
  return Math.round(range.min + random() * (range.max - range.min));
}

export function nextFrameIndex(
  animation: BubbyAnimation,
  frameIndex: number,
  random = Math.random,
): number {
  const frameCount = bubbyFrames[animation].length;

  if (animation !== 'idle' || frameCount <= 2) {
    return (frameIndex + 1) % frameCount;
  }

  if (frameIndex !== 0) {
    return 0;
  }

  const roll = random();
  if (roll < idleBlinkRoll) return 1;
  if (roll < idleLookLeftRoll) return 2;
  if (roll < idleLookRightRoll) return 3;
  return 4;
}
