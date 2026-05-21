import React, { useEffect } from 'react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Contact.css';

type ContactInfoItem = {
    label: string;
    value: string;
    href?: string;
};

const CONTACT_INFO: ContactInfoItem[] = [
    {
        label: 'Alamat',
        value: 'Jawa Timur, Indonesia',
    },
    {
        label: 'Email',
        value: 'info@alamkencanaindonesia.com',
        href: 'mailto:info@alamkencanaindonesia.com',
    },
    {
        label: 'No. HP',
        value: '+62 812-3456-7890',
        href: 'tel:+6281234567890',
    },
];

const Contact: React.FC = () => {
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

            <PageHeader title="Kontak Kami" />

            <section id="contact" className="contact-section scroll-reveal opacity-0">
                <div className="contact-shell">
                    <div className="contact-heading scroll-reveal opacity-0" data-reveal-delay="100">
                        <h2 className="contact-title">Hubungi PT Bio Energy Semesta Tama</h2>
                        <p className="contact-description">
                            Kami siap membantu kebutuhan informasi, kerja sama, dan pemesanan wood pellet
                            berkualitas untuk kebutuhan industri maupun distribusi.
                        </p>
                    </div>

                    <div className="contact-layout">
                        <div className="contact-info scroll-reveal opacity-0" data-reveal-delay="180">
                            <h3 className="contact-info__title">Informasi Kontak</h3>
                            <p className="contact-info__description">
                                Silakan hubungi kami melalui informasi berikut atau isi form kontak yang tersedia.
                                Tim kami akan merespons kebutuhan Anda dengan profesional.
                            </p>

                            <div className="contact-info__list">
                                {CONTACT_INFO.map((item) => (
                                    <div key={item.label} className="contact-info__item">
                                        <span className="contact-info__label">{item.label}</span>

                                        {item.href ? (
                                            <a href={item.href} className="contact-info__value">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className="contact-info__value">{item.value}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form className="contact-form scroll-reveal opacity-0" data-reveal-delay="260">
                            <div className="contact-form__row">
                                <div className="contact-form__group">
                                    <label htmlFor="name" className="contact-form__label">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="contact-form__input"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>

                                <div className="contact-form__group">
                                    <label htmlFor="phone" className="contact-form__label">
                                        No. HP
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        className="contact-form__input"
                                        placeholder="Masukkan nomor HP"
                                    />
                                </div>
                            </div>

                            <div className="contact-form__group">
                                <label htmlFor="email" className="contact-form__label">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="contact-form__input"
                                    placeholder="Masukkan alamat email"
                                />
                            </div>

                            <div className="contact-form__group">
                                <label htmlFor="subject" className="contact-form__label">
                                    Subjek
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    className="contact-form__input"
                                    placeholder="Contoh: Permintaan kerja sama wood pellet"
                                />
                            </div>

                            <div className="contact-form__group">
                                <label htmlFor="message" className="contact-form__label">
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="contact-form__textarea"
                                    placeholder="Tulis pesan atau kebutuhan Anda"
                                    rows={6}
                                />
                            </div>

                            <button type="submit" className="contact-form__button">
                                <span>Kirim Pesan</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Contact;
