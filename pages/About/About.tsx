import React from 'react';
import PublicHeader from '../../components/Header/PublicHeader';
import PublicFooter from '../../components/Footer/PublicFooter';
import PageHeader from '../../components/PageHeader/PageHeader';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <PublicHeader />
      <PageHeader title="Tentang Kami" />

      <section className="about-page__section" aria-label="Profil Bio Energy Semesta Tama">
        <div className="about-page__content">
          <p>
            Bio Energy Semesta Tama merupakan perusahaan yang berdedikasi menghadirkan solusi energi terbarukan
            berkualitas melalui produksi wood pellet. Dengan fokus pada energi biomassa, kami berkomitmen menyediakan
            produk yang efisien, stabil, dan sesuai kebutuhan pelanggan di berbagai sektor industri.
          </p>

          <p>
            Didukung oleh proses produksi yang terkontrol, pemilihan bahan baku yang tepat, serta komitmen terhadap
            kualitas, wood pellet dari Bio Energy Semesta Tama dirancang untuk menjadi pilihan energi alternatif yang
            dapat diandalkan bagi kebutuhan boiler, pemanas, pembangkit biomassa, maupun proses produksi industri.
          </p>

          <p>
            Dengan kualitas unggul, kepedulian terhadap lingkungan, dan layanan kerja sama yang profesional,
            Bio Energy Semesta Tama siap menjadi mitra terpercaya dalam penyediaan wood pellet di Indonesia serta
            mendukung terciptanya masa depan energi yang lebih hijau dan berkelanjutan.
          </p>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};

export default About;
