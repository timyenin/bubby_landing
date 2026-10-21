import { useEffect, useRef, useState } from 'react';
import {
  chatChips,
  hero,
  rooms,
  startingChat,
  startingVitals,
  vitalLabels,
  type ChatMessage,
  type RoomId,
  type Vitals,
} from '../data/bubbyContent';
import type { BubbyAnimation } from '../data/bubbySprites';
import { launchStatus } from '../lib/launch';
import { RoomScene } from './RoomScene';
import { WaitlistForm } from './WaitlistForm';

type ChatChip = (typeof chatChips)[number];

const maxVital = 10;
const visibleMessages = 4;

export function Hero() {
  const [room, setRoom] = useState<RoomId>('kitchen');
  const [animation, setAnimation] = useState<BubbyAnimation>('idle');
  const [says, setSays] = useState(hero.greeting);
  const [messages, setMessages] = useState<ChatMessage[]>([...startingChat]);
  const [vitals, setVitals] = useState<Vitals>(startingVitals);
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const idleTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    Object.values(rooms).forEach((scene) => {
      const image = new Image();
      image.src = scene.src;
    });

    return () => window.clearTimeout(idleTimer.current);
  }, []);

  function send(chip: ChatChip) {
    window.clearTimeout(idleTimer.current);

    setAnimation(chip.animation);
    setSays(chip.says);
    setActiveChip(chip.message);
    if (chip.room) {
      setRoom(chip.room);
    }
    setMessages((current) =>
      [...current, { from: 'you' as const, text: chip.message }, { from: 'bubby' as const, text: chip.reply }].slice(
        -visibleMessages,
      ),
    );
    setVitals((current) => {
      const next = { ...current };
      for (const [key, boost] of Object.entries(chip.boost) as [keyof Vitals, number][]) {
        next[key] = Math.min(maxVital, current[key] + boost);
      }
      return next;
    });

    if (chip.durationMs > 0) {
      idleTimer.current = window.setTimeout(() => setAnimation('idle'), chip.durationMs);
    }
  }

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <p className={`status-pill status-pill--${launchStatus}`}>
            <span className="status-pill__dot" aria-hidden="true" />
            {hero.status[launchStatus]}
          </p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero-tagline">
            {hero.tagline[0]}
            <br />
            {hero.tagline[1]}
          </p>
          <p className="hero-body">{hero.body}</p>
          <WaitlistForm idPrefix="hero" />
          <p className="hero-fine-print">{hero.finePrint}</p>
        </div>

        <div className="bubby-home" aria-label="try bubby: a small demo of the app's home screen">
          <RoomScene room={room} animation={animation} says={says} bubbyAlt="bubby, animated" eager />

          <div className="vitals" role="list" aria-label="bubby's vitals">
            {vitalLabels.map((vital) => (
              <div className="vital" role="listitem" key={vital.key} aria-label={`${vital.name} ${vitals[vital.key]} out of ${maxVital}`}>
                <span className="vital__label" aria-hidden="true">
                  {vital.key}
                </span>
                <span className="vital__meter" aria-hidden="true">
                  {Array.from({ length: maxVital }, (_, index) => (
                    <span key={index} className={index < vitals[vital.key] ? 'is-on' : undefined} />
                  ))}
                </span>
              </div>
            ))}
          </div>

          <div className="chat-log" aria-label="chat with bubby" aria-live="polite">
            {messages.map((message, index) => (
              <p key={`${index}-${message.text}`} className={`chat-bubble chat-bubble--${message.from}`}>
                <span className="sr-only">{message.from === 'you' ? 'you: ' : 'bubby: '}</span>
                {message.text}
              </p>
            ))}
          </div>

          <div className="chat-chips">
            <p className="chat-chips__hint">try it: tap a message to send it to bubby</p>
            <div className="chat-chips__row">
              {chatChips.map((chip) => (
                <button
                  className="chat-chip"
                  type="button"
                  key={chip.message}
                  onClick={() => send(chip)}
                  aria-pressed={activeChip === chip.message}
                >
                  {chip.message}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
