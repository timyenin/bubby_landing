export type BubbyState =
  | 'idle'
  | 'eating'
  | 'happy_bounce'
  | 'sleepy'
  | 'sick'
  | 'recovery'
  | 'workout';

export const spriteFallbackFrames: Record<BubbyState, string[]> = {
  idle: [
    '/assets/sprites/bubby_states/idle/idle_01.png',
    '/assets/sprites/bubby_states/idle/idle_02.png',
  ],
  eating: [
    '/assets/sprites/bubby_states/eating/eating_01.png',
    '/assets/sprites/bubby_states/eating/eating_02.png',
    '/assets/sprites/bubby_states/eating/eating_03.png',
    '/assets/sprites/bubby_states/eating/eating_04.png',
  ],
  happy_bounce: [
    '/assets/sprites/bubby_states/happy_bounce/happy_bounce_01.png',
    '/assets/sprites/bubby_states/happy_bounce/happy_bounce_02.png',
    '/assets/sprites/bubby_states/happy_bounce/happy_bounce_03.png',
    '/assets/sprites/bubby_states/happy_bounce/happy_bounce_04.png',
  ],
  sleepy: [
    '/assets/sprites/bubby_states/sleepy/sleepy_01.png',
    '/assets/sprites/bubby_states/sleepy/sleepy_02.png',
  ],
  sick: [
    '/assets/sprites/bubby_states/sick/sick_01.png',
    '/assets/sprites/bubby_states/sick/sick_02.png',
    '/assets/sprites/bubby_states/sick/sick_03.png',
  ],
  recovery: [
    '/assets/sprites/bubby_states/recovery/recovery_01.png',
    '/assets/sprites/bubby_states/recovery/recovery_02.png',
    '/assets/sprites/bubby_states/recovery/recovery_03.png',
    '/assets/sprites/bubby_states/recovery/recovery_04.png',
  ],
  workout: [
    '/assets/sprites/bubby_states/workout/workout_01.png',
    '/assets/sprites/bubby_states/workout/workout_02.png',
    '/assets/sprites/bubby_states/workout/workout_03.png',
    '/assets/sprites/bubby_states/workout/workout_04.png',
  ],
};

export function getFirstSpriteFrame(state: BubbyState): string {
  return spriteFallbackFrames[state][0];
}
