import { links, navItems, profile } from '../../../data/profile';
import Logo from '../../ui/Logo';
import SocialLinks from '../../ui/SocialLinks';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p className="footer__text">
              {profile.role} di {profile.company}, lini digital PT Mudahdeal Digital Grup.
            </p>
            <SocialLinks />
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="footer__title">Menu</h2>
            <ul className="footer__list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="footer__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="footer__title">Kontak</h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href={links.dealtechWebsite} target="_blank" rel="noreferrer">
                  tech.mudahdeal.com
                </a>
              </li>
              <li>
                <a className="footer__link" href={links.github} target="_blank" rel="noreferrer">
                  github.com/mrizky-fr
                </a>
              </li>
              <li>
                <a className="footer__link" href={links.dealtechGithub} target="_blank" rel="noreferrer">
                  github.com/Deal-Tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copy">
          © {year} {profile.fullName}. Dibangun dengan React & Vite.
        </p>
      </div>
    </footer>
  );
}
