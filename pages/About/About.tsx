import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import './About.css';

const renderUnderlinedWords = (text: string) =>
    text.split(' ').map((word, index) => (
        <span key={`${word}-${index}`} className="about-history-item__word">
            {word}
        </span>
    ));

const About: React.FC = () => {
    return (
        <div className="min-h-screen overflow-x-hidden">
            <PublicHeader />

            <section className="about-intro-section" aria-label="Tentang saya">
                <div className="about-intro-shell">
                    <h1 className="about-intro-title">Tentang Saya</h1>
                    <p className="about-intro-description">
                        kenalin gue Muhammad Rizky D | Kyy (Mrizky-fr), frontend dev yang demen ngulik UI biar keliatan clean, smooth, dan enak dipandang.
                        Buat gue, tampilan bukan cuma soal estetik, tapi juga soal feel pas dipake. Masih di fase belajar, tapi tetep gas upgrade skill tiap hari,
                        pelan tapi pasti naik level. Walau sekarang AI udah makin jago bikin frontend, menurut gue karya manusia tetep punya ciri khas yang beda
                        lebih ada rasa, style, dan identitasnya sendiri. Jadi gue tetep fokus ngembangin style gue biar tiap karya punya 'nyawa' dan nggak
                        sekadar jadi template doang.
                    </p>
                    <p className="about-intro-description">
                        Selain itu, gue juga hobi bikin musik ya walau masih remixer abal-abal (hehe). Buat gue ini jadi cara buat nyalurin kreativitas di luar coding,
                        ngulik sound, beat, dan eksperimen gaya sesuka hati. Nggak harus sempurna, yang penting enjoy prosesnya dan terus berkembang pelan-pelan.
                    </p>
                </div>
            </section>

            <section className="about-history-section" aria-label="History pekerjaan dan project publik">
                <div className="about-history-shell">
                    <h2 className="about-history-title">History Pekerjaan / Pengalaman</h2>

                    <article className="about-history-item">
                        <h3 className="about-history-item__title">
                            {renderUnderlinedWords('2018 - 2021 Bekerja Di Butik Emas')}
                        </h3>
                        <p className="about-history-item__description">
                            Di periode ini saya banyak belajar soal disiplin kerja, komunikasi dengan customer, dan konsistensi
                            menjaga kualitas layanan. Pengalaman tersebut jadi fondasi penting buat cara saya bekerja sampai sekarang.
                        </p>
                    </article>

                    <article className="about-history-item">
                        <h3 className="about-history-item__title">
                            {renderUnderlinedWords('2021 Mulai Bekerja Di PT Mudahdeal Group Sub Devisi DealTech ( dulunya Palingmurah.net )')}
                        </h3>
                        <p className="about-history-item__description">
                            Saat ini gue lagi berproses dan berkembang di Mudahdeal Group, tepatnya di Dealtech sebagai salah satu lini digitalnya.
                            Di sini gue fokus di frontend, ngerjain dan ngembangin tampilan web biar lebih clean, responsif, dan nyaman dipake user.
                            Lingkungannya bikin gue terus belajar hal baru, dari improve UI/UX sampai adaptasi sama perkembangan teknologi yang cepet banget.
                            Buat gue ini bukan cuma kerja, tapi tempat buat ngasah skill, ngebangun pengalaman, dan terus upgrade diri biar makin solid di dunia digital.
                        </p>
                        <a
                            href="https://tech.mudahdeal.com/company/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="about-history-link"
                        >
                            Siapa itu DealTech
                        </a>
                    </article>

                    <h2 className="about-history-title">Project OpenSource / Public</h2>
                    <article className="about-history-item">
                        <h3 className="about-history-item__title">
                            <a
                                href="https://digtl.web.id/next/"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="about-history-item__title-link"
                            >
                                {renderUnderlinedWords('Next-FLM Tempat berbagi flm gratis & berbayar')}
                            </a>
                        </h3>
                        <p className="about-history-item__description">
                            Next-FLM adalah project publik yang saya bangun untuk eksplorasi konsep UI, alur konten, dan pengalaman pengguna
                            pada platform berbagi film. Project ini juga jadi ruang eksperimen saya untuk ngetes ide baru secara langsung.
                        </p>
                        <a
                            href="https://tech.mudahdeal.com/company/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="about-history-project-btn"
                        >
                            <ArrowUpRight className="about-history-project-btn__icon" aria-hidden="true" />
                            Kenal Lebih Dengan Saya!
                        </a>
                    </article>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default About;
