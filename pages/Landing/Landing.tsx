import React, { useEffect } from 'react';
import {
    CircleHelp,
    ScanEye,
    ShieldCheck,
    Smartphone,
    Target,
    Users,
} from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import './Landing.css';

type FaqItem = {
    question: string;
    answer: string;
    icon: React.ElementType;
};

const FAQ_ITEMS: FaqItem[] = [
    {
        question: 'Apa itu Bio Energy Semesta Tama?',
        answer:
            'Bio Energy Semesta Tama adalah perusahaan yang berfokus membangun layanan profesional, kolaborasi jangka panjang, dan pertumbuhan bisnis yang berkelanjutan.',
        icon: CircleHelp,
    },
    {
        question: 'Layanan apa yang tersedia?',
        answer:
            'Kami menyediakan layanan yang dapat disesuaikan dengan kebutuhan klien, mulai dari konsultasi, pengembangan solusi, hingga dukungan implementasi.',
        icon: Target,
    },
    {
        question: 'Bagaimana standar kualitas kerja perusahaan?',
        answer:
            'Setiap proses kerja dijalankan secara terstruktur, transparan, dan terukur untuk memastikan hasil yang konsisten serta berdampak nyata.',
        icon: ScanEye,
    },
    {
        question: 'Siapa yang dapat bekerja sama dengan kami?',
        answer:
            'Perusahaan, institusi, maupun komunitas yang membutuhkan mitra profesional dapat berkolaborasi bersama Bio Energy Semesta Tama.',
        icon: Users,
    },
];

const Landing: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );

        const hiddenElements = document.querySelectorAll('.scroll-reveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <section id="home" className="home-hero-section">
                <div className="home-hero">
                    <div className="home-hero__content">
                        <div className="scroll-reveal opacity-0">
                            <p className="home-hero__subtitle-label">COMPANY PROFILE</p>
                        </div>
                        <h1 className="home-hero__title scroll-reveal opacity-0" style={{ animationDelay: '100ms' }}>
                            Bio Energy Semesta Tama
                            <br />
                            Professional Business Partner
                        </h1>
                        <p className="home-hero__description scroll-reveal opacity-0" style={{ animationDelay: '200ms' }}>
                            Kami hadir sebagai mitra bisnis yang adaptif, terpercaya, dan berorientasi pada kualitas untuk
                            mendukung pertumbuhan perusahaan Anda di berbagai sektor.
                        </p>
                        <div className="home-hero__actions scroll-reveal opacity-0" style={{ animationDelay: '300ms' }}>
                            <a href="#about" className="home-hero__button home-hero__button--primary">
                                <span>Tentang Kami</span>
                            </a>
                            <a href="#faq" className="home-hero__button home-hero__button--secondary">
                                <span>Pertanyaan Umum</span>
                            </a>
                        </div>
                    </div>
                    <div className="home-hero__spacer" aria-hidden="true" />
                </div>
            </section>

            <section id="about" className="home-benefits-section scroll-reveal opacity-0" aria-label="Keunggulan Bio Energy Semesta Tama">
                <div className="home-benefits-strip">
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <ShieldCheck size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Integritas Profesional</h3>
                            <p className="home-benefit-description">
                                Setiap kerja sama dijalankan dengan komitmen, keterbukaan, dan tanggung jawab tinggi.
                            </p>
                        </div>
                    </div>
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <Smartphone size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Solusi Adaptif</h3>
                            <p className="home-benefit-description">
                                Pendekatan kerja yang fleksibel dan relevan untuk kebutuhan bisnis yang terus berkembang.
                            </p>
                        </div>
                    </div>
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <Target size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Berorientasi Hasil</h3>
                            <p className="home-benefit-description">
                                Fokus pada hasil yang terukur untuk mendukung pertumbuhan jangka panjang mitra kami.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="home-inquiry-section scroll-reveal opacity-0" aria-label="Pertanyaan Umum Bio Energy Semesta Tama">
                <div className="home-inquiry-shell">
                    <h2 className="home-inquiry-title">Pertanyaan Umum Tentang Bio Energy Semesta Tama</h2>
                    <p className="home-inquiry-description">Informasi singkat mengenai perusahaan dan layanan kami.</p>
                    <div className="home-inquiry-grid">
                        {FAQ_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article key={item.question} className="home-inquiry-card">
                                    <div className="home-inquiry-card__icon" aria-hidden="true">
                                        <Icon size={22} />
                                    </div>
                                    <div className="home-inquiry-card__copy">
                                        <h3 className="home-inquiry-card__title">{item.question}</h3>
                                        <p className="home-inquiry-card__description">{item.answer}</p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Landing;
