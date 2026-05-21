import React, { useEffect } from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Services.css';

const PRODUCT_SPECS = [
    'Diameter: 8 mm',
    'Bahan baku: Kayu pilihan',
    'Kadar air: Rendah',
    'Nilai kalori: Tinggi',
    'Cocok untuk: Boiler industri dan pembangkit energi biomassa',
];

const Services: React.FC = () => {
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

            <PageHeader title="Produk" />

            <section id="services" className="services-section scroll-reveal opacity-0">
                <div className="services-shell">
                    <div className="services-heading scroll-reveal opacity-0" data-reveal-delay="100">
                        <h2 className="services-title">Wood Pellet Biomassa</h2>
                        <p className="services-description">
                            Wood pellet kami diproduksi dari bahan baku kayu pilihan melalui proses pengeringan
                            dan pemadatan yang terstandar, menghasilkan pellet dengan kualitas pembakaran yang optimal.
                        </p>
                    </div>

                    <div className="services-product scroll-reveal opacity-0" data-reveal-delay="180">
                        <h3 className="services-product__title">Spesifikasi</h3>
                        <ol className="services-product__list">
                            {PRODUCT_SPECS.map((spec) => (
                                <li key={spec}>{spec}</li>
                            ))}
                        </ol>

                        <p className="services-product__note">
                            Tersedia dalam pemesanan skala kecil maupun besar, dengan layanan custom sesuai kebutuhan.
                        </p>

                        <a href="/contact" className="services-product__button">
                            <PhoneCall className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Kebutuhan Wood Pellet</span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="contact" className="services-cta-section scroll-reveal opacity-0" aria-label="Ajakan kerja sama">
                <div className="services-cta-shell">
                    <h2 className="services-cta-title scroll-reveal opacity-0" data-reveal-delay="100">
                        Tertarik bekerja sama dengan kami
                    </h2>

                    <div className="services-cta-actions">
                        <a
                            href="/contact"
                            className="services-cta-button services-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <PhoneCall className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Contact</span>
                        </a>

                        <a
                            href="/about"
                            className="services-cta-button services-cta-button--profile scroll-reveal opacity-0"
                            data-reveal-delay="260"
                        >
                            <FileText className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Tentang Kami</span>
                        </a>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Services;
