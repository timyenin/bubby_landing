import type { ReactNode } from 'react';

// Small pixel-grid shapes drawn on whole-pixel paths, like the hearts and
// sparkles on the App Store screenshots.

type PixelProps = { className?: string; color?: string; scale?: number };

export function PixelHeart({ className, color = 'var(--pink)', scale = 3 }: PixelProps) {
  return (
    <svg
      className={className}
      width={7 * scale}
      height={6 * scale}
      viewBox="0 0 7 6"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M1 0h2v1h1V0h2v1h1v2H6v1H5v1H4v1H3V5H2V4H1V3H0V1h1z" fill={color} />
    </svg>
  );
}

export function PixelSparkle({ className, color = 'var(--pink-soft)', scale = 4 }: PixelProps) {
  return (
    <svg
      className={className}
      width={5 * scale}
      height={5 * scale}
      viewBox="0 0 5 5"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M2 0h1v2h2v1H3v2H2V3H0V2h2z" fill={color} />
    </svg>
  );
}

export function PixelNote({ className, color = 'currentColor', scale = 3 }: PixelProps) {
  return (
    <svg
      className={className}
      width={6 * scale}
      height={8 * scale}
      viewBox="0 0 6 8"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d="M3 0h3v2H4v4H3v1H2v1H0V7h1V6h2z" fill={color} />
    </svg>
  );
}

type SpeechBubbleProps = { children: ReactNode; className?: string; live?: boolean };

export function SpeechBubble({ children, className = '', live = false }: SpeechBubbleProps) {
  return (
    <div className={`speech-bubble ${className}`.trim()} aria-live={live ? 'polite' : undefined}>
      {children}
      <svg className="speech-bubble__tail" width="18" height="15" viewBox="0 0 6 5" shapeRendering="crispEdges" aria-hidden="true">
        <path d="M0 0h6v1H5v1H4v1H3v1H2v1H0z" fill="var(--ink)" />
        <path d="M1 0h4v1H4v1H3v1H2v1H1z" fill="#ffffff" />
      </svg>
    </div>
  );
}
