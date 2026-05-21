import React, { useEffect } from 'react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Gallery.css';

type GalleryItem = {
    image: string;
    title: string;
    description: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Produk Wood Pellet',
        description:
            'Wood pellet berkualitas yang diproduksi untuk mendukung kebutuhan energi biomassa industri.',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Bahan Baku Terpilih',
        description:
            'Pemilihan bahan baku menjadi bagian penting dalam menjaga kualitas dan konsistensi produk.',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Kualitas Terstandar',
        description:
            'Setiap produk diproses dengan kontrol kualitas agar performa pembakaran tetap stabil.',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Pasokan Industri',
        description:
            'Kami mendukung kebutuhan pasokan wood pellet untuk kerja sama industri berkelanjutan.',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Energi Biomassa',
        description:
            'Wood pellet menjadi solusi energi alternatif yang efisien dan ramah lingkungan.',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Mitra Berkelanjutan',
        description:
            'Kami siap menjadi mitra terpercaya dalam penyediaan wood pellet berkualitas.',
    },
];

const Gallery: React.FC = () => {
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

            <PageHeader title="Galeri" />

            <section id="gallery" className="gallery-section scroll-reveal opacity-0">
                <div className="gallery-shell">
                    <div className="gallery-heading scroll-reveal opacity-0" data-reveal-delay="100">
                        <h2 className="gallery-title">Dokumentasi Produk dan Aktivitas Kami</h2>
                        <p className="gallery-description">
                            Lihat beberapa dokumentasi produk wood pellet dan aktivitas kami dalam menghadirkan
                            solusi energi biomassa berkualitas untuk kebutuhan industri.
                        </p>
                    </div>

                    <div className="gallery-grid">
                        {GALLERY_ITEMS.map((item, index) => (
                            <article
                                key={`${item.title}-${index}`}
                                className="gallery-card scroll-reveal opacity-0"
                                data-reveal-delay={180 + index * 80}
                            >
                                <div className="gallery-card__image-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="gallery-card__image"
                                    />
                                </div>

                                <div className="gallery-card__content">
                                    <h3 className="gallery-card__title">{item.title}</h3>
                                    <p className="gallery-card__description">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="gallery-cta-section scroll-reveal opacity-0" aria-label="Ajakan kerja sama">
                <div className="gallery-cta-shell">
                    <h2 className="gallery-cta-title scroll-reveal opacity-0" data-reveal-delay="100">
                        Tertarik bekerja sama dengan kami
                    </h2>

                    <div className="gallery-cta-actions">
                        <a
                            href="#contact"
                            className="gallery-cta-button gallery-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <span>Contact</span>
                        </a>

                        <a
                            href="#gallery"
                            className="gallery-cta-button gallery-cta-button--profile scroll-reveal opacity-0"
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

export default Gallery;