import { ArrowRight, ChevronDown } from 'lucide-react';
import SocialLinks from '../../../components/ui/SocialLinks';
import { hero, profile } from '../../../data/profile';
import './Hero.css';

// Ganti public/img/foto-hero.webp dengan foto sendiri (500×600, latar transparan).
const HERO_PHOTO = { src: '/img/foto-hero.webp', width: 500, height: 600 };

export default function Hero() {
  return (
    <section id="beranda" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner shell">
        <div className="hero__content">
          <span className="hero__rule" aria-hidden="true" />
          <h1 id="hero-title" className="hero__title">
            {hero.greeting}
            <br />
            {hero.title}
          </h1>
          <p className="hero__desc">{hero.desc}</p>
          <a className="circle-btn circle-btn--accent hero__down" href="#tentang" aria-label="Gulir ke bagian Tentang">
            <ChevronDown size={24} aria-hidden="true" />
          </a>
        </div>

        <div className="hero__media">
          <img
            src={HERO_PHOTO.src}
            width={HERO_PHOTO.width}
            height={HERO_PHOTO.height}
            alt={`Foto ${profile.fullName}`}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <aside className="hero__aside" aria-label="Ringkasan">
          <div className="hero__block">
            <h2 className="hero__label">Tentang saya</h2>
            <p className="hero__text">{hero.about}</p>
            <a className="link-arrow" href="#tentang">
              Selengkapnya <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__block">
            <h2 className="hero__label">Karya saya</h2>
            <p className="hero__text">{hero.work}</p>
            <a className="link-arrow" href="#proyek">
              Lihat proyek <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__block hero__block--follow">
            <h2 className="hero__label">Ikuti saya</h2>
            <SocialLinks className="hero__social" />
          </div>
        </aside>
      </div>
    </section>
  );
}
