import { mealDemo } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

export function MealDemo() {
  return (
    <section className="meal-section section-band" id="demo" aria-labelledby="demo-title">
      <div className="meal-decor meal-decor--swirl" aria-hidden="true" />
      <div className="meal-decor meal-decor--thought" aria-hidden="true">
        <span>...</span>
      </div>
      <div className="page-grid meal-grid">
        <div className="meal-intro">
          <h2 id="demo-title">
            {mealDemo.introTitle}
            <img className="meal-heading-heart" src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
          </h2>
          <p>{mealDemo.introBody}</p>
          <BubbySprite state="sleepy" size="medium" alt="bubby waiting calmly on a cloud" />
        </div>

        <div className="chat-demo" aria-label="example bubby dinner chat">
          <div className="user-row">
            <p>{mealDemo.userMessage}</p>
            <span className="mini-avatar" aria-hidden="true" />
          </div>
          <div className="bubby-row">
            <BubbySprite state="happy_bounce" size="tiny" alt="small bubby helper" />
            <p>{mealDemo.bubbyMessage}</p>
          </div>
          <article className="meal-card">
            <img src="/assets/backgrounds/simple-meal-bowl.svg" alt="simple chicken bowl" />
            <div>
              <h3>{mealDemo.mealTitle}</h3>
              <ul>
                {mealDemo.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="macro-list">
              {mealDemo.macros.map((macro) => (
                <span key={macro}>{macro}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
