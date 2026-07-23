import React, { useState, useEffect, useMemo } from 'react';
import { PROJECTS } from '../../data';
import { ProjectItem } from '../../types';
import { Box } from 'lucide-react';

export const InventoryView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const sortedProjects = useMemo(() => [...PROJECTS].sort((a, b) => {
    const getDateValue = (date: string) => {
      if (date === "Present") return 999999; // high value for ongoing projects
      const [month, year] = date.split('-').map(Number);
      return year * 100 + month;
    };

    if (a.featured !== b.featured) {
      return Number(b.featured) - Number(a.featured);
    }

    const aEnd = getDateValue(a.endDate || a.startDate || '');
    const bEnd = getDateValue(b.endDate || b.startDate || '');
    return bEnd - aEnd;
  }), []);

  useEffect(() => {
    if (sortedProjects && sortedProjects.length > 0) {
      setSelectedProject(sortedProjects[0]);
    }
  }, [sortedProjects]);

  if (!sortedProjects || sortedProjects.length === 0) {
    return <div className="p-8 font-tech text-nier-dark">No projects loaded.</div>;
  }

  if (!selectedProject) {
    return <div className="p-8 font-tech text-nier-dark">Loading project data...</div>;
  }

  return (
    <div className="flex flex-col h-full w-full animate-fadeIn">

      {/* Nier Header */}
      <div className="flex items-baseline gap-2 md:gap-4 mb-6 select-none flex-shrink-0">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark/10 absolute top-0 left-0 translate-x-1 translate-y-1 tracking-[0.1em]">
            PROJECTS
          </h1>
          <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
            PROJECTS
          </h1>
        </div>
        <span className="text-xl md:text-2xl font-tech text-nier-dark/70 tracking-widest uppercase -ml-2">
          - Portfolio
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 lg:h-full overflow-y-auto lg:overflow-hidden">

        {/* Left: Project List */}
        <div className="w-full lg:w-[40%] flex flex-col border border-nier-dark/20 bg-nier-beige-dim max-h-64 lg:max-h-none lg:h-full flex-shrink-0 overflow-hidden">
          {/* Header for list - Flush */}
          <div className="flex items-center justify-between bg-nier-dark text-nier-beige px-3 py-1 flex-shrink-0">
            <span className="text-sm md:text-base font-tech font-bold uppercase tracking-widest">
              PROJECT LIST
            </span>
          </div>

          <div className="flex flex-col gap-0 pr-1 overflow-y-auto custom-scrollbar flex-1 relative">
            {sortedProjects.map((project) => {
              const isSelected = selectedProject.id === project.id;
              return (
                <div key={project.id} className="relative group">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`
                        w-full text-left py-2 px-3 flex items-center gap-4 transition-all duration-0 border-b border-nier-dark/10
                        ${isSelected
                        ? 'bg-nier-dark/10 text-nier-dark'
                        : 'hover:bg-nier-dark/10 text-nier-dark bg-nier-beige/50'}
                      `}
                  >
                    <Box size={16} strokeWidth={2} className='text-nier-dark opacity-70' />
                    <div className="flex-1 min-w-0">
                      <div className="font-tech text-lg uppercase tracking-wide font-bold truncate">
                        {project.title}
                      </div>
                      {project.featured ? (
                        <div className="mt-1 text-[10px] font-tech uppercase tracking-[0.2em] text-nier-dark/60">
                          Featured Proof
                        </div>
                      ) : null}
                    </div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right: Project Details (Card Style) */}
        <div className="flex-1 flex flex-col bg-nier-beige-dim border border-nier-dark/10 overflow-hidden h-full">

          {/* Title Bar - Touches Edges */}
          <div className="w-full bg-nier-dark py-3 px-5 shadow-md flex justify-between items-center flex-shrink-0 z-10 border-b-2 border-nier-beige/10">
            <h2 className="text-3xl font-tech text-nier-beige font-bold uppercase tracking-[0.15em] drop-shadow-md">
              {selectedProject.title}
            </h2>
            <div className="flex items-center gap-8">
              {selectedProject.startDate && (
                <div className="flex flex-col items-end leading-none">
                  <span className="text-[10px] text-nier-beige/60 uppercase tracking-widest mb-1 font-bold">Release</span>
                  <span className="text-xl font-tech font-bold text-nier-beige tracking-wider">
                    {selectedProject.endDate === "Present"
                      ? `${selectedProject.startDate} - Present`
                      : selectedProject.startDate === selectedProject.endDate
                        ? selectedProject.startDate
                        : `${selectedProject.startDate} - ${selectedProject.endDate}`}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Action Bar - Quick Access */}
          <div className="bg-nier-beige border-b border-nier-dark/10 px-6 py-3 flex flex-wrap gap-4 items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-nier-dark/50 font-bold mb-0.5">Category</span>
                <span className="text-sm font-tech font-bold text-nier-dark uppercase tracking-wider">Web Application</span>
              </div>
              <div className="w-px h-6 bg-nier-dark/10"></div>
              <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-nier-dark/50 font-bold mb-0.5">Status</span>
                <span className="text-sm font-tech font-bold text-nier-dark uppercase tracking-wider">{selectedProject.status || "Unknown"}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {selectedProject.link && selectedProject.link !== '#' && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-nier-dark text-nier-dark hover:bg-nier-dark hover:text-nier-beige transition-all uppercase tracking-widest font-bold text-xs flex items-center gap-2"
                >
                  Live Demo
                </a>
              )}
              {selectedProject.repoUrl && (
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-nier-dark/30 text-nier-dark/70 hover:bg-nier-dark/10 transition-all uppercase tracking-widest font-bold text-xs"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
            {/* Description Section */}
            <div className="max-w-4xl">
              <p className="font-tech text-xl text-nier-dark/90 font-medium leading-relaxed pl-4 border-l-4 border-nier-dark/20">
                {selectedProject.description}
              </p>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-nier-dark/10">
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-nier-dark/50 font-bold">Priority</span>
                <span className="block font-tech text-base font-bold text-nier-dark uppercase">
                  {selectedProject.featured ? 'Featured Proof' : 'Archive'}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-nier-dark/50 font-bold">Highlight</span>
                <span className="block font-tech text-base font-bold text-nier-dark uppercase">
                  {selectedProject.highlight}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-nier-dark/50 font-bold">Architecture</span>
                <span className="block font-tech text-base font-bold text-nier-dark uppercase">Modular / Responsive</span>
              </div>
              <div className="space-y-1">
                <span className="block text-[10px] uppercase tracking-widest text-nier-dark/50 font-bold">Revision</span>
                <span className="block font-tech text-base font-bold text-nier-dark uppercase">v1.0.4-build</span>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-12">
              {/* Features List */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="flex-1">
                  <h3 className="text-lg font-bold font-tech uppercase tracking-[0.2em] mb-4 text-nier-dark flex items-center gap-2">
                    <span className="w-8 h-px bg-nier-dark/30"></span>
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="font-tech text-sm text-nier-dark/80 flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-nier-dark/40 rotate-45 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="xl:w-80">
                <h3 className="text-lg font-bold font-tech uppercase tracking-[0.2em] mb-4 text-nier-dark flex items-center gap-2">
                  <span className="w-8 h-px bg-nier-dark/30"></span>
                  Technology
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 border border-nier-dark/20 text-[11px] uppercase font-bold text-nier-dark/90 bg-nier-dark/5 tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 text-right text-[10px] font-tech text-nier-dark/40 tracking-widest border-t border-nier-dark/10 uppercase">
              System ID: {selectedProject.id.slice(0, 8)} // Data Integrity Verified // {(new Date()).getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
