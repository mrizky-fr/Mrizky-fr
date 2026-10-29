import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../../../data/profile';
import { useScrolled } from '../../../hooks/useScrolled';
import Logo from '../../ui/Logo';
import './Header.css';

const MOBILE_MENU_ID = 'menu-ponsel';

export default function Header() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const solid = scrolled || menuOpen;

  return (
    <header className={`header ${solid ? 'header--solid' : ''}`}>
      <div className="header__inner shell">
        <Logo />

        <nav className="header__nav" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a key={item.href} className="header__link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary btn--sm header__cta" href="#kontak">
          Ajak Kolaborasi
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls={MOBILE_MENU_ID}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id={MOBILE_MENU_ID}
        className={`header__mobile ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navigasi ponsel"
        hidden={!menuOpen}
      >
        <div className="shell">
          {navItems.map((item) => (
            <a key={item.href} className="header__mobile-link" href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="btn btn--primary header__mobile-cta" href="#kontak" onClick={closeMenu}>
            Ajak Kolaborasi
          </a>
        </div>
      </nav>
    </header>
  );
}
