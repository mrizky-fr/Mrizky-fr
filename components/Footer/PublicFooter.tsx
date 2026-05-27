import React from 'react';
import { Facebook, Github, Instagram, Music2 } from 'lucide-react';
import './PublicFooter.css';

const PublicFooter: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__grid">
                    {/* Column 1: Contact */}
                    <div className="site-footer__col site-footer__col--contact">
                        <h3 className="site-footer__title">About Us</h3>
                        <p className="site-footer__description">
                            Nama Muhammad Rizky D biasa di panggil kyy atau ( Mrizky-fr ) Developer Pemula So Thanks Udah Mampir.. Se you next build gengs...
                        </p>
                        <p className="site-footer__line">
                            <strong>Visit</strong> : <a href="https://tech.mudahdeal.com/company/" target="_blank" rel="noreferrer noopener" className="site-footer__contact-link">Tech.Mudahdeal.Com</a>
                        </p>
                    </div>

                    {/* Column 2: About / Menu */}
                    <div className="site-footer__col site-footer__col--about">
                        <h3 className="site-footer__title">Navigasi</h3>
                        <nav className="site-footer__menu" aria-label="Navigasi halaman">
                            <a href="/#home" className="site-footer__menu-link">Home</a>
                            <a href="/#contact" className="site-footer__menu-link">Contact</a>
                            <a
                                href="https://digtl.web.id/next/"
                                className="site-footer__menu-link"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Next-FLM
                            </a>
                        </nav>
                    </div>

                    {/* Column 3: Social Media */}
                    <div className="site-footer__col site-footer__col--subscribe">
                        <h3 className="site-footer__title">Follow Sosial Media</h3>
                        <div className="site-footer__socials" aria-label="Sosial media">
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="site-footer__social-link"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} aria-hidden="true" />
                            </a>
                            <a
                                href="https://github.com/mrizky-fr"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="site-footer__social-link"
                                aria-label="GitHub"
                            >
                                <Github size={16} aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="site-footer__social-link"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.tiktok.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="site-footer__social-link"
                                aria-label="TikTok"
                            >
                                <Music2 size={16} aria-hidden="true" />
                            </a>
                        </div>
                        <p className="site-footer__offer-text">
                            Butuh bantuan pengembangan website atau optimasi tampilan? Saya siap bantu dari ide sampai implementasi.
                            Yuk mulai kolaborasi lewat{' '}
                            <a
                                href="https://tech.mudahdeal.com/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="site-footer__offer-email"
                            >
                                Temui Saya Di Dealtech
                            </a>.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="site-footer__bottom">
                    <p>Muhammad Rizky D - Mrizky-fr &copy; 2026 | Hak Cipta Dilindungi Undang-Undang.</p>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
