import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../data';
import { ProjectItem } from '../../types';
import { Box } from 'lucide-react';

export const InventoryView: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (PROJECTS && PROJECTS.length > 0) {
      setSelectedProject(PROJECTS[0]);
    }
  }, []);

  if (!PROJECTS || PROJECTS.length === 0) {
    return <div className="p-8 font-tech text-black">No projects loaded.</div>;
  }

  if (!selectedProject) {
    return <div className="p-8 font-tech text-black">Loading project data...</div>;
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

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 overflow-hidden">

        {/* Left: Project List */}
        <div className="w-full lg:w-[40%] flex flex-col border border-nier-dark/20 bg-nier-beige-dim h-full overflow-hidden">
          {/* Header for list - Flush */}
          <div className="flex items-center justify-between bg-nier-dark text-nier-beige px-3 py-1 flex-shrink-0">
            <span className="text-sm md:text-base font-tech font-bold uppercase tracking-widest">
              PROJECT LIST
            </span>
          </div>

          <div className="flex flex-col gap-0 pr-1 overflow-y-auto custom-scrollbar flex-1 relative">
            {PROJECTS.map((project) => {
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
                    <div className="flex-1 font-tech text-lg uppercase tracking-wide font-bold truncate">
                      {project.title}
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
          <div className="w-full bg-nier-dark py-2 px-4 shadow-sm flex justify-between items-center flex-shrink-0 z-10">
            <h2 className="text-2xl font-tech text-nier-beige font-bold uppercase tracking-[0.15em]">
              {selectedProject.title}
            </h2>
            <div className="text-nier-beige/50 text-xs font-tech tracking-widest uppercase">
              Level: {selectedProject.tech.length}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="flex flex-col xl:flex-row gap-6 min-h-full">
              {/* Image & Description Block */}
              <div className="flex-1 space-y-6">

                {/* Image Container with Grid Background */}
                {/* Image Container with Grid Background */}
                <div className="w-full aspect-video bg-nier-dark/5 border border-nier-dark/20 p-4 relative nier-header-grid">
                  <div className="w-full h-full border border-nier-dark/10 p-1 bg-nier-beige">
                    {selectedProject.imageUrl ? (
                      <img
                        src={selectedProject.imageUrl}
                        className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                        alt={selectedProject.title}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-nier-dark/20 bg-nier-beige/50">
                        <div className="text-nier-dark/40 font-tech font-bold text-lg uppercase tracking-widest mb-2">
                          No Preview Available
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-nier-dark"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-nier-dark"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-nier-dark"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-nier-dark"></div>
                </div>

                {/* Description Text */}
                <div className="border-t border-nier-dark/20 pt-4">
                  <p className="font-tech text-xl text-nier-dark/90 font-medium leading-relaxed pl-2 border-l-2 border-nier-dark/30">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Status / Stats Block */}
              <div className="w-full xl:w-72 bg-nier-beige border-t-4 border-nier-dark/10 p-4 font-tech text-nier-dark flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold border-b border-nier-dark/30 pb-2 mb-4">
                    Status
                  </div>

                  <div className="space-y-3 text-base">
                    <div className="flex justify-between items-center">
                      <span className="uppercase tracking-wider opacity-70 text-sm">Category</span>
                      <span className="font-bold">Web Application</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="uppercase tracking-wider opacity-70 text-sm">Status</span>
                      <span className="font-bold text-right max-w-[140px] truncate">{selectedProject.status || "Unknown"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="uppercase tracking-wider opacity-70 text-sm">Highlight</span>
                      <span className="font-bold text-right max-w-[140px] truncate">{selectedProject.highlight}</span>
                    </div>
                    
                    {/* Features List */}
                    {selectedProject.features && selectedProject.features.length > 0 && (
                      <div className="mt-6 pt-3 border-t border-dotted border-nier-dark/30">
                        <span className="uppercase tracking-wider opacity-70 block mb-2 text-sm">Key Features</span>
                        <ul className="list-disc list-inside text-sm space-y-1.5 opacity-90 pl-1">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-6 pt-3 border-t border-dotted border-nier-dark/30">
                      <span className="uppercase tracking-wider opacity-70 block mb-2 text-sm">Technologies</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-2 py-1 border border-nier-dark/20 text-xs uppercase font-bold text-nier-dark/90 bg-nier-dark/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="space-y-3">
                    {selectedProject.link && selectedProject.link !== '#' ? (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 border border-nier-dark text-nier-dark hover:bg-nier-dark hover:text-nier-beige transition-colors uppercase tracking-widest font-bold text-sm"
                      >
                        View Live Demo
                      </a>
                    ) : null}
                    
                    {selectedProject.repoUrl ? (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center py-3 border border-nier-dark/50 text-nier-dark/70 hover:bg-nier-dark/10 transition-colors uppercase tracking-widest font-bold text-sm"
                      >
                        Source Code
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-right text-xs font-tech text-nier-dark/40 tracking-widest border-t border-nier-dark/10 pt-2">
              Project ID: {selectedProject.id} // {(new Date()).getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};