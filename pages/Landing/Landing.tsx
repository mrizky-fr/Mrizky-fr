import React, { useEffect } from 'react';
import {
    Check,
    CircleHelp,
    Factory,
    Flame,
    Leaf,
    ScanEye,
    Truck,
    Users,
} from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import logoNucare from '../../assets/logo nucare.png';
import './Landing.css';

type FaqItem = {
    question: string;
    answer: string;
    icon: React.ElementType;
};

type WhyItem = {
    title: string;
    description: string;
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

const WHY_ITEMS: WhyItem[] = [
    {
        title: 'Bahan baku kayu berkualitas',
        description:
            'Kami memilih bahan baku kayu berkualitas tinggi agar wood pellet yang dihasilkan memiliki performa pembakaran yang stabil dan efisien.',
    },
    {
        title: 'Proses produksi modern',
        description:
            'Produksi dilakukan dengan proses yang modern dan terkontrol untuk menjaga kepadatan, kadar air, serta kualitas produk secara konsisten.',
    },
    {
        title: 'Siap menjadi mitra industri anda',
        description:
            'Tim kami siap mendukung kebutuhan pasokan wood pellet dengan layanan yang profesional, responsif, dan berorientasi pada solusi terbaik.',
    },
];

const HERO_TITLE_LINES = [
    ['Bio', 'Energy', 'Semesta', 'Tama'],
    ['Mitra', 'Energi', 'Biomassa', 'Terpercaya', 'untuk', 'Industri', 'Berkelanjutan'],
];

const Landing: React.FC = () => {
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
                    } else {
                        target.classList.remove('animate-fade-in-up');
                        target.classList.add('opacity-0');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );

        const hiddenElements = document.querySelectorAll<HTMLElement>('.scroll-reveal');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    let wordIndex = 0;

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <section id="home" className="home-hero-section">
                <div className="home-hero">
                    <div className="home-hero__content">
                        <div className="scroll-reveal opacity-0">
                            <p className="home-hero__subtitle-label">COMPANY PROFILE</p>
                        </div>

                        <h1
                            className="home-hero__title"
                            aria-label="Bio Energy Semesta Tama Mitra Energi Biomassa Terpercaya untuk Industri Berkelanjutan"
                        >
                            {HERO_TITLE_LINES.map((line, lineIndex) => (
                                <React.Fragment key={`line-${lineIndex}`}>
                                    <span className="home-hero__title-line">
                                        {line.map((word) => {
                                            const delay = `${wordIndex * 120}ms`;
                                            wordIndex += 1;

                                            return (
                                                <span
                                                    key={`${word}-${wordIndex}`}
                                                    className="home-hero__word"
                                                    style={{ animationDelay: delay }}
                                                >
                                                    {word}
                                                </span>
                                            );
                                        })}
                                    </span>
                                    {lineIndex < HERO_TITLE_LINES.length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </h1>

                        <p
                            className="home-hero__description scroll-reveal opacity-0"
                            style={{ animationDelay: '1450ms' }}
                        >
                            Kami menghadirkan solusi energi biomassa berkualitas melalui produksi wood pellet yang efisien,
                            konsisten, dan berstandar industri untuk mendukung kebutuhan energi ramah lingkungan di berbagai sektor usaha.
                        </p>

                        <div
                            className="home-hero__actions scroll-reveal opacity-0"
                            style={{ animationDelay: '1600ms' }}
                        >
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
                        <div className="home-benefit-item scroll-reveal opacity-0" data-reveal-delay="120">
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

                        <div className="home-benefit-item scroll-reveal opacity-0" data-reveal-delay="220">
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

                        <div className="home-benefit-item scroll-reveal opacity-0" data-reveal-delay="320">
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

            <section id="company" className="home-company-section scroll-reveal opacity-0" aria-label="Profil Bio Energy Semesta Tama">
                <div className="home-company-shell">
                    <div className="home-company-logo-wrap scroll-reveal opacity-0" data-reveal-delay="100">
                        <img
                            src={logoNucare}
                            alt="Bio Energy Semesta Tama"
                            className="home-company-logo"
                        />
                    </div>

                    <h2 className="home-company-title scroll-reveal opacity-0" data-reveal-delay="180">
                        Bio Energy Semesta Tama
                    </h2>

                    <div className="home-company-description scroll-reveal opacity-0" data-reveal-delay="260">
                        <p>
                            Bio Energy Semesta Tama merupakan perusahaan yang berdedikasi menghadirkan solusi energi terbarukan
                            berkualitas melalui produksi wood pellet. Dengan fokus pada energi biomassa, kami berkomitmen menyediakan
                            produk yang efisien, stabil, dan sesuai kebutuhan pelanggan di berbagai sektor industri.
                        </p>

                        <p>
                            Didukung oleh proses produksi yang terkontrol, pemilihan bahan baku yang tepat, serta komitmen terhadap
                            kualitas, wood pellet dari Bio Energy Semesta Tama dirancang untuk menjadi pilihan energi alternatif yang
                            dapat diandalkan bagi kebutuhan boiler, pemanas, pembangkit biomassa, maupun proses produksi industri.
                        </p>

                        <p>
                            Dengan kualitas unggul, kepedulian terhadap lingkungan, dan layanan kerja sama yang profesional,
                            Bio Energy Semesta Tama siap menjadi mitra terpercaya dalam penyediaan wood pellet di Indonesia serta
                            mendukung terciptanya masa depan energi yang lebih hijau dan berkelanjutan.
                        </p>
                    </div>

                    <div className="home-company-action scroll-reveal opacity-0" data-reveal-delay="340">
                        <a href="#faq" className="home-company-button">
                            <span>Lihat Lebih Lengkap</span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="why-us" className="home-why-section scroll-reveal opacity-0" aria-label="Mengapa harus kami">
                <div className="home-why-shell">
                    <div className="home-why-visual scroll-reveal opacity-0" data-reveal-delay="100">
                        <div className="home-why-frame" aria-hidden="true" />
                        <img
                            src="https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png"
                            alt="Produk wood pellet berkualitas"
                            className="home-why-image"
                        />
                    </div>

                    <div className="home-why-content">
                        {WHY_ITEMS.map((item, index) => (
                            <article
                                key={item.title}
                                className="home-why-card scroll-reveal opacity-0"
                                data-reveal-delay={180 + index * 120}
                            >
                                <div className="home-why-card__icon" aria-hidden="true">
                                    <Check size={28} strokeWidth={2.4} />
                                </div>

                                <div className="home-why-card__copy">
                                    <h3 className="home-why-card__title">{item.title}</h3>
                                    <p className="home-why-card__description">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="home-inquiry-section scroll-reveal opacity-0" aria-label="Pertanyaan Umum Bio Energy Semesta Tama">
                <div className="home-inquiry-shell">
                    <h2 className="home-inquiry-title scroll-reveal opacity-0" data-reveal-delay="100">Pertanyaan Umum Tentang Wood Pellet</h2>
                    <p className="home-inquiry-description scroll-reveal opacity-0" data-reveal-delay="180">
                        Informasi singkat mengenai produk wood pellet, kualitas produksi, dan peluang kerja sama bersama Bio Energy Semesta Tama.
                    </p>

                    <div className="home-inquiry-grid">
                        {FAQ_ITEMS.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.question}
                                    className="home-inquiry-card scroll-reveal opacity-0"
                                    data-reveal-delay={220 + index * 100}
                                >
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

            <section id="contact" className="home-cta-section scroll-reveal opacity-0" aria-label="Ajakan kerja sama Bio Energy Semesta Tama">
                <div className="home-cta-shell">
                    <h2 className="home-cta-title scroll-reveal opacity-0" data-reveal-delay="100">Tertarik bekerja sama dengan kami</h2>

                    <div className="home-cta-actions">
                        <a
                            href="#contact"
                            className="home-cta-button home-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <span>Contact</span>
                        </a>

                        <a
                            href="#company"
                            className="home-cta-button home-cta-button--profile scroll-reveal opacity-0"
                            data-reveal-delay="260"
                        >
                            <span>Company Profile</span>
                        </a>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Landing;
