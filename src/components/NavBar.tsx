import { hero, navLinks } from '../data/bubbyContent';

export function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="primary navigation">
        <a className="wordmark" href="#top" aria-label="bubby home">
          bubby
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#waitlist">
          {hero.secondaryCta}
          <img src="/assets/icons/heart.svg" alt="" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
