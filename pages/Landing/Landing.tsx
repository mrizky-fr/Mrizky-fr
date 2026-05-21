import React, { useEffect } from 'react';
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
import logoNucare from '../../assets/logo best.png';
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
                                <FileText className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Tentang Kami</span>
                            </a>
                            <a href="#faq" className="home-hero__button home-hero__button--secondary">
                                <CircleHelp className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Pertanyaan Umum</span>
                            </a>
                        </div>
                    </div>

                    <div className="home-hero__spacer" aria-hidden="true" />
                </div>
            </section>

            <section id="about" className="home-benefits-section scroll-reveal opacity-0" aria-label="Keunggulan PT Bio Energy Semesta Tama">
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

            <section id="company" className="home-company-section scroll-reveal opacity-0" aria-label="Profil PT Bio Energy Semesta Tama">
                <div className="home-company-shell">
                    <div className="home-company-logo-wrap scroll-reveal opacity-0" data-reveal-delay="100">
                        <img
                            src={logoNucare}
                            alt="PT Bio Energy Semesta Tama"
                            className="home-company-logo"
                        />
                    </div>

                    <h2 className="home-company-title scroll-reveal opacity-0" data-reveal-delay="180">
                        PT Bio Energy Semesta Tama
                    </h2>

                    <div className="home-company-description scroll-reveal opacity-0" data-reveal-delay="260">
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

                        <p>
                            <strong>Visi:</strong> "Menjadi produsen wood pellet biomassa terpercaya yang berkontribusi nyata pada
                            kemandirian energi bersih Indonesia, demi generasi yang lebih sehat dan bumi yang lebih lestari."
                        </p>

                        <p><strong>Misi:</strong></p>
                        <ol className="home-company-mission-list">
                            <li>Memproduksi wood pellet berkualitas tinggi dari bahan baku kayu pilihan secara konsisten dan terstandar</li>
                            <li>Mendukung peralihan dari bahan bakar fosil ke energi biomassa yang lebih ramah lingkungan</li>
                            <li>Memberikan solusi energi alternatif yang terjangkau dan berkelanjutan bagi industri Indonesia</li>
                            <li>Menjalankan proses produksi yang bertanggung jawab terhadap alam dan masyarakat sekitar</li>
                            <li>Turut serta menjaga kelestarian lingkungan melalui pemanfaatan sumber daya kayu secara bijak</li>
                        </ol>
                    </div>

                    <div className="home-company-action scroll-reveal opacity-0" data-reveal-delay="340">
                        <a href="/about" className="home-company-button">
                            <ArrowRight className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Lihat Lebih Lengkap</span>
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

            <section id="faq" className="home-inquiry-section scroll-reveal opacity-0" aria-label="Pertanyaan Umum PT Bio Energy Semesta Tama">
                <div className="home-inquiry-shell">
                    <h2 className="home-inquiry-title scroll-reveal opacity-0" data-reveal-delay="100">Pertanyaan Umum Tentang Wood Pellet</h2>
                    <p className="home-inquiry-description scroll-reveal opacity-0" data-reveal-delay="180">
                        Informasi singkat mengenai produk wood pellet, kualitas produksi, dan peluang kerja sama bersama PT Bio Energy Semesta Tama.
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

            <section id="contact" className="home-cta-section scroll-reveal opacity-0" aria-label="Ajakan kerja sama PT Bio Energy Semesta Tama">
                <div className="home-cta-shell">
                    <div className="home-cta-copy">
                        <h2 className="home-cta-title scroll-reveal opacity-0" data-reveal-delay="100">Tertarik bekerja sama dengan kami</h2>
                        <p className="home-cta-description scroll-reveal opacity-0" data-reveal-delay="160">
                            Butuh pasokan wood pellet yang stabil, bersih, dan berkualitas?
                            Jangan tunda lagi, hubungi kami sekarang dan dapatkan penawaran terbaik sesuai kebutuhan bisnis Anda.
                        </p>
                    </div>

                    <div className="home-cta-actions">
                        <a
                            href="/contact"
                            className="home-cta-button home-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <PhoneCall className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Contact</span>
                        </a>

                        <a
                            href="/about"
                            className="home-cta-button home-cta-button--profile scroll-reveal opacity-0"
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

export default Landing;
