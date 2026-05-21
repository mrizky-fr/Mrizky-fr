import React, { useEffect, useState } from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './Gallery.css';

type GalleryItem = {
    image: string;
    title: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Produk Wood Pellet',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Bahan Baku Terpilih',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Kualitas Terstandar',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Pasokan Industri',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Energi Biomassa',
    },
    {
        image: 'https://i.ibb.co.com/qYRHs669/high-quality-professional-product-photography-of-fish-feed-pellets-a-heap-of.png',
        title: 'Mitra Berkelanjutan',
    },
];

const Gallery: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

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

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setIsLightboxOpen(true);
    };

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
                            <button
                                key={`${item.title}-${index}`}
                                type="button"
                                className="gallery-card scroll-reveal opacity-0"
                                data-reveal-delay={180 + index * 80}
                                onClick={() => openLightbox(index)}
                                aria-label={`Lihat gambar ${item.title}`}
                            >
                                <div className="gallery-card__image-wrap">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="gallery-card__image"
                                    />
                                </div>
                            </button>
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
                            href="/contact"
                            className="gallery-cta-button gallery-cta-button--contact scroll-reveal opacity-0"
                            data-reveal-delay="180"
                        >
                            <PhoneCall className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Contact</span>
                        </a>

                        <a
                            href="/about"
                            className="gallery-cta-button gallery-cta-button--profile scroll-reveal opacity-0"
                            data-reveal-delay="260"
                        >
                            <FileText className="app-button-icon" aria-hidden="true" />
                            <span className="app-button-label">Company Profile</span>
                        </a>
                    </div>
                </div>
            </section>

            <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                index={activeIndex}
                slides={GALLERY_ITEMS.map((item) => ({ src: item.image, alt: item.title }))}
            />

            <PublicFooter />
        </div>
    );
};

export default Gallery;
