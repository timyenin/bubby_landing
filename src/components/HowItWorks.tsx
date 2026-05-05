import { howItWorks } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

export function HowItWorks() {
  return (
    <section className="how-section section-band" id="how-it-works" aria-labelledby="how-title">
      <div className="page-grid">
        <h2 id="how-title" className="section-title">
          <span aria-hidden="true">*</span>
          how bubby works
          <span aria-hidden="true">*</span>
        </h2>
        <div className="steps-grid">
          {howItWorks.map((step, index) => (
            <article className="soft-card step-card" key={step.step}>
              <span className="step-number">{step.step}</span>
              <div className="step-copy">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <div className="step-art" aria-hidden="true">
                <BubbySprite state={step.state} size="small" />
              </div>
              {index < howItWorks.length - 1 ? <span className="step-arrow" aria-hidden="true">-&gt;</span> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
