import { personalityStates } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

export function PersonalityShowcase() {
  return (
    <section className="personality-section section-band" id="about" aria-labelledby="personality-title">
      <div className="page-grid">
        <h2 id="personality-title" className="section-title">
          <span aria-hidden="true">*</span>
          bubby is here for all of you
          <span aria-hidden="true">*</span>
        </h2>
        <div className="personality-grid" aria-label="bubby personality states">
          {personalityStates.map((item) => (
            <article
              className="soft-card personality-card"
              key={item.state}
              aria-label={`${item.label} bubby in ${item.colorName}`}
            >
              <div className="personality-bubby-wrap">
                <BubbySprite state={item.state} colorId={item.colorId} size="small" />
              </div>
              <h3>{item.label}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
