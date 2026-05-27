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
                        <h3 className="site-footer__title">Hubungi Kami</h3>
                        <p className="site-footer__description">
                            PT Bio Energy Semesta Tama. Kami hadir sebagai mitra profesional untuk mendukung kebutuhan bisnis Anda dengan layanan yang adaptif dan berkualitas.
                        </p>
                        <p className="site-footer__line">
                            <strong>Alamat</strong> : Jalan Raya Solo Sukoharjo KM 7, Dusun Telukan, RT 003/RW 005, Solo, Jawa Tengah
                        </p>
                        <p className="site-footer__line">
                            <strong>Email</strong> : <a href="mailto:info@best-pellet.com" className="site-footer__contact-link">info@best-pellet.com</a>
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
                    <p>PT Bio Energy Semesta Tama &copy; {new Date().getFullYear()} | Hak Cipta Dilindungi Undang-Undang.</p>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
