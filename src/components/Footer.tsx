import { footerLinks } from '../data/bubbyContent';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-row">
        <span>© {new Date().getFullYear()} Yenin Labs LLC</span>
        <nav className="footer-links" aria-label="legal">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
