import React, { useEffect, useRef, useState } from 'react';
import { AlignRight, X, Headset, Phone } from 'lucide-react';
import logoNucare from '../../assets/logo nucare.png';
import './PublicHeader.css';

type HeaderMenuItem = {
  label: string;
  to?: string;
  onClick?: () => void;
};

const PublicHeader: React.FC = () => {
  const [activeHash, setActiveHash] = useState<string>(window.location.hash || '#home');

  const headerMenuItems: HeaderMenuItem[] = [
    { label: 'Home', to: '#home' },
    { label: 'Pentasyarufan', to: '#pentasyarufan' },
    { label: 'Faq', to: '#faq' },
  ];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerInnerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      setHeaderHeight(headerInnerRef.current?.offsetHeight ?? 0);
    };

    updateHeaderHeight();
    const headerNode = headerInnerRef.current;
    const resizeObserver = typeof ResizeObserver !== 'undefined' && headerNode
      ? new ResizeObserver(() => updateHeaderHeight())
      : null;

    if (headerNode) {
      resizeObserver?.observe(headerNode);
    }
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isDrawerOpen]);

  const isActiveMenu = (item: HeaderMenuItem) => {
    if (!item.to) {
      return false;
    }
    return activeHash === item.to;
  };

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="hero-header__spacer" style={{ height: `${headerHeight}px` }} aria-hidden="true" />
      <div className="hero-header">
        <header ref={headerInnerRef} className="main-header">
          <div className="main-header__inner">
            <a className="header-logo" href="#home" aria-label="LazisNU logo">
              <img
                src={logoNucare}
                alt="LazisNU"
              />
            </a>

            <nav className="header-menu" aria-label="Main navigation">
              {headerMenuItems.map((item) => (
                item.to ? (
                  <a
                    key={item.label}
                    href={item.to}
                    className={`header-menu__link${isActiveMenu(item) ? ' is-active' : ''}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    type="button"
                    className="header-menu__link header-menu__link--button"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            <div className="header-right">
              <div className="header-cta-group">
                <a
                  href="tel:+62123456789"
                  className="header-cta header-cta--secondary"
                  aria-label="Call +62 123456789"
                >
                  <Phone className="header-cta__icon" aria-hidden="true" />
                  <span>+62 123456789</span>
                </a>
                <button
                  type="button"
                  className="header-cta header-cta--primary"
                >
                  <Headset size={18} aria-hidden="true" />
                  Pusat Bantuan!
                </button>
              </div>
              <button
                type="button"
                className="header-drawer-toggle"
                aria-label="Open menu"
                onClick={() => setIsDrawerOpen(true)}
              >
                <AlignRight size={22} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </header>

        <div className={`header-drawer${isDrawerOpen ? ' is-open' : ''}`}>
          <button
            type="button"
            className="header-drawer__overlay"
            aria-label="Close menu"
            onClick={closeDrawer}
          />

          <aside className="header-drawer__content" aria-label="Mobile navigation">
            <div className="header-drawer__head">
              <a className="header-logo" href="#home" aria-label="LazisNU logo">
                <img
                  src={logoNucare}
                  alt="LazisNU"
                />
              </a>
              <button
                type="button"
                className="header-drawer__close"
                aria-label="Close menu"
                onClick={closeDrawer}
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </div>

            <nav className="header-drawer__menu" aria-label="Mobile main navigation">
              {headerMenuItems.map((item) => (
                item.to ? (
                  <a
                    key={`drawer-${item.label}`}
                    href={item.to}
                    className={`header-drawer__link${isActiveMenu(item) ? ' is-active' : ''}`}
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={`drawer-${item.label}`}
                    type="button"
                    className="header-drawer__link"
                    onClick={() => {
                      item.onClick?.();
                      closeDrawer();
                    }}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            <div className="header-drawer__cta-group">
              <a
                href="tel:+62123456789"
                className="header-cta header-cta--secondary"
                aria-label="Call +62 123456789"
                onClick={closeDrawer}
              >
                <Phone className="header-cta__icon" aria-hidden="true" />
                <span>+62 123456789</span>
              </a>
              <button
                type="button"
                className="header-cta header-cta--primary"
                onClick={() => {
                  closeDrawer();
                }}
              >
                <Headset size={18} aria-hidden="true" />
                Pusat Bantuan!
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default PublicHeader;
