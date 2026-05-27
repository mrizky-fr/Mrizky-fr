import React from 'react';
import {
    ArrowUpRight,
    FileText,
    Github,
} from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import Reveal from '../../components/Reveal/Reveal';
import './Landing.css';

const techLogos = [
    {
        src: 'https://raw.githubusercontent.com/mrizky-fr/News-Gallerys/refs/heads/main/fotos/about/Go_Logo_Blue.svg.png',
        alt: 'Go Logo',
    },
    {
        src: 'https://raw.githubusercontent.com/mrizky-fr/News-Gallerys/refs/heads/main/fotos/about/1686539179.png',
        alt: 'JavaScript Logo',
    },
    {
        src: 'https://raw.githubusercontent.com/mrizky-fr/News-Gallerys/refs/heads/main/fotos/about/HTML5_Logo_512.png',
        alt: 'HTML5 Logo',
    },
    {
        src: 'https://raw.githubusercontent.com/mrizky-fr/News-Gallerys/refs/heads/main/fotos/about/images%20(1).png',
        alt: 'CSS Logo',
    },
    {
        src: 'https://raw.githubusercontent.com/mrizky-fr/News-Gallerys/refs/heads/main/fotos/about/images.png',
        alt: 'React Logo',
    },
];

const techSliderLogos = Array.from({ length: 8 }, (_, index) => techLogos[index % techLogos.length]);

const renderUnderlinedWords = (text: string) =>
    text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="home-history-item__word">
            {word}
        </span>
    ));

const Landing: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <PublicHeader />

            <section id="home" className="home-hero-section">
                <div className="home-hero">
                    <div className="home-hero__content">
                        <Reveal>
                            <div>
                                <p className="home-hero__subtitle-label">
                                    &#123; Hallo EveryOne &#125;
                                </p>
                            </div>
                        </Reveal>

                        <h1
                            className="home-hero__title"
                            aria-label="Saya Moch Rizky D. | Developer Pemula Untuk Dunia Hehe."
                        >
                            <span className="home-hero__typing">
                                Saya Moch Rizky D. | Developer Pemula Untuk Dunia Hehe.
                            </span>
                        </h1>

                        <Reveal delay={1.45}>
                            <p className="home-hero__description">
                                Hallo!, kenalin gue Kyy (Mrizky-fr), frontend dev yang demen ngulik UI biar keliatan clean,
                                smooth, dan enak dipandang. Buat gue, tampilan bukan cuma soal estetik, tapi juga soal feel
                                pas dipake. Masih di fase belajar, tapi tetep gas upgrade skill tiap hari, pelan tapi pasti
                                naik level.
                            </p>
                        </Reveal>

                        <Reveal delay={1.6}>
                            <div className="home-hero__actions">
                                <a
                                    href="https://github.com/mrizky-fr"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="home-hero__button home-hero__button--primary"
                                >
                                    <Github className="app-button-icon" aria-hidden="true" />
                                    <span className="app-button-label">Githup Saya</span>
                                </a>
                                <a
                                    href="https://tech.mudahdeal.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="home-hero__button home-hero__button--secondary"
                                >
                                    <FileText className="app-button-icon" aria-hidden="true" />
                                    <span className="app-button-label">Temui Saya Di Dealtech</span>
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section className="home-tech-section" aria-label="Teknologi yang digunakan">
                <div className="home-tech-card">
                    <div className="home-tech-marquee">
                        <div className="home-tech-marquee__track">
                            <div className="home-tech-marquee__group">
                                {techSliderLogos.map((logo, index) => (
                                    <a
                                        key={`group-a-${logo.alt}-${index}`}
                                        className="home-tech-marquee__item"
                                        href={logo.src}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label={logo.alt}
                                    >
                                        <img src={logo.src} alt={logo.alt} loading="lazy" />
                                    </a>
                                ))}
                            </div>
                            <div className="home-tech-marquee__group" aria-hidden="true">
                                {techSliderLogos.map((logo, index) => (
                                    <a
                                        key={`group-b-${logo.alt}-${index}`}
                                        className="home-tech-marquee__item"
                                        href={logo.src}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        tabIndex={-1}
                                    >
                                        <img src={logo.src} alt="" loading="lazy" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-history-section" aria-label="History pekerjaan dan project publik">
                <div className="home-history-shell">
                    <h2 className="home-history-title">History Pekerjaan / Pengalaman</h2>

                    <article className="home-history-item">
                        <h3 className="home-history-item__title home-history-item__title--underline">
                            {renderUnderlinedWords('2018 - 2021 Bekerja Di Butik Emas')}
                        </h3>
                        <p className="home-history-item__description">
                            Di periode ini saya banyak belajar soal disiplin kerja, komunikasi dengan customer, dan konsistensi
                            menjaga kualitas layanan. Pengalaman tersebut jadi fondasi penting buat cara saya bekerja sampai sekarang.
                        </p>
                    </article>

                    <article className="home-history-item">
                        <h3 className="home-history-item__title">
                            {renderUnderlinedWords('2021 Mulai Bekerja Di PT Mudahdeal Group Sub Devisi DealTech ( dulunya Palingmurah.net )')}
                        </h3>
                        <p className="home-history-item__description">
                            Saat ini gue lagi berproses dan berkembang di Mudahdeal Group, tepatnya di Dealtech sebagai salah satu lini digitalnya.
                            Di sini gue fokus di frontend, ngerjain dan ngembangin tampilan web biar lebih clean, responsif, dan nyaman dipake user.
                            Lingkungannya bikin gue terus belajar hal baru, dari improve UI/UX sampai adaptasi sama perkembangan teknologi yang cepet banget.
                            Buat gue ini bukan cuma kerja, tapi tempat buat ngasah skill, ngebangun pengalaman, dan terus upgrade diri biar makin solid di dunia digital.
                        </p>
                        <a
                            href="https://tech.mudahdeal.com/company/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="home-history-link"
                        >
                            Siapa itu DealTech
                        </a>
                    </article>

                    <h2 className="home-history-title">Project OpenSource / Public</h2>
                    <article className="home-history-item">
                        <h3 className="home-history-item__title">
                            <a
                                href="https://digtl.web.id/next/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="home-history-item__title-link"
                            >
                                {renderUnderlinedWords('Next-FLM Tempat berbagi flm gratis & berbayar')}
                            </a>
                        </h3>
                        <p className="home-history-item__description">
                            Next-FLM adalah project publik yang saya bangun untuk eksplorasi konsep UI, alur konten, dan pengalaman pengguna
                            pada platform berbagi film. Project ini juga jadi ruang eksperimen saya untuk ngetes ide baru secara langsung.
                        </p>
                        <a
                            href="https://tech.mudahdeal.com/company/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="home-history-project-btn"
                        >
                            <ArrowUpRight className="home-history-project-btn__icon" aria-hidden="true" />
                            Kenal Lebih Dengan Saya!
                        </a>
                    </article>
                </div>
            </section>

            <Reveal>
                <section id="contact" className="home-cta-section" aria-label="Ajakan kerja sama PT Bio Energy Semesta Tama">
                    <div className="home-cta-shell">
                        <div className="home-cta-copy">
                            <Reveal delay={0.1}>
                                <h2 className="home-cta-title">Tertarik bekerja sama dengan saya</h2>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <p className="home-cta-description">
                                    Butuh bantuan pengembangan website, optimasi tampilan, atau kolaborasi project digital?
                                    Hubungi saya sekarang untuk diskusi dan solusi terbaik sesuai kebutuhan Anda.
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
                                    <Github className="app-button-icon" aria-hidden="true" />
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
