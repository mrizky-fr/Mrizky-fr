import React from 'react';
import {
    FileText,
    Github,
    PhoneCall,
} from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import Reveal from '../../components/Reveal/Reveal';
import './Landing.css';

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
