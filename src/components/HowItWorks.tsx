import { howItWorks } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

export function HowItWorks() {
  return (
    <section className="section-band section-band--panel" id="how-it-works" aria-labelledby="how-title">
      <div className="page-width section-stack">
        <div className="section-heading">
          <h2 id="how-title">how bubby works</h2>
          <p>no forms, no food database to scroll. the chat is the whole app.</p>
        </div>
        <div className="card-grid card-grid--three">
          {howItWorks.map((item) => (
            <article className="card step-card" key={item.step}>
              <div className="step-card__top">
                <span className="step-card__number">{item.step}</span>
                <BubbySprite animation={item.animation} className="step-card__bubby" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.step === '2' ? (
                <div className="calorie-readout">
                  <span className="calorie-readout__label">calories</span>
                  <span className="calorie-readout__value">1220 / 2200 cal</span>
                  <span>980 cal remaining</span>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
