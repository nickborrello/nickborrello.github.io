import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';
import { Section } from './Section';
import { CornerTicks } from './CornerTicks';
import { BaystatePipeline } from './diagrams/BaystatePipeline';
import { ShopSiteMcpDiagram } from './diagrams/ShopSiteMcpDiagram';

const FEATURED = PROJECTS.filter((p) => p.featured);
const ALSO_BUILT = PROJECTS.filter((p) => !p.featured);

const CaseVisual: React.FC<{ project: ProjectItem }> = ({ project }) => {
  if (project.id === 'p-baystate') {
    return <BaystatePipeline />;
  }
  if (project.id === 'p-shopsite') {
    return <ShopSiteMcpDiagram />;
  }
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `${project.title} screenshot`}
        width={1440}
        height={900}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    );
  }
  return null;
};

const ProjectCaseStudy: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const flip = index % 2 === 1;

  return (
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Visual */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <div className="relative border border-nier-dark/20 bg-nier-beige-dim/40 p-1.5 sm:p-2">
          <CornerTicks />
          <div className="aspect-[16/10] bg-nier-beige overflow-hidden border border-nier-dark/10">
            <CaseVisual project={project} />
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <p className="font-tech font-semibold tracking-[0.22em] text-[11px] text-accent uppercase">
          Case 0{index + 1}
        </p>
        <h3 className="mt-2 font-tech font-bold text-3xl sm:text-4xl tracking-[0.01em] text-nier-darker">
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-nier-dark/90">{project.summary}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-5 space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
                <span aria-hidden="true" className="mt-[7px] w-1.5 h-1.5 bg-accent rotate-45 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 border border-nier-dark/20 text-[11px] font-tech font-semibold tracking-[0.08em] uppercase text-nier-dark"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-tech font-bold tracking-[0.16em] text-sm uppercase text-accent hover:text-nier-darker transition-colors duration-150"
            >
              Live demo
              <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-tech font-bold tracking-[0.16em] text-sm uppercase text-nier-darker hover:text-accent transition-colors duration-150"
            >
              <Github size={15} strokeWidth={2} aria-hidden="true" />
              Repository
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const FeaturedWork: React.FC = () => {
  return (
    <Section
      id="work"
      index="01"
      label="Work"
      heading="Featured systems"
      intro="Production AI pipelines, agentic workspaces, and autonomous tooling."
    >
      <div className="space-y-16 sm:space-y-24">
        {FEATURED.map((project, i) => (
          <ProjectCaseStudy key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Secondary work list */}
      {ALSO_BUILT.length > 0 && (
        <div className="mt-20 sm:mt-28">
          <div className="flex items-center gap-4">
            <span className="font-tech font-semibold tracking-[0.22em] text-[11px] text-nier-dark uppercase whitespace-nowrap">
              Other projects
            </span>
            <span aria-hidden="true" className="h-px flex-1 bg-nier-dark/15" />
          </div>
          <ul className="mt-5 divide-y divide-nier-dark/10 border-y border-nier-dark/15">
            {ALSO_BUILT.map((p) => (
              <li key={p.id} className="py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                <div className="sm:w-60 sm:flex-shrink-0 flex items-center gap-2">
                  <span className="font-tech font-bold text-lg tracking-[0.02em] text-nier-darker">
                    {p.title}
                  </span>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nier-dark/60 hover:text-accent transition-colors"
                      aria-label={`${p.title} repository`}
                    >
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </a>
                  )}
                </div>
                <span className="text-sm text-nier-dark/90 flex-1">{p.summary}</span>
                <span className="font-tech font-semibold tracking-[0.1em] text-[10px] uppercase text-nier-dark/80 sm:w-56 sm:text-right sm:flex-shrink-0">
                  {p.tech.slice(0, 3).join(' · ')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
};
