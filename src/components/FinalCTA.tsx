import { finalCta } from '../data/bubbyContent';
import { launchStatus } from '../lib/launch';
import { BubbySprite } from './BubbySprite';
import { PixelHeart, PixelSparkle, SpeechBubble } from './PixelArt';
import { WaitlistForm } from './WaitlistForm';

export function FinalCTA() {
  return (
    <section className="section-band final-section" id="waitlist" aria-labelledby="final-title">
      <div className="final-stack">
        <div className="final-bubby">
          <PixelSparkle className="final-bubby__sparkle" />
          <BubbySprite animation="happy_bounce" alt="bubby bouncing" className="final-bubby__sprite" />
          <SpeechBubble className="final-bubby__speech">{finalCta.says}</SpeechBubble>
          <PixelHeart className="final-bubby__heart" scale={4} />
        </div>
        <h2 id="final-title">{finalCta.title[launchStatus]}</h2>
        <p>{finalCta.body[launchStatus]}</p>
        <WaitlistForm idPrefix="final" className="final-form" />
      </div>
    </section>
  );
}
