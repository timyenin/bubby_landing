import { useEffect, useState, useSyncExternalStore } from 'react';
import { getBubbyColor, type BubbyColorId } from '../data/bubbyColors';
import {
  allBubbyFrames,
  BUBBY_SPRITE_SIZE,
  bubbyFrames,
  frameDelayMs,
  nextFrameIndex,
  type BubbyAnimation,
} from '../data/bubbySprites';
import { useBubbyColor } from '../lib/bubbyColorContext';
import { getTintedFrame, getTintVersion, requestTintedFrames, subscribeToTints } from '../lib/bubbyTint';

type BubbySpriteProps = {
  animation?: BubbyAnimation;
  colorId?: BubbyColorId;
  size?: number;
  alt?: string;
  className?: string;
};

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

function subscribeToReducedMotion(listener: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener('change', listener);
  return () => query.removeEventListener('change', listener);
}

function prefersReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

let framesPreloaded = false;

function preloadFrames() {
  if (framesPreloaded) return;
  framesPreloaded = true;
  allBubbyFrames.forEach((src) => {
    const image = new Image();
    image.src = src;
  });
}

export function BubbySprite({ animation = 'idle', colorId, size, alt = '', className = '' }: BubbySpriteProps) {
  const pageColor = useBubbyColor().colorId;
  const { fillHex } = getBubbyColor(colorId ?? pageColor);
  const reducedMotion = useSyncExternalStore(subscribeToReducedMotion, prefersReducedMotion);
  useSyncExternalStore(subscribeToTints, getTintVersion);

  const [playback, setPlayback] = useState({ animation, frameIndex: 0 });
  const frameIndex = playback.animation === animation ? playback.frameIndex : 0;
  const frameCount = bubbyFrames[animation].length;

  useEffect(preloadFrames, []);

  useEffect(() => {
    if (fillHex) {
      requestTintedFrames(allBubbyFrames, fillHex);
    }
  }, [fillHex]);

  useEffect(() => {
    if (reducedMotion || frameCount < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPlayback({ animation, frameIndex: nextFrameIndex(animation, frameIndex) });
    }, frameDelayMs(animation, frameIndex));

    return () => window.clearTimeout(timer);
  }, [animation, frameIndex, frameCount, reducedMotion]);

  const frame = bubbyFrames[animation][frameIndex];
  const src = fillHex ? (getTintedFrame(frame, fillHex) ?? frame) : frame;

  return (
    <img
      className={`bubby-sprite ${className}`.trim()}
      src={src}
      alt={alt}
      width={size ?? BUBBY_SPRITE_SIZE}
      height={size ?? BUBBY_SPRITE_SIZE}
      style={size ? { width: size, height: size } : undefined}
      draggable={false}
      decoding="async"
    />
  );
}
