import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
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
        icon: Phone,
        label: 'No. HP',
        value: '+62 811-5585-490',
        href: 'tel:+628115585490',
    },
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

    const handleSubmitToWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get('name') || '').trim();
        const phone = String(formData.get('phone') || '').trim();
        const email = String(formData.get('email') || '').trim();
        const subject = String(formData.get('subject') || '').trim();
        const message = String(formData.get('message') || '').trim();

        const text = [
            'Halo PT. Bio Energy Semesta Tama (BEST),',
            '',
            'Saya ingin mengajukan kebutuhan wood pellet:',
            `Nama: ${name || '-'}`,
            `No. HP: ${phone || '-'}`,
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
                        </div>

                        <form
                            className="contact-form scroll-reveal opacity-0"
                            data-reveal-delay="260"
                            onSubmit={handleSubmitToWhatsApp}
                        >
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
                                        required
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
                                        required
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
                                    required
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
                                    required
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
                                    required
                                />
                            </div>

                            <button type="submit" className="contact-form__button">
                                <Send className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Kirim Pesan</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="contact-offer-section scroll-reveal opacity-0" aria-label="Minta penawaran">
                <div className="contact-offer-shell">
                    <div className="contact-offer-copy">
                        <h2 className="contact-offer-title scroll-reveal opacity-0" data-reveal-delay="100">
                            Minta Penawaran
                        </h2>
                        <p className="contact-offer-description scroll-reveal opacity-0" data-reveal-delay="180">
                            Tertarik dengan produk wood pellet kami? Kirimkan permintaan dan pertanyaan Anda melalui email
                            kami di info@best-pellet.com dan tim kami akan segera merespons dengan penawaran harga terbaik
                            sesuai kebutuhan bisnis Anda.
                        </p>
                    </div>
                    <div className="contact-offer-actions">
                        <a
                            href="mailto:info@best-pellet.com"
                            className="contact-offer-button scroll-reveal opacity-0"
                            data-reveal-delay="260"
                        >
                            <Mail className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Kirim Email Penawaran</span>
                        </a>
                    </div>
                </div>
            </section>

            <PublicFooter />
        </div>
    );
};

export default Contact;
