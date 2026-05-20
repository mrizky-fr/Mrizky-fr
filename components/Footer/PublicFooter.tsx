import React, { useState } from 'react';
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaEnvelope, FaThreads, FaXTwitter } from 'react-icons/fa6';
import './PublicFooter.css';

const PublicFooter: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        // Static UI, no actual submission
        setEmail('');
        alert('Terima kasih telah berlangganan info LazisNU!');
    };

    return (
        <footer className="site-footer">
            <div className="site-footer__container">
                <div className="site-footer__grid">
                    
                    {/* Column 1: Contact */}
                    <div className="site-footer__col site-footer__col--contact">
                        <h3 className="site-footer__title">Hubungi Kami</h3>
                        <p className="site-footer__description">
                            LazisNU PCNU Kab. Malang. Kami hadir untuk memudahkan Anda dalam menyalurkan Zakat, Infaq, dan Shadaqah demi kesejahteraan umat.
                        </p>
                        <p className="site-footer__line">
                            <strong>Alamat</strong> : Kabupaten Malang, Jawa Timur
                        </p>
                        <p className="site-footer__line">
                            <strong>Telp</strong> : <a href="tel:03410000000" className="site-footer__contact-link">0341-XXXXXXX</a>
                        </p>
                        <p className="site-footer__line">
                            <strong>Email</strong> : <a href="mailto:lazisnu.malang@gmail.com" className="site-footer__contact-link">lazisnu.malang@gmail.com</a>
                        </p>
                    </div>

                    {/* Column 2: About / Menu */}
                    <div className="site-footer__col site-footer__col--about">
                        <h3 className="site-footer__title">Tentang Kami</h3>
                        <nav className="site-footer__menu" aria-label="Tentang Kami">
                            <a href="#home" className="site-footer__menu-link">Beranda</a>
                            <a href="#pentasyarufan" className="site-footer__menu-link">Pentasyarufan</a>
                            <a href="#faq" className="site-footer__menu-link">Pertanyaan Umum (FAQ)</a>
                            <a href="#" className="site-footer__menu-link">Transparansi Dana</a>
                            <a href="#" className="site-footer__menu-link">Kebijakan Privasi</a>
                        </nav>
                    </div>

                    {/* Column 3: Subscribe & Socials */}
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
                                Berlangganan
                            </button>
                        </form>

                        <div style={{ marginTop: '24px', marginBottom: '12px' }}>
                            <p className="site-footer__description" style={{ fontSize: '0.92rem', fontWeight: 600, color: '#111827', margin: 0 }}>
                                Ikuti Media Sosial Resmi Kami:
                            </p>
                        </div>

                        <div className="site-footer__socials" aria-label="Media Sosial LazisNU">
                            <a href="#" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="Instagram">
                                <FaInstagram size={15} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="TikTok">
                                <FaTiktok size={14} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="YouTube">
                                <FaYoutube size={15} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="X (Twitter)">
                                <FaXTwitter size={14} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="Threads">
                                <FaThreads size={15} />
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="Facebook">
                                <FaFacebook size={15} />
                            </a>
                            <a href="mailto:lazisnu.malang@gmail.com" target="_blank" rel="noreferrer" className="site-footer__social-link" aria-label="Email">
                                <FaEnvelope size={15} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="site-footer__bottom">
                    <p>LazisNU PCNU Kab. Malang &copy; {new Date().getFullYear()} | Hak Cipta Dilindungi Undang-Undang.</p>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
