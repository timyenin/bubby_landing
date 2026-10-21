import { moods } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

export function Moods() {
  return (
    <section className="section-band" id="moods" aria-labelledby="moods-title">
      <div className="page-width section-stack">
        <div className="section-heading">
          <h2 id="moods-title">all of bubby's moods</h2>
          <p>every animation here is the real one from the app. some happen on their own; ask for the rest in chat.</p>
        </div>
        <ul className="mood-grid">
          {moods.map((mood) => (
            <li className="card mood-card" key={mood.animation}>
              <BubbySprite animation={mood.animation} alt={`bubby, ${mood.title}`} className="mood-card__bubby" />
              <span className="mood-card__title">{mood.title}</span>
              <span className="mood-card__note">{mood.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
