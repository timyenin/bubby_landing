import { navLinks } from '../data/bubbyContent';
import { isLive } from '../lib/launch';
import { PixelHeart } from './PixelArt';

export function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label="primary navigation">
        <a className="wordmark" href="#top" aria-label="bubby home">
          <PixelHeart />
          bubby
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#waitlist">
            {isLive ? 'get the app' : 'notify me'}
          </a>
        </div>
      </nav>
    </header>
  );
}
