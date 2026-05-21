import React, { useState } from 'react';
import { FileText, PhoneCall } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import Reveal from '../../components/Reveal/Reveal';
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

    const openLightbox = (index: number) => {
        setActiveIndex(index);
        setIsLightboxOpen(true);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <PublicHeader />

            <PageHeader title="Galeri" />

            <Reveal>
            <section id="gallery" className="gallery-section">
                <div className="gallery-shell">
                    <Reveal delay={0.1} className="gallery-heading">
                        <h2 className="gallery-title">Dokumentasi Produk dan Aktivitas Kami</h2>
                        <p className="gallery-description">
                            Lihat beberapa dokumentasi produk wood pellet dan aktivitas kami dalam menghadirkan
                            solusi energi biomassa berkualitas untuk kebutuhan industri.
                        </p>
                    </Reveal>

                    <div className="gallery-grid">
                        {GALLERY_ITEMS.map((item, index) => (
                            <Reveal key={`${item.title}-${index}`} delay={(180 + index * 80) / 1000}>
                                <button
                                    type="button"
                                    className="gallery-card"
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
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            </Reveal>

            <Reveal>
            <section id="contact" className="gallery-cta-section" aria-label="Ajakan kerja sama">
                <div className="gallery-cta-shell">
                    <Reveal delay={0.1}>
                        <h2 className="gallery-cta-title">
                            Tertarik bekerja sama dengan kami
                        </h2>
                    </Reveal>

                    <div className="gallery-cta-actions">
                        <Reveal delay={0.18}>
                            <a
                                href="/contact"
                                className="gallery-cta-button gallery-cta-button--contact"
                            >
                                <PhoneCall className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Contact</span>
                            </a>
                        </Reveal>

                        <Reveal delay={0.26}>
                            <a
                                href="/about"
                                className="gallery-cta-button gallery-cta-button--profile"
                            >
                                <FileText className="app-button-icon" aria-hidden="true" />
                                <span className="app-button-label">Company Profile</span>
                            </a>
                        </Reveal>
                    </div>
                </div>
            </section>
            </Reveal>

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
