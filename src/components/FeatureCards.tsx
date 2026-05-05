import { features } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

const featureProps = [
  { name: 'meal', icon: '/assets/icons/bowl.svg' },
  { name: 'heart-note', icon: '/assets/icons/heart.svg' },
  { name: 'star-friend', icon: '/assets/icons/star.svg' },
  { name: 'grocery-bag', icon: '/assets/icons/grocery.svg' },
] as const;

export function FeatureCards() {
  return (
    <section className="feature-section section-band" id="features" aria-labelledby="features-title">
      <div className="page-grid">
        <h2 id="features-title" className="section-title">
          <span aria-hidden="true">*</span>
          what bubby does for you
          <span aria-hidden="true">*</span>
        </h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className={`soft-card feature-card feature-card--${index + 1}`} key={feature.title}>
              <div className="feature-top">
                <div className="feature-icon">
                  <img src={feature.icon} alt="" aria-hidden="true" />
                </div>
                <div className="feature-copy">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </div>
              <div className="feature-art" aria-hidden="true">
                <BubbySprite state={feature.spriteState} size="small" />
                <span className={`feature-prop feature-prop--${featureProps[index].name}`}>
                  <img src={featureProps[index].icon} alt="" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
