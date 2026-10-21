import { faqs } from '../data/bubbyContent';
import { isLive } from '../lib/launch';

export function Faq() {
  return (
    <section className="section-band section-band--panel" id="faq" aria-labelledby="faq-title">
      <div className="faq-width section-stack">
        <h2 id="faq-title" className="section-title-center">
          questions
        </h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{isLive && faq.liveAnswer ? faq.liveAnswer : faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
