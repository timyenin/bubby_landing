import type { FormEvent } from 'react';
import { useState } from 'react';
import { appStoreUrl, isLive } from '../lib/launch';

type WaitlistState = 'idle' | 'loading' | 'success' | 'error';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const successMessage = "you're on the list! bubby will email you the day it's on the App Store.";

type WaitlistFormProps = { idPrefix: string; className?: string };

export function WaitlistForm({ idPrefix, className = '' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [waitlistState, setWaitlistState] = useState<WaitlistState>('idle');
  const [message, setMessage] = useState('');
  const isSubmitting = waitlistState === 'loading';

  if (isLive) {
    return (
      <a className={`button button--app-store ${className}`.trim()} href={appStoreUrl}>
        get bubby on the App Store
      </a>
    );
  }

  if (waitlistState === 'success') {
    return (
      <p className={`waitlist-done ${className}`.trim()} role="status">
        {successMessage}
      </p>
    );
  }

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
      setEmail('');
    } catch {
      setWaitlistState('error');
      setMessage('something went wrong. please try again.');
    }
  }

  const emailId = `${idPrefix}-email`;
  const messageId = `${idPrefix}-message`;

  return (
    <form className={`waitlist-form ${className}`.trim()} onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor={emailId}>
        email address
      </label>
      <input
        id={emailId}
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={isSubmitting}
        aria-describedby={messageId}
        aria-invalid={waitlistState === 'error'}
        required
      />
      <label className="waitlist-honeypot" htmlFor={`${idPrefix}-company`} aria-hidden="true">
        company
        <input id={`${idPrefix}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button--primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'joining...' : 'notify me'}
      </button>
      <p id={messageId} className={`waitlist-message waitlist-message--${waitlistState}`} aria-live="polite">
        {message}
      </p>
    </form>
  );
}
