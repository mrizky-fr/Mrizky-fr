import React from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import Reveal from '../../components/Reveal/Reveal';
import './Services.css';

const PRODUCT_SPECS = [
    'Diameter: 8 mm',
    'Bahan baku: Kayu pilihan',
    'Kadar air: Rendah',
    'Nilai kalori: Tinggi',
    'Cocok untuk: Boiler industri dan pembangkit energi biomassa',
];

const Services: React.FC = () => {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <PageHeader title="Produk" />

            <Reveal>
            <section id="services" className="services-section">
                <div className="services-shell">
                    <Reveal delay={0.1} className="services-heading">
                        <h2 className="services-title">Wood Pellet Biomassa</h2>
                        <p className="services-description">
                            Wood pellet kami diproduksi dari bahan baku kayu pilihan melalui proses pengeringan
                            dan pemadatan yang terstandar, menghasilkan pellet dengan kualitas pembakaran yang optimal.
                        </p>
                    </Reveal>

                    <Reveal delay={0.18} className="services-product">
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
                    </Reveal>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="contact" className="services-cta-section" aria-label="Ajakan kerja sama">
                <div className="services-cta-shell">
                    <Reveal delay={0.1}>
                        <h2 className="services-cta-title">
                            Tertarik bekerja sama dengan kami
                        </h2>
                    </Reveal>

                    <div className="services-cta-actions">
                        <Reveal delay={0.18}>
                            <a
                                href="/contact"
                                className="services-cta-button services-cta-button--contact"
                            >
                                <PhoneCall className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Contact</span>
                            </a>
                        </Reveal>

                        <Reveal delay={0.26}>
                            <a
                                href="/about"
                                className="services-cta-button services-cta-button--profile"
                            >
                                <FileText className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Tentang Kami</span>
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

export default Services;
