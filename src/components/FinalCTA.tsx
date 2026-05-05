import type { FormEvent } from 'react';
import { useState } from 'react';
import { hero } from '../data/bubbyContent';
import { BubbySprite } from './BubbySprite';

type WaitlistState = 'idle' | 'loading' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const successMessage = 'you are on the list - bubby will be ready soon.';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [waitlistState, setWaitlistState] = useState<WaitlistState>('idle');
  const [message, setMessage] = useState('');
  const isSubmitting = waitlistState === 'loading';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const submittedEmail = String(formData.get('email') ?? '').trim();
    const company = String(formData.get('company') ?? '');

    if (!emailPattern.test(submittedEmail)) {
      setWaitlistState('error');
      setMessage('please enter a valid email.');
      return;
    }

    setWaitlistState('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: submittedEmail, company }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setWaitlistState('error');
        setMessage(result.error || 'something went wrong. please try again.');
        return;
      }

      setWaitlistState('success');
      setMessage(successMessage);
      setEmail('');
    } catch {
      setWaitlistState('error');
      setMessage('something went wrong. please try again.');
    }
  }

  return (
    <section className="final-section section-band" id="waitlist" aria-labelledby="final-title">
      <div className="final-banner page-grid">
        <div className="final-cloud" aria-hidden="true" />
        <BubbySprite state="happy_bounce" size="medium" alt="happy bubby" />
        <div className="final-heart-bubble" aria-hidden="true">
          <img src="/assets/icons/heart.svg" alt="" />
        </div>
        <div className="final-copy">
          <h2 id="final-title">stop overthinking what to eat.</h2>
          <p>simple meals. consistent habits. low-stress healthy living.</p>
          <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="waitlist-email">
              email address
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isSubmitting}
              required
            />
            <label className="waitlist-honeypot" htmlFor="waitlist-company" aria-hidden="true">
              company
              <input id="waitlist-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </label>
            <button className="button button--primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'joining...' : hero.secondaryCta}
              <img src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
            </button>
            <p className={`waitlist-message waitlist-message--${waitlistState}`} aria-live="polite">
              {message}
            </p>
          </form>
        </div>
        <div className="final-rainbow" aria-hidden="true" />
      </div>
    </section>
  );
}
