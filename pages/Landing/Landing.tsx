import React from 'react';
import {
    ArrowRight,
    Check,
    CircleHelp,
    Factory,
    FileText,
    Flame,
    Leaf,
    PhoneCall,
    ScanEye,
    Truck,
    Users,
} from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import heroCoverImage from '../../assets/Wood-Pellet-cover-q4vtiu315mplmf2d3s09jzctdfky9ni6y5fe4tuyrs.webp';
import homeSectionFourImage from '../../assets/WhatsApp Image 2026-05-21 at 15.40.16.jpeg';
import Reveal from '../../components/Reveal/Reveal';
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
        question: 'Apakah PT Bio Energy Semesta Tama melayani kerja sama jangka panjang?',
        answer:
            'Ya, kami terbuka untuk kerja sama pasokan wood pellet secara berkelanjutan dengan perusahaan, industri, distributor, maupun mitra bisnis yang membutuhkan sumber energi biomassa terpercaya.',
        icon: Users,
    },
];

const WHY_ITEMS: WhyItem[] = [
    {
        title: 'Bahan baku kayu pilihan berkualitas tinggi',
        description:
            'Diproses dari material kayu terpilih untuk menjaga kualitas pembakaran yang stabil.',
    },
    {
        title: 'Diameter standar 8 mm, konsisten dan terstandar',
        description:
            'Setiap batch diproduksi dengan ukuran seragam agar performa penggunaan tetap konsisten.',
    },
    {
        title: 'Kalori tinggi, kadar air rendah',
        description:
            'Memberikan efisiensi pembakaran lebih baik untuk mendukung kebutuhan operasional industri.',
    },
    {
        title: 'Cocok untuk kebutuhan industri dan boiler',
        description:
            'Produk dirancang untuk mendukung berbagai sektor yang membutuhkan energi biomassa andal.',
    },
    {
        title: 'Siap melayani order skala kecil hingga besar',
        description:
            'Kami melayani kebutuhan pasokan fleksibel dari volume kecil hingga kebutuhan besar berkelanjutan.',
    },
];

const HERO_TITLE_LINES = [
    ['Dari', 'Alam', 'untuk', 'Industri'],
    ['Wood', 'Pellet', 'Biomassa', 'Bersih,', 'Kuat,', 'dan', 'Berkelanjutan'],
];

