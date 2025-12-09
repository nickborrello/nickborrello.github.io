import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../data';
import { ProjectItem } from '../../types';

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
      <div className="flex items-baseline gap-2 md:gap-4 mb-4 select-none flex-shrink-0">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark/20 absolute top-0 left-0 translate-x-2 translate-y-2 tracking-[0.1em]">
            PROJECTS
          </h1>
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
            PROJECTS
          </h1>
        </div>
        <span className="text-sm md:text-lg font-tech text-nier-dark/70 tracking-widest uppercase -ml-1">
          - Archives
        </span>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0 overflow-hidden">
        
        {/* Left: Project List */}
        <div className="w-full lg:w-[40%] flex flex-col border-r border-nier-dark/20 pr-0 lg:pr-6 overflow-y-auto custom-scrollbar">
           
           <div className="flex flex-col gap-1 pr-2 mt-2">
              {PROJECTS.map((project) => {
                const isSelected = selectedProject.id === project.id;
                return (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`
                      w-full text-left p-2 flex items-center gap-4 transition-all duration-200 group
                      ${isSelected 
                        ? 'bg-nier-dark text-nier-beige shadow-md' 
                        : 'hover:bg-nier-dark/10 text-nier-dark'}
                    `}
                  >
                    <div className="flex-1 font-tech text-lg uppercase tracking-wide group-hover:indent-2 transition-all font-semibold">
                       {isSelected && <span className="mr-2 text-xs">▶</span>}
                       {project.title}
                    </div>
                    <div className="font-tech text-sm tracking-widest opacity-70">
                       App
                    </div>
                  </button>
                )
              })}
           </div>
        </div>

        {/* Right: Project Details */}
        <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
          
          <div className="flex justify-between items-end border-b-2 border-nier-dark mb-4 pb-1">
             <h2 className="text-3xl font-tech text-black font-bold uppercase tracking-widest">
               {selectedProject.title}
             </h2>
          </div>

          <div className="flex gap-6 mb-6">
             {/* Image Box */}
             <div className="w-48 h-32 bg-nier-dark/10 border border-nier-dark/20 p-2 relative flex-shrink-0">
                 <img 
                   src={selectedProject.imageUrl} 
                   className="w-full h-full object-cover grayscale opacity-80"
                   alt={selectedProject.title} 
                 />
                 <div className="absolute inset-0 bg-nier-beige mix-blend-multiply opacity-50"></div>
             </div>
             
             {/* Stats */}
             <div className="flex-1 font-tech space-y-2 text-black">
                <div className="flex justify-between border-b border-nier-dark/10">
                   <span className="text-sm uppercase tracking-wider font-bold opacity-60">Highlight</span>
                   <span className="font-semibold">{selectedProject.highlight}</span>
                </div>
                <div className="flex justify-between border-b border-nier-dark/10">
                   <span className="text-sm uppercase tracking-wider font-bold opacity-60">Stack</span>
                   <span className="font-semibold">{selectedProject.tech.join(' + ')}</span>
                </div>
             </div>
          </div>
          
          <div className="bg-nier-beige-dim/20 p-4 border border-nier-dark/10 flex-1 relative">
             <div className="absolute top-0 left-0 bg-nier-dark text-nier-beige text-[10px] px-2 py-0.5 font-tech tracking-widest uppercase">
                DESCRIPTION
             </div>
             <p className="mt-4 font-tech text-lg text-black font-medium leading-relaxed text-justify">
                {selectedProject.description}
             </p>

             <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map(t => (
                   <span key={t} className="px-2 py-1 bg-nier-dark/10 border border-nier-dark/20 text-xs font-tech uppercase tracking-widest font-bold text-black">
                      {t}
                   </span>
                ))}
             </div>
             
             <div className="absolute bottom-4 right-4">
               {selectedProject.link && (
                 <a 
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nier-dark text-nier-beige px-6 py-2 font-tech uppercase tracking-widest hover:bg-nier-dark/80 transition-colors font-bold"
                 >
                    View Deployment
                 </a>
               )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};