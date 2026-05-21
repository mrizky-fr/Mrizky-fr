import React, { useEffect } from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './About.css';

const ABOUT_IMAGE =
    'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png';

const About: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target as HTMLElement;

                    if (entry.isIntersecting) {
                        const revealDelay = target.dataset.revealDelay;
                        target.style.animationDelay = revealDelay ? `${revealDelay}ms` : '0ms';
                        target.classList.add('animate-fade-in-up');
                        target.classList.remove('opacity-0');
                        observer.unobserve(target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );

        const hiddenElements = document.querySelectorAll<HTMLElement>('.scroll-reveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <PageHeader title="Tentang Kami" />

            <section id="about-company" className="about-profile-section scroll-reveal opacity-0">
                <div className="about-profile-shell">
                    <div className="about-profile-visual scroll-reveal opacity-0" data-reveal-delay="100">
                        <div className="about-profile-frame" aria-hidden="true" />

                        <img
                            src={ABOUT_IMAGE}
                            alt="Produk wood pellet berkualitas"
                            className="about-profile-image"
                        />
                    </div>

                    <div className="about-profile-content">
                        <div className="about-profile-copy scroll-reveal opacity-0" data-reveal-delay="180">
                            <p>
                                Dalam upaya meminimalisir dampak negatif dari masalah polusi udara yang dapat
                                menyebabkan perubahan iklim, dibutuhkan sumber energi yang terbarukan dan efisien.
                                Wood Pellet atau pelet kayu adalah salah satu solusi yang menjanjikan untuk
                                menggantikan sumber energi bahan bakar fosil.
                            </p>

                            <p>
                                PT Bio Energy Semesta Tama hadir sebagai produsen Wood Pellet yang berkomitmen
                                menghadirkan produk berkualitas tinggi, ramah lingkungan, dan berkelanjutan.
                                Kami berfokus pada penyediaan energi biomassa yang dapat mendukung kebutuhan
                                industri secara konsisten dan profesional.
                            </p>
                        </div>

                        <div className="about-profile-highlight scroll-reveal opacity-0" data-reveal-delay="260">
                            <p>
                                PT Bio Energy Semesta Tama hadir untuk memenuhi permintaan pasar akan ketersediaan
                                pelet kayu. Kami dapat memproduksi pelet kayu dengan kapasitas hingga 1.500 Ton
                                per Bulannya.
                            </p>
                        </div>

                        <div className="about-profile-copy scroll-reveal opacity-0" data-reveal-delay="340">
                            <p>
                                Dengan kualitas unggul, komitmen terhadap lingkungan, dan layanan pelanggan yang
                                terbaik, PT Bio Energy Semesta Tama siap menjadi mitra industri wood pellet di
                                Indonesia dan mengekspansi ke pasar global. Dapatkan wood pellet berkualitas tinggi
                                dari PT Bio Energy Semesta Tama dan bergabunglah dalam upaya untuk menciptakan masa
                                depan yang lebih hijau dan berkelanjutan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="vision-mission" className="about-vision-section scroll-reveal opacity-0" aria-label="Visi dan Misi">
                <div className="about-vision-shell">
                    <div className="about-vision-heading scroll-reveal opacity-0" data-reveal-delay="100">
                        <h2 className="about-vision-title">Visi dan Misi</h2>
                        <p className="about-vision-description">
                            Komitmen PT Bio Energy Semesta Tama dalam menghadirkan energi biomassa berkualitas
                            untuk mendukung kebutuhan industri yang berkelanjutan.
                        </p>
                    </div>

                    <div className="about-vision-grid">
                        <article className="about-vision-card scroll-reveal opacity-0" data-reveal-delay="180">
                            <h3 className="about-vision-card__title">Visi</h3>
                            <p className="about-vision-card__text">
                                Menjadi perusahaan energi biomassa terpercaya di Indonesia yang menghadirkan wood pellet
                                berkualitas tinggi, efisien, dan ramah lingkungan untuk kebutuhan industri berkelanjutan.
                            </p>
                        </article>

                        <article className="about-vision-card scroll-reveal opacity-0" data-reveal-delay="260">
                            <h3 className="about-vision-card__title">Misi</h3>
                            <ul className="about-vision-card__list">
                                <li>Menyediakan wood pellet dengan kualitas konsisten dan standar produksi terkontrol.</li>
                                <li>Mendukung kebutuhan pasokan energi biomassa industri secara tepat waktu dan berkelanjutan.</li>
                                <li>Membangun kemitraan profesional melalui layanan responsif, transparan, dan terpercaya.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="contact" className="about-cta-section scroll-reveal opacity-0" aria-label="Ajakan kerja sama">
                <div className="about-cta-shell">
                    <h2 className="about-cta-title scroll-reveal opacity-0" data-reveal-delay="100">
                        Tertarik bekerja sama dengan kami
                    </h2>

                    <div className="about-cta-actions">
                        <a
                            href="/contact"
                            className="about-cta-button about-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <PhoneCall className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Contact</span>
                        </a>

                        <a
                            href="/about"
                            className="about-cta-button about-cta-button--profile scroll-reveal opacity-0"
                            data-reveal-delay="260"
                        >
                            <FileText className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Company Profile</span>
                        </a>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default About;
