import { painPoints } from '../data/bubbyContent';

export function ProblemCards() {
  return (
    <section className="problem-section section-band" aria-labelledby="problem-title">
      <div className="page-grid">
        <h2 id="problem-title" className="section-title">
          <span aria-hidden="true">*</span>
          eating healthy gets stressful fast.
          <span aria-hidden="true">*</span>
        </h2>
        <div className="problem-grid">
          {painPoints.map((point) => (
            <article className="soft-card problem-card" key={point.title}>
              <img src={point.icon} alt="" aria-hidden="true" />
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
