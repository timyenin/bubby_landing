import { roomCards } from '../data/bubbyContent';
import { RoomScene } from './RoomScene';

export function Rooms() {
  return (
    <section className="section-band" id="rooms" aria-labelledby="rooms-title">
      <div className="page-width section-stack">
        <div className="section-heading">
          <h2 id="rooms-title">bubby's little home</h2>
          <p>bubby moves between the kitchen, the gym and the bedroom as your day goes, and every room has a day and a night look.</p>
        </div>
        <div className="card-grid card-grid--three">
          {roomCards.map((card) => (
            <article className="card room-card" key={card.title}>
              <RoomScene room={card.room} animation={card.animation} bubbyAlt={`bubby in the ${card.title}`} />
              <div className="room-card__copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
