import SectionHeading from '../../../components/ui/SectionHeading';
import { experiences } from '../../../data/profile';
import './Experience.css';

export default function Experience() {
  return (
    <section id="pengalaman" className="section" aria-labelledby="experience-title">
      <div className="shell">
        <div className="reveal">
          <SectionHeading label="Pengalaman" title="Perjalanan karier" titleId="experience-title" />
        </div>

        <ol className="experience__list">
          {experiences.map((item) => (
            <li key={item.company} className="experience__item reveal">
              <div className="experience__meta">
                <p className="experience__period">{item.period}</p>
                <p className="experience__company">
                  {item.company}
                  {item.note ? <span> ({item.note})</span> : null}
                </p>
              </div>

              <div>
                <h3 className="experience__role">{item.role}</h3>
                <ul className="experience__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
