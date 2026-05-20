import React, { useEffect } from 'react';
import {
    CircleHelp,
    Factory,
    Flame,
    Leaf,
    PackageCheck,
    ScanEye,
    ShieldCheck,
    Target,
    Truck,
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
        question: 'Apa itu wood pellet?',
        answer:
            'Wood pellet adalah bahan bakar biomassa berbentuk pelet padat yang dibuat dari limbah kayu atau serbuk kayu terkompresi dan digunakan sebagai sumber energi alternatif yang lebih ramah lingkungan.',
        icon: CircleHelp,
    },
    {
        question: 'Untuk kebutuhan apa wood pellet digunakan?',
        answer:
            'Wood pellet dapat digunakan untuk kebutuhan energi industri, pemanas, boiler, pembangkit listrik biomassa, hingga berbagai proses produksi yang membutuhkan bahan bakar efisien dan stabil.',
        icon: Flame,
    },
    {
        question: 'Bagaimana standar kualitas wood pellet yang diproduksi?',
        answer:
            'Kualitas wood pellet dijaga melalui pemilihan bahan baku, proses pengeringan, pemadatan, serta kontrol mutu agar menghasilkan produk dengan kadar air rendah, pembakaran stabil, dan performa energi yang konsisten.',
        icon: ScanEye,
    },
    {
        question: 'Apakah Bio Energy Semesta Tama melayani kerja sama jangka panjang?',
        answer:
            'Ya, kami terbuka untuk kerja sama pasokan wood pellet secara berkelanjutan dengan perusahaan, industri, distributor, maupun mitra bisnis yang membutuhkan sumber energi biomassa terpercaya.',
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
                            Mitra Energi Biomassa Terpercaya untuk Industri Berkelanjutan
                        </h1>
                        <p className="home-hero__description scroll-reveal opacity-0" style={{ animationDelay: '200ms' }}>
                            Kami menghadirkan solusi energi biomassa berkualitas melalui produksi wood pellet yang efisien,
                            konsisten, dan berstandar industri untuk mendukung kebutuhan energi ramah lingkungan di berbagai sektor usaha.
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
                            <Leaf size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Energi Ramah Lingkungan</h3>
                            <p className="home-benefit-description">
                                Wood pellet menjadi solusi energi biomassa yang mendukung efisiensi bahan bakar dan pengurangan ketergantungan pada energi fosil.
                            </p>
                        </div>
                    </div>
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <Factory size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Produksi Terstandar</h3>
                            <p className="home-benefit-description">
                                Proses produksi dilakukan secara terkontrol untuk menjaga kualitas, kepadatan, kadar air, dan performa pembakaran wood pellet.
                            </p>
                        </div>
                    </div>
                    <div className="home-benefit-item">
                        <div className="home-benefit-icon">
                            <Truck size={28} strokeWidth={1.5} aria-hidden="true" />
                        </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Pasokan Berkelanjutan</h3>
                            <p className="home-benefit-description">
                                Kami mendukung kebutuhan industri dengan pasokan wood pellet yang konsisten, terencana, dan siap untuk kerja sama jangka panjang.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faq" className="home-inquiry-section scroll-reveal opacity-0" aria-label="Pertanyaan Umum Bio Energy Semesta Tama">
                <div className="home-inquiry-shell">
                    <h2 className="home-inquiry-title">Pertanyaan Umum Tentang Wood Pellet</h2>
                    <p className="home-inquiry-description">
                        Informasi singkat mengenai produk wood pellet, kualitas produksi, dan peluang kerja sama bersama Bio Energy Semesta Tama.
                    </p>
                    <div className="home-inquiry-grid">
                        {FAQ_ITEMS.map((item) => {
                            const Icon = item.icon;
                            return (
                                <article key={item.question} className="home-inquiry-card">
                                    <div className="home-inquiry-card__icon" aria-hidden="true">
                                        <Icon size={28} strokeWidth={1.5} />
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