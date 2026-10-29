import { ArrowRight } from 'lucide-react';
import SectionHeading from '../../../components/ui/SectionHeading';
import { about, links } from '../../../data/profile';
import WorkedWith from './WorkedWith';
import './About.css';

export default function About() {
  return (
    <section id="tentang" className="section section--alt about" aria-labelledby="about-title">
      <div className="shell">
        <div className="about__grid reveal">
          <div className="about__intro">
            <SectionHeading label="Tentang saya" title={about.title} titleId="about-title" />
            <p className="text-body">{about.intro}</p>
            <a className="link-arrow link-arrow--plain" href={links.github} target="_blank" rel="noreferrer">
              Lihat profil GitHub <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="about__facts">
            <dl className="about__stats">
              {about.stats.map((stat) => (
                <div key={stat.value} className="about__stat">
                  <dt className="visually-hidden">{stat.label.join(' ')}</dt>
                  <dd className="about__stat-value">{stat.value}</dd>
                  <dd className="about__stat-label" aria-hidden="true">
                    {stat.label[0]}
                    <br />
                    {stat.label[1]}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-body">{about.principle}</p>
          </div>
        </div>

        <WorkedWith />
      </div>
    </section>
  );
}
