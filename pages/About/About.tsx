import React from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import Reveal from '../../components/Reveal/Reveal';
import './About.css';

const ABOUT_IMAGE =
    'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <PageHeader title="Tentang Kami" />

            <Reveal>
            <section id="about-company" className="about-profile-section">
                <div className="about-profile-shell">
                    <Reveal delay={0.1} className="about-profile-visual">
                        <div className="about-profile-frame" aria-hidden="true" />

                        <img
                            src={ABOUT_IMAGE}
                            alt="Produk wood pellet berkualitas"
                            className="about-profile-image"
                        />
                    </Reveal>

                    <div className="about-profile-content">
                        <Reveal delay={0.18} className="about-profile-copy">
                            <p>
                                Dalam upaya meminimalisir dampak negatif dari polusi udara dan perubahan iklim yang
                                semakin mengkhawatirkan, dunia membutuhkan sumber energi yang terbarukan, bersih,
                                dan efisien. Wood pellet biomassa adalah salah satu solusi paling menjanjikan untuk
                                menggantikan ketergantungan pada bahan bakar fosil di sektor industri.
                            </p>

                            <p>
                                PT. Bio Energy Semesta Tama (BEST), sebagai produsen wood pellet yang berbasis di Solo,
                                Jawa Tengah, hadir dengan komitmen penuh untuk menghadirkan produk biomassa berkualitas
                                tinggi yang ramah lingkungan dan berkelanjutan. BEST terus membangun reputasi sebagai
                                mitra energi biomassa yang dapat diandalkan oleh industri di Indonesia.
                            </p>
                        </Reveal>

                        <Reveal delay={0.26} className="about-profile-highlight">
                            <p>
                                BEST hadir untuk memenuhi permintaan pasar akan ketersediaan wood pellet yang konsisten,
                                terstandar, dan terjangkau. Kami memproduksi wood pellet dengan diameter 8 mm dari bahan
                                baku kayu pilihan melalui proses pengeringan dan pemadatan yang terstandar, menghasilkan
                                pellet dengan nilai kalori tinggi dan kadar air rendah.
                            </p>
                        </Reveal>

                        <Reveal delay={0.34} className="about-profile-copy">
                            <p>
                                Dengan kualitas produk yang unggul, komitmen terhadap kelestarian lingkungan, dan layanan
                                pelanggan yang terbaik, PT. Bio Energy Semesta Tama siap menjadi bagian dari solusi energi
                                bersih Indonesia. Bergabunglah bersama kami dalam menciptakan masa depan yang lebih hijau,
                                lebih sehat, dan lebih berkelanjutan.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="vision-mission" className="about-vision-section" aria-label="Visi dan Misi">
                <div className="about-vision-shell">
                    <Reveal delay={0.1} className="about-vision-heading">
                        <h2 className="about-vision-title">Visi dan Misi</h2>
                        <p className="about-vision-description">
                            Komitmen PT Bio Energy Semesta Tama dalam menghadirkan energi biomassa berkualitas
                            untuk mendukung kebutuhan industri yang berkelanjutan.
                        </p>
                    </Reveal>

                    <div className="about-vision-grid">
                        <Reveal delay={0.18} className="about-vision-card">
                            <h3 className="about-vision-card__title">Visi</h3>
                            <p className="about-vision-card__text">
                                "Menjadi produsen wood pellet biomassa terpercaya yang berkontribusi nyata pada
                                kemandirian energi bersih Indonesia, demi generasi yang lebih sehat dan bumi
                                yang lebih lestari."
                            </p>
                        </Reveal>

                        <Reveal delay={0.26} className="about-vision-card">
                            <h3 className="about-vision-card__title">Misi</h3>
                            <ul className="about-vision-card__list">
                                <li>Memproduksi wood pellet berkualitas tinggi dari bahan baku kayu pilihan secara konsisten dan terstandar</li>
                                <li>Mendukung peralihan dari bahan bakar fosil ke energi biomassa yang lebih ramah lingkungan</li>
                                <li>Memberikan solusi energi alternatif yang terjangkau dan berkelanjutan bagi industri Indonesia</li>
                                <li>Menjalankan proses produksi yang bertanggung jawab terhadap alam dan masyarakat sekitar</li>
                                <li>Turut serta menjaga kelestarian lingkungan melalui pemanfaatan sumber daya kayu secara bijak</li>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="contact" className="about-cta-section" aria-label="Ajakan kerja sama">
                <div className="about-cta-shell">
                    <Reveal delay={0.1}>
                        <h2 className="about-cta-title">
                            Tertarik bekerja sama dengan kami
                        </h2>
                    </Reveal>

                    <div className="about-cta-actions">
                        <Reveal delay={0.18}>
                            <a
                                href="/contact"
                                className="about-cta-button about-cta-button--contact"
                            >
                                <PhoneCall className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Contact</span>
                            </a>
                        </Reveal>

                        <Reveal delay={0.26}>
                            <a
                                href="/about"
                                className="about-cta-button about-cta-button--profile"
                            >
                                <FileText className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Company Profile</span>
                            </a>
                        </Reveal>
                    </div>
                </div>
            </section>
            </Reveal>

            <PublicFooter />
        </div>
    );
};

export default About;
