import React, { useEffect } from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Services.css';

type ServiceItem = {
    title: string;
    description: string;
};

const SERVICES: ServiceItem[] = [
    {
        title: 'Penyediaan Wood Pellet',
        description:
            'Kami menyediakan wood pellet berkualitas untuk kebutuhan industri, boiler, pemanas, dan berbagai kebutuhan energi biomassa yang membutuhkan pasokan stabil.',
    },
    {
        title: 'Pasokan Industri Berkelanjutan',
        description:
            'Kami mendukung kebutuhan kerja sama jangka panjang dengan pasokan pelet kayu yang terencana, konsisten, dan siap menyesuaikan kebutuhan mitra.',
    },
    {
        title: 'Produk Berkualitas Terstandar',
        description:
            'Setiap produk diproses dengan kontrol kualitas untuk menjaga kadar air, kepadatan, nilai kalor, serta performa pembakaran yang optimal.',
    },
    {
        title: 'Kerja Sama Distribusi',
        description:
            'Kami terbuka untuk peluang kerja sama dengan distributor, perusahaan, maupun mitra bisnis yang ingin mengembangkan energi biomassa ramah lingkungan.',
    },
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

            <PageHeader title="Layanan Kami" />

            <section id="services" className="services-section scroll-reveal opacity-0">
                <div className="services-shell">
                    <div className="services-heading scroll-reveal opacity-0" data-reveal-delay="100">
                        <h2 className="services-title">Solusi Energi Biomassa untuk Kebutuhan Industri</h2>
                        <p className="services-description">
                            Kami menghadirkan layanan penyediaan wood pellet yang berfokus pada kualitas,
                            konsistensi pasokan, dan kerja sama berkelanjutan untuk mendukung kebutuhan energi
                            ramah lingkungan.
                        </p>
                    </div>

                    <div className="services-grid">
                        {SERVICES.map((service, index) => (
                            <article
                                key={service.title}
                                className="services-card scroll-reveal opacity-0"
                                data-reveal-delay={180 + index * 100}
                            >
                                <h3 className="services-card__title">{service.title}</h3>
                                <p className="services-card__description">{service.description}</p>
                            </article>
                        ))}
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
                            href="#contact"
                            className="services-cta-button services-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <PhoneCall className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Contact</span>
                        </a>

                        <a
                            href="#services"
                            className="services-cta-button services-cta-button--profile scroll-reveal opacity-0"
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

export default Services;
