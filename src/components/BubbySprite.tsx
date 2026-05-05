import { useEffect, useState } from 'react';
import {
  type BubbyState,
  getSpriteFrames,
  spriteFrameDurations,
} from '../data/bubbySprites';

type BubbySpriteProps = {
  state: BubbyState;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'hero';
  colorId?: string;
  alt?: string;
  className?: string;
};

export function BubbySprite({
  state,
  size = 'medium',
  colorId,
  alt,
  className = '',
}: BubbySpriteProps) {
  const frames = getSpriteFrames(state, colorId);
  const [frameIndex, setFrameIndex] = useState(0);
  const frame = frames[frameIndex % frames.length];

  useEffect(() => {
    if (frames.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setFrameIndex((index) => (index + 1) % frames.length);
    }, spriteFrameDurations[state]);

    return () => window.clearInterval(interval);
  }, [frames.length, state]);

  return (
    <img
      className={`bubby-sprite bubby-sprite--${size} ${className}`.trim()}
      src={frame}
      alt={alt ?? `${state.replace('_', ' ')} bubby`}
      width="360"
      height="360"
      loading="eager"
      decoding="async"
    />
  );
}
