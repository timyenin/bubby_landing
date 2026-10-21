import { bubbyPhotos, savedMeal } from '../data/bubbyContent';

export function SavedMeals() {
  return (
    <section className="section-band section-band--panel" id="saved-meals" aria-labelledby="meals-title">
      <div className="page-width meals-grid">
        <div className="meals-copy">
          <h2 id="meals-title">your go-to meals, saved</h2>
          <p>save the meals you eat all the time, give each one a bubby photo, and log the usual in one message.</p>
          <div className="saved-meal">
            <img className="pixel-photo" src={savedMeal.photo} alt="" width="58" height="58" />
            <div className="saved-meal__text">
              <span className="saved-meal__name">{savedMeal.name}</span>
              <span>{savedMeal.ingredients}</span>
              <span className="saved-meal__macros">{savedMeal.macros}</span>
            </div>
          </div>
        </div>
        <div className="photo-picker">
          <p className="photo-picker__label">{bubbyPhotos.length} bubby photos to pick from</p>
          <ul className="photo-grid">
            {bubbyPhotos.map((photo) => (
              <li key={photo.src}>
                <img className="pixel-photo" src={photo.src} alt={photo.name} width="58" height="58" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
