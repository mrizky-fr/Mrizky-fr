import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import SectionHeading from '../../../components/ui/SectionHeading';
import { type Skill, skills, techStack } from '../../../data/profile';
import { useCarousel } from '../../../hooks/useCarousel';
import './Skills.css';

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <article className="skill-card">
      <span className="skill-card__icon" aria-hidden="true">
        <Icon size={22} />
      </span>
      <h3 className="skill-card__title">{skill.title}</h3>
      <p className="skill-card__desc">{skill.desc}</p>
      <ul className="skill-card__tags" aria-label="Teknologi">
        {skill.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}

function TechStack() {
  return (
    <div className="stack reveal">
      <h3 className="stack__label">Stack harian</h3>
      <ul className="stack__list">
        {techStack.map((tech) => (
          <li key={tech.name} className="stack__item">
            <img src={tech.src} width={30} height={30} alt="" loading="lazy" />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { canPrev, canNext, scrollByCard } = useCarousel(trackRef);

  return (
    <section id="keahlian" className="section skills" aria-labelledby="skills-title">
      <div className="shell">
        <div className="skills__head reveal">
          <SectionHeading label="Keahlian" title="Keahlian yang saya kuasai" titleId="skills-title" />
          <div className="skills__controls">
            <button
              type="button"
              className="circle-btn"
              aria-label="Keahlian sebelumnya"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="circle-btn circle-btn--accent"
              aria-label="Keahlian berikutnya"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="skills__track reveal"
          role="region"
          aria-label="Daftar keahlian, geser ke samping"
          tabIndex={0}
        >
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>

        <TechStack />
      </div>
    </section>
  );
}
