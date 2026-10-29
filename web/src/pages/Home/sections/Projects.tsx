import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../../../components/ui/SectionHeading';
import { type Project, projects } from '../../../data/profile';
import './Projects.css';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card reveal ${project.featured ? 'project-card--featured' : ''}`}>
      <span className="project-card__kind">{project.kind}</span>
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__desc">{project.desc}</p>
      <p className="project-card__stack">{project.stack.join(' · ')}</p>

      {project.links.length > 0 ? (
        <div className="project-card__links">
          {project.links.map((link) => (
            <a
              key={link.href}
              className="link-arrow"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${link.label} ${project.name}`}
            >
              {link.label} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="proyek" className="section section--alt" aria-labelledby="projects-title">
      <div className="shell">
        <div className="reveal">
          <SectionHeading label="Proyek" title="Proyek open source & pribadi" titleId="projects-title" />
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
