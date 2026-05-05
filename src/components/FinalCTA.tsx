import { hero } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

export function FinalCTA() {
  return (
    <section className="final-section section-band" id="waitlist" aria-labelledby="final-title">
      <div className="final-banner page-grid">
        <div className="final-cloud" aria-hidden="true" />
        <BubbySprite state="happy_bounce" size="medium" alt="happy bubby" />
        <div className="final-heart-bubble" aria-hidden="true">
          <img src="/assets/icons/heart.svg" alt="" />
        </div>
        <div className="final-copy">
          <h2 id="final-title">stop overthinking what to eat.</h2>
          <p>simple meals. consistent habits. low-stress healthy living.</p>
          <button className="button button--primary" type="button">
            {hero.secondaryCta}
            <img src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
          </button>
        </div>
        <div className="final-rainbow" aria-hidden="true" />
      </div>
    </section>
  );
}
