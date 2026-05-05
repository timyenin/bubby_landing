import { useEffect, useRef, useState } from 'react';
import { actionButtons, hero } from '../data/bubbyContent';
import type { BubbyState } from '../data/bubbySprites';
import { BubbySprite } from './BubbySprite';

const statRows = [
  { label: 'mood', value: 88, icon: '/assets/icons/mood.svg', tone: 'pink' },
  { label: 'energy', value: 72, icon: '/assets/icons/lightning.svg', tone: 'gold' },
  { label: 'fullness', value: 64, icon: '/assets/icons/fullness.svg', tone: 'green' },
] as const;

export function Hero() {
  const [activeState, setActiveState] = useState<BubbyState>('idle');
  const [activeActionLabel, setActiveActionLabel] = useState<string | null>(null);
  const [status, setStatus] = useState(hero.defaultSpeech);
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  function handleAction(action: (typeof actionButtons)[number]) {
    if (resetTimer.current) {
      window.clearTimeout(resetTimer.current);
    }

    setActiveState(action.state);
    setActiveActionLabel(action.label);
    setStatus(action.response);

    resetTimer.current = window.setTimeout(() => {
      setActiveState('idle');
      setActiveActionLabel(null);
      setStatus(hero.defaultSpeech);
    }, 1800);
  }

  return (
    <section className="hero-section section-band" id="top" aria-labelledby="hero-title">
      <div className="decor decor--rainbow" aria-hidden="true" />
      <div className="decor decor--cloud decor--cloud-left" aria-hidden="true" />
      <div className="decor decor--cloud decor--cloud-right" aria-hidden="true" />
      <div className="hero-grid page-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-title-line">{hero.headlinePrefix}</span>
            <span className="hero-title-line hero-title-emphasis">{hero.headlineEmphasis}</span>
            <span className="hero-title-line">meal planning</span>
            <span className="hero-title-line">companion.</span>
          </h1>
          <p>{hero.subheadline}</p>
          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button--primary" href="#demo">
              <img src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
              {hero.primaryCta}
            </a>
            <a className="button button--secondary" href="#waitlist">
              {hero.secondaryCta}
              <img src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
            </a>
          </div>
          <div className="social-proof" aria-label={hero.socialProof}>
            <div className="avatar-stack" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>{hero.socialProof}</span>
            <img src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
          </div>
        </div>

        <div className="device-wrap" aria-label="interactive bubby meal planning demo">
          <div className="device">
            <div className="device-side device-side--left" aria-hidden="true" />
            <div className="device-side device-side--right" aria-hidden="true" />
            <div className="device-charm" aria-hidden="true">
              <span />
              <span />
            </div>

            <div className="device-screen">
              <div className="screen-top">
                <span>bubby</span>
                <div className="screen-icons" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="lcd-panel">
                <div className="lcd-scene">
                  <div className="spark spark--one" aria-hidden="true" />
                  <div className="spark spark--two" aria-hidden="true" />
                  <div className="lcd-cloud lcd-cloud--near" aria-hidden="true" />
                  <div className="lcd-cloud lcd-cloud--far" aria-hidden="true" />
                  <div className="lcd-heart-bubble" aria-hidden="true">
                    <img src="/assets/icons/heart.svg" alt="" />
                  </div>
                  <div className="speech-pop" aria-live="polite">
                    {status}
                  </div>
                  <div className="hero-bubby-stage">
                    <BubbySprite state={activeState} size="hero" alt="animated bubby companion" />
                    <span className="bubby-blush bubby-blush--left" aria-hidden="true" />
                    <span className="bubby-blush bubby-blush--right" aria-hidden="true" />
                  </div>
                  <div className="sprite-shadow" aria-hidden="true" />
                </div>

                <aside className="stats-panel" aria-label="bubby status">
                  {statRows.map((row) => (
                    <div className="stat" key={row.label}>
                      <span className="stat-name">{row.label}</span>
                      <div className="stat-row">
                        <img src={row.icon} alt="" aria-hidden="true" />
                        <div className={`stat-meter stat-meter--${row.tone}`}>
                          <span style={{ width: `${row.value}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="streak">
                    <span>
                      <img src="/assets/icons/streak.svg" alt="" aria-hidden="true" />
                      streak
                    </span>
                    <strong>12</strong>
                  </div>
                </aside>
              </div>
            </div>

            <div className="device-buttons" aria-label="bubby demo actions">
              {actionButtons.map((action) => (
                <button
                  className={`device-action device-action--${action.tone}`}
                  type="button"
                  key={action.label}
                  onClick={() => handleAction(action)}
                  aria-pressed={activeActionLabel === action.label}
                >
                  <img src={action.icon} alt="" aria-hidden="true" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
