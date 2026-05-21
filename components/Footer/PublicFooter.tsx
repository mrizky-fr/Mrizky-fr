import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import './PublicFooter.css';

const PublicFooter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setEmail('');
        alert('Terima kasih telah berlangganan info PT Bio Energy Semesta Tama.');
    };

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
                            <strong>Telp</strong> : <a href="tel:+628115585490" className="site-footer__contact-link">+62 811-5585-490</a>
                        </p>
                        <p className="site-footer__line">
                            <strong>Email</strong> : <a href="mailto:info@best-pellet.com" className="site-footer__contact-link">info@best-pellet.com</a>
                        </p>
                    </div>

                    {/* Column 2: About / Menu */}
                    <div className="site-footer__col site-footer__col--about">
                        <h3 className="site-footer__title">Navigasi</h3>
                        <nav className="site-footer__menu" aria-label="Navigasi halaman">
                            <a href="/#home" className="site-footer__menu-link">Beranda</a>
                            <a href="/about" className="site-footer__menu-link">Tentang</a>
                            <a href="/services" className="site-footer__menu-link">Produk</a>
                            <a href="/gallery" className="site-footer__menu-link">Galeri</a>
                            <a href="/contact" className="site-footer__menu-link">Kontak</a>
                        </nav>
                    </div>

                    {/* Column 3: Subscribe + CTA */}
                    <div className="site-footer__col site-footer__col--subscribe">
                        <h3 className="site-footer__title">Dapatkan Info Terbaru</h3>
                        <form className="site-footer__subscribe-form" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                className="site-footer__input"
                                placeholder="Masukkan email Anda"
                                aria-label="Masukkan email Anda"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="site-footer__subscribe-button">
                                <Bell className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Berlangganan</span>
                            </button>
                        </form>
                        <p className="site-footer__offer-text">
                            Tertarik dengan produk wood pellet kami? Kirimkan permintaan dan pertanyaan Anda melalui email kami di{' '}
                            <a href="mailto:info@best-pellet.com" className="site-footer__offer-email">info@best-pellet.com</a>{' '}
                            dan tim kami akan segera merespons dengan penawaran harga terbaik sesuai kebutuhan bisnis Anda.
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
