import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';
import { Section } from './Section';
import { ShopSiteMcpDiagram } from './diagrams/ShopSiteMcpDiagram';
import { NierCornerFrame } from './NierDecorations';

const FEATURED = PROJECTS.filter((p) => p.featured);
const ALSO_BUILT = PROJECTS.filter((p) => !p.featured);

const DIAGRAM_ASPECTS: Record<string, string> = {
  'p-shopsite': 'aspect-[76/30]', // viewBox 760×300
};

const CaseVisual: React.FC<{ project: ProjectItem }> = ({ project }) => {
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
    <article className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* Visual with NieR Corner Brackets & Double-Line Frame */}
      <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
        <NierCornerFrame bracketSize={8} className="p-1 sm:p-1.5 bg-nier-beige-dim/40 border border-nier-dark/25 shadow-sm">
          {/* Top Frame Label */}
          <div className="flex items-center justify-between px-2 py-1 border-b border-nier-dark/15 text-[10px] font-tech font-bold tracking-[0.16em] text-nier-dark/90 uppercase">
            <span>[ SYSTEM_SPEC // 0{index + 1} ]</span>
            <span>STATUS: VERIFIED</span>
          </div>

          <div
            className={`${DIAGRAM_ASPECTS[project.id] ?? 'aspect-[16/10]'} bg-nier-beige overflow-hidden border border-nier-dark/15 relative`}
          >
            <CaseVisual project={project} />
          </div>
        </NierCornerFrame>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent" aria-hidden="true" />
          <span className="font-tech font-bold tracking-[0.18em] text-xs text-accent uppercase">
            FEATURED PROJECT // 0{index + 1}
          </span>
        </div>

        <h3 className="mt-1.5 font-tech font-bold text-2xl sm:text-3xl tracking-[0.01em] text-nier-darker nier-shadow-sm">
          {project.title}
        </h3>

        <p className="mt-2.5 text-[15px] leading-relaxed text-nier-dark/90">{project.summary}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-nier-dark/90 items-start">
                <span aria-hidden="true" className="mt-[5px] text-accent font-bold text-xs flex-shrink-0">
                  ◆
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Tags with NieR Styling */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 px-2 py-0.5 border border-nier-dark/30 bg-nier-beige-dim/40 text-[11px] font-tech font-semibold tracking-[0.06em] uppercase text-nier-darker"
            >
              <span aria-hidden="true" className="text-[8px] text-nier-dark/50">■</span>
              <span>{t}</span>
            </span>
          ))}
        </div>

        {/* Action CTAs with NieR styling */}
        <div className="mt-6 flex items-center gap-3.5">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 bg-nier-darker text-nier-beige px-4 py-2 font-tech font-bold tracking-[0.14em] text-xs uppercase hover:bg-nier-panel transition-all duration-150 border border-nier-darker shadow-sm"
            >
              <span className="text-accent group-hover:translate-x-0.5 transition-transform" aria-hidden="true">◆</span>
              <span>Live Demo</span>
              <ArrowUpRight size={14} strokeWidth={2.5} aria-hidden="true" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 bg-nier-beige-dim/30 border border-nier-dark/35 px-4 py-2 font-tech font-bold tracking-[0.14em] text-xs uppercase text-nier-darker hover:bg-nier-darker hover:text-nier-beige transition-all duration-150"
            >
              <Github size={14} strokeWidth={2} aria-hidden="true" />
              <span>Repository</span>
              <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" className="text-nier-dark/50 group-hover:text-nier-beige transition-colors" />
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
      label="Work"
      heading="Featured systems"
      intro="Production AI pipelines, agentic workspaces, and autonomous tooling."
    >
      <div className="space-y-16 sm:space-y-20">
        {FEATURED.map((project, i) => (
          <ProjectCaseStudy key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Secondary work list with NieR Styling */}
      {ALSO_BUILT.length > 0 && (
        <div className="mt-16 sm:mt-24 pt-10 border-t border-nier-dark/20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-nier-darker" aria-hidden="true" />
            <p className="font-tech font-bold tracking-[0.2em] text-xs text-nier-darker uppercase">
              [ ARCHIVE // OTHER SYSTEMS & RESEARCH ]
            </p>
          </div>

          <ul className="mt-5 divide-y divide-nier-dark/15 border-y border-nier-dark/15">
            {ALSO_BUILT.map((p) => (
              <li
                key={p.id}
                className="group py-4 px-2 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 hover:bg-nier-beige-dim/40 transition-colors"
              >
                <div className="sm:w-56 sm:flex-shrink-0 flex items-center gap-2">
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-xs" aria-hidden="true">
                    ◆
                  </span>
                  <span className="font-tech font-bold text-base tracking-[0.02em] text-nier-darker">
                    {p.title}
                  </span>
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nier-dark hover:text-accent transition-colors"
                      aria-label={`${p.title} repository`}
                    >
                      <ArrowUpRight size={13} strokeWidth={2} />
                    </a>
                  )}
                </div>
                <span className="text-sm text-nier-dark/90 flex-1">{p.summary}</span>
                <span className="font-tech font-semibold tracking-[0.08em] text-[11px] uppercase text-nier-dark/90 sm:w-48 sm:text-right sm:flex-shrink-0">
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
