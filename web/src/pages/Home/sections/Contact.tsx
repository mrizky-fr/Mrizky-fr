import { ArrowRight, Globe } from 'lucide-react';
import { contact, links } from '../../../data/profile';
import './Contact.css';

/** CTA penutup, bentuknya mengikuti CtaSection DealTech. */
export default function Contact() {
  return (
    <section id="kontak" className="contact reveal" aria-labelledby="contact-title">
      <div className="contact__glow" aria-hidden="true" />
      <div className="contact__shell shell">
        <h2 id="contact-title" className="contact__title">
          {contact.title}
        </h2>
        <p className="contact__desc">{contact.desc}</p>
        <div className="contact__actions">
          <a className="btn btn--light btn--sm" href={links.dealtechWebsite} target="_blank" rel="noreferrer">
            <Globe size={14} aria-hidden="true" />
            Hubungi lewat DealTech
          </a>
          <a className="btn btn--ghost btn--sm" href={links.github} target="_blank" rel="noreferrer">
            Lihat GitHub
            <ArrowRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
