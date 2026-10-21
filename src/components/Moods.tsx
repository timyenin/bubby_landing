import { useEffect, useState } from 'react';
import { moods } from '../data/bubbyContent';
import { bubbyFrames, type BubbyAnimation } from '../data/bubbySprites';
import { BubbySprite } from './BubbySprite';

// Single-frame tricks (x eyes) play like they do in the app: shown for 1.5 s,
// then back to idle for a moment, so the tile doesn't look frozen.
const trickShowMs = 1500;
const trickRestMs = 2500;

function useTrickLoop(animation: BubbyAnimation): BubbyAnimation {
  const isTrick = bubbyFrames[animation].length === 1;
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    if (!isTrick) return;
    const timer = window.setTimeout(() => setShowing((current) => !current), showing ? trickShowMs : trickRestMs);
    return () => window.clearTimeout(timer);
  }, [isTrick, showing]);

  return isTrick && !showing ? 'idle' : animation;
}

function MoodCard({ mood }: { mood: (typeof moods)[number] }) {
  const animation = useTrickLoop(mood.animation);

  return (
    <li className="card mood-card">
      <BubbySprite animation={animation} alt={`bubby, ${mood.title}`} className="mood-card__bubby" />
      <span className="mood-card__title">{mood.title}</span>
      <span className="mood-card__note">{mood.note}</span>
    </li>
  );
}

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
            <MoodCard mood={mood} key={mood.animation} />
          ))}
        </ul>
      </div>
    </section>
  );
}
