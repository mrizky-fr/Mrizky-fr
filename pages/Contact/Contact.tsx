import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import Reveal from '../../components/Reveal/Reveal';
import './Contact.css';

type ContactInfoItem = {
    icon: React.ElementType;
    label: string;
    value: string;
    href?: string;
};

const CONTACT_PERSON = {
    name: 'PT. Bio Energy Semesta Tama (BEST)',
};

const CONTACT_INFO: ContactInfoItem[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'info@best-pellet.com',
        href: 'mailto:info@best-pellet.com',
    },
    {
        icon: MapPin,
        label: 'Alamat',
        value: 'Jalan Raya Solo Sukoharjo KM 7, Dusun Telukan, RT 003/RW 005, Solo, Jawa Tengah',
    },
];

const Contact: React.FC = () => {
    const handleSubmitToWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get('name') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const subject = String(formData.get('subject') || '').trim();
        const message = String(formData.get('message') || '').trim();

        const text = [
            'Halo PT. Bio Energy Semesta Tama (BEST),',
            '',
            'Saya ingin mengajukan kebutuhan wood pellet:',
            `Nama: ${name || '-'}`,
            `Email: ${email || '-'}`,
            `Subjek: ${subject || '-'}`,
            `Pesan: ${message || '-'}`,
        ].join('\n');

        const whatsappUrl = `https://wa.me/628115585490?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <PageHeader title="Kontak Kami" />

            <Reveal>
            <section id="contact" className="contact-section">
                <div className="contact-shell">
                    <Reveal delay={0.1} className="contact-heading">
                        <h2 className="contact-title">Hubungi PT Bio Energy Semesta Tama</h2>
                        <p className="contact-description">
                            Kami siap membantu kebutuhan informasi, kerja sama, dan pemesanan wood pellet
                            berkualitas untuk kebutuhan industri maupun distribusi.
                        </p>
                    </Reveal>

                    <div className="contact-layout">
                        <Reveal delay={0.18} className="contact-info">
                            <h3 className="contact-info__title">Informasi Kontak</h3>
                            <p className="contact-info__description">
                                Silakan hubungi kami melalui informasi berikut atau isi form kontak yang tersedia.
                                Tim kami akan merespons kebutuhan Anda dengan profesional.
                            </p>

                            <div className="contact-info__person">
                                <h4 className="contact-info__person-name">{CONTACT_PERSON.name}</h4>
                            </div>

                            <div className="contact-info__list">
                                {CONTACT_INFO.map((item, index) => {
                                    const ItemIcon = item.icon;

                                    return (
                                    <div
                                        key={item.label}
                                        className={`contact-info__item${index === 0 ? ' is-highlighted' : ''}`}
                                    >
                                        <span className="contact-info__icon-wrap" aria-hidden="true">
                                            <ItemIcon className="contact-info__icon" />
                                        </span>

                                        <div className="contact-info__copy">
                                            <span className="contact-info__label">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href} className="contact-info__value">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="contact-info__value">{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                                })}
                            </div>
                        </Reveal>

                        <Reveal delay={0.26} className="contact-form">
                            <form onSubmit={handleSubmitToWhatsApp}>
                                <Reveal delay={0.28} className="contact-form__group">
                                    <label htmlFor="name" className="contact-form__label">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="contact-form__input"
                                        placeholder="Masukkan nama lengkap"
                                        required
                                    />
                                </Reveal>

                                <Reveal delay={0.36} className="contact-form__group">
                                    <label htmlFor="email" className="contact-form__label">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="contact-form__input"
                                        placeholder="Masukkan alamat email"
                                        required
                                    />
                                </Reveal>

                                <Reveal delay={0.4} className="contact-form__group">
                                    <label htmlFor="subject" className="contact-form__label">
                                        Subjek
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        className="contact-form__input"
                                        placeholder="Contoh: Permintaan kerja sama wood pellet"
                                        required
                                    />
                                </Reveal>

                                <Reveal delay={0.44} className="contact-form__group">
                                    <label htmlFor="message" className="contact-form__label">
                                        Pesan
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="contact-form__textarea"
                                        placeholder="Tulis pesan atau kebutuhan Anda"
                                        rows={6}
                                        required
                                    />
                                </Reveal>

                                <Reveal delay={0.48}>
                                    <button type="submit" className="contact-form__button">
                                        <Send className="app-button-icon" aria-hidden="true" />
                                        <span className="app-button-label">Kirim Pesan</span>
                                    </button>
                                </Reveal>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section className="contact-offer-section" aria-label="Minta penawaran">
                <div className="contact-offer-shell">
                    <div className="contact-offer-copy">
                        <Reveal delay={0.1}>
                            <h2 className="contact-offer-title">Minta Penawaran</h2>
                        </Reveal>
                        <Reveal delay={0.18}>
                            <p className="contact-offer-description">
                                Tertarik dengan produk wood pellet kami? Kirimkan permintaan dan pertanyaan Anda melalui email
                                kami di info@best-pellet.com dan tim kami akan segera merespons dengan penawaran harga terbaik
                                sesuai kebutuhan bisnis Anda.
                            </p>
                        </Reveal>
                    </div>
                    <div className="contact-offer-actions">
                        <Reveal delay={0.26}>
                            <a
                                href="mailto:info@best-pellet.com"
                                className="contact-offer-button"
                            >
                                <Mail className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Kirim Email Penawaran</span>
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

export default Contact;