const Landing: React.FC = () => {
    let wordIndex = 0;
    const heroBackgroundStyle = {
        '--home-hero-image': `url(${heroCoverImage})`,
        '--home-hero-overlay-image': "url('https://i.ibb.co.com/Gv0x0Fk2/cover-hero-section-5.png')",
    } as React.CSSProperties;

    return (
        <div className="min-h-screen overflow-x-hidden">
            <PublicHeader />

            <section id="home" className="home-hero-section">
                <div className="home-hero" style={heroBackgroundStyle}>
                    <div className="home-hero__content">
                        <Reveal>
                        <div>
                            <p className="home-hero__subtitle-label">COMPANY PROFILE</p>
                        </div>
                        </Reveal>

                        <h1
                            className="home-hero__title"
                            aria-label="Dari Alam untuk Industri Wood Pellet Biomassa Bersih, Kuat, dan Berkelanjutan"
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

                        <Reveal delay={1.45}>
                            <p className="home-hero__description">
                                Kami menghadirkan solusi energi biomassa berkualitas melalui produksi wood pellet yang efisien,
                                konsisten, dan berstandar industri untuk mendukung kebutuhan energi ramah lingkungan di berbagai sektor usaha.
                            </p>
                        </Reveal>

                        <Reveal delay={1.6}>
                        <div className="home-hero__actions">
                            <a href="#about" className="home-hero__button home-hero__button--primary">
                                <FileText className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Tentang Kami</span>
                            </a>
                            <a href="#faq" className="home-hero__button home-hero__button--secondary">
                                <CircleHelp className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Pertanyaan Umum</span>
                            </a>
                        </div>
                        </Reveal>
                    </div>

                    <div className="home-hero__spacer" aria-hidden="true" />
                </div>
            </section>

            <Reveal>
            <section id="about" className="home-benefits-section" aria-label="Keunggulan PT Bio Energy Semesta Tama">
                    <div className="home-benefits-strip">
                        <Reveal delay={0.12} className="home-benefit-item">
                            <div className="home-benefit-icon">
                                <Leaf size={28} strokeWidth={1.5} aria-hidden="true" />
                            </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Energi Ramah Lingkungan</h3>
                            <p className="home-benefit-description">
                                Wood pellet menjadi solusi energi biomassa yang mendukung efisiensi bahan bakar dan pengurangan ketergantungan pada energi fosil.
                            </p>
                        </div>
                        </Reveal>

                        <Reveal delay={0.22} className="home-benefit-item">
                            <div className="home-benefit-icon">
                                <Factory size={28} strokeWidth={1.5} aria-hidden="true" />
                            </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Produksi Terstandar</h3>
                            <p className="home-benefit-description">
                                Proses produksi dilakukan secara terkontrol untuk menjaga kualitas, kepadatan, kadar air, dan performa pembakaran wood pellet.
                            </p>
                        </div>
                        </Reveal>

                        <Reveal delay={0.32} className="home-benefit-item">
                            <div className="home-benefit-icon">
                                <Truck size={28} strokeWidth={1.5} aria-hidden="true" />
                            </div>
                        <div className="home-benefit-copy">
                            <h3 className="home-benefit-title">Pasokan Berkelanjutan</h3>
                            <p className="home-benefit-description">
                                Kami mendukung kebutuhan industri dengan pasokan wood pellet yang konsisten, terencana, dan siap untuk kerja sama jangka panjang.
                            </p>
                        </div>
                        </Reveal>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="about-me" className="home-company-section" aria-label="Profil PT Bio Energy Semesta Tama">
                <div className="home-company-shell">
                    <Reveal delay={0.1} className="home-company-logo-wrap">
                        <span className="home-company-logo-text" aria-label="M Rizky-fr">
                            <span className="header-logo__typing">
                                <span className="header-logo__typing-text">M Rizky-fr</span>
                            </span>
                        </span>
                    </Reveal>

                    <Reveal delay={0.18}>
                        <h2 className="home-company-title">
                            PT Bio Energy Semesta Tama
                        </h2>
                    </Reveal>

                    <Reveal delay={0.26} className="home-company-description">
                        <p>
                            Dalam upaya meminimalisir dampak negatif dari polusi udara dan perubahan iklim yang semakin
                            mengkhawatirkan, dunia membutuhkan sumber energi yang terbarukan, bersih, dan efisien.
                            Wood pellet biomassa adalah salah satu solusi paling menjanjikan untuk menggantikan ketergantungan
                            pada bahan bakar fosil di sektor industri.
                        </p>

                        <p>
                            PT. Bio Energy Semesta Tama (BEST), sebagai produsen wood pellet yang berbasis di Solo, Jawa Tengah,
                            hadir dengan komitmen penuh untuk menghadirkan produk biomassa berkualitas tinggi yang ramah lingkungan
                            dan berkelanjutan. BEST terus membangun reputasi sebagai mitra energi biomassa yang dapat diandalkan
                            oleh industri di Indonesia.
                        </p>

                        <p>
                            BEST hadir untuk memenuhi permintaan pasar akan ketersediaan wood pellet yang konsisten, terstandar,
                            dan terjangkau. Kami memproduksi wood pellet dengan diameter 8 mm dari bahan baku kayu pilihan melalui
                            proses pengeringan dan pemadatan yang terstandar, menghasilkan pellet dengan nilai kalori tinggi
                            dan kadar air rendah.
                        </p>

                        <p>
                            Dengan kualitas produk yang unggul, komitmen terhadap kelestarian lingkungan, dan layanan pelanggan
                            yang terbaik, PT. Bio Energy Semesta Tama siap menjadi bagian dari solusi energi bersih Indonesia.
                            Bergabunglah bersama kami dalam menciptakan masa depan yang lebih hijau, lebih sehat, dan lebih berkelanjutan.
                        </p>
                    </Reveal>

                    <Reveal delay={0.34} className="home-company-action">
                        <a href="/#why-us" className="home-company-button">
                            <ArrowRight className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Lihat Lebih Lengkap</span>
                        </a>
                    </Reveal>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="why-us" className="home-why-section" aria-label="Mengapa harus kami">
                <div className="home-why-shell">
                    <Reveal delay={0.1} className="home-why-visual">
                        <img
                            src={homeSectionFourImage}
                            alt="Produk wood pellet berkualitas"
                            className="home-why-image"
                        />
                    </Reveal>

                    <div className="home-why-content">
                        {WHY_ITEMS.map((item, index) => (
                            <Reveal
                                key={item.title}
                                className="home-why-card"
                                delay={(180 + index * 120) / 1000}
                            >
                                <div className="home-why-card__icon" aria-hidden="true">
                                    <Check size={28} strokeWidth={2.4} />
                                </div>

                                <div className="home-why-card__copy">
                                    <h3 className="home-why-card__title">{item.title}</h3>
                                    <p className="home-why-card__description">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="faq" className="home-inquiry-section" aria-label="Pertanyaan Umum PT Bio Energy Semesta Tama">
                <div className="home-inquiry-shell">
                    <Reveal delay={0.1}>
                        <h2 className="home-inquiry-title">Pertanyaan Umum Tentang Wood Pellet</h2>
                    </Reveal>
                    <Reveal delay={0.18}>
                        <p className="home-inquiry-description">
                            Informasi singkat mengenai produk wood pellet, kualitas produksi, dan peluang kerja sama bersama PT Bio Energy Semesta Tama.
                        </p>
                    </Reveal>

                    <div className="home-inquiry-grid">
                        {FAQ_ITEMS.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal
                                    key={item.question}
                                    className="home-inquiry-card"
                                    delay={(220 + index * 100) / 1000}
                                >
                                    <div className="home-inquiry-card__icon" aria-hidden="true">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="home-inquiry-card__copy">
                                        <h3 className="home-inquiry-card__title">{item.question}</h3>
                                        <p className="home-inquiry-card__description">{item.answer}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="contact" className="home-cta-section" aria-label="Ajakan kerja sama PT Bio Energy Semesta Tama">
                <div className="home-cta-shell">
                    <div className="home-cta-copy">
                        <Reveal delay={0.1}>
                            <h2 className="home-cta-title">Tertarik bekerja sama dengan kami</h2>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="home-cta-description">
                                Butuh pasokan wood pellet yang stabil, bersih, dan berkualitas?
                                Jangan tunda lagi, hubungi kami sekarang dan dapatkan penawaran terbaik sesuai kebutuhan bisnis Anda.
                            </p>
                        </Reveal>
                    </div>

                    <div className="home-cta-actions">
                        <Reveal delay={0.18}>
                            <a
                                href="https://github.com/mrizky-fr"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="home-cta-button home-cta-button--contact"
                            >
                                <PhoneCall className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Githup Saya</span>
                            </a>
                        </Reveal>

                        <Reveal delay={0.26}>
                            <a
                                href="https://digtl.web.id/next/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="home-cta-button home-cta-button--profile"
                            >
                                <FileText className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Next-FLM</span>
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

export default Landing;
