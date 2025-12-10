import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../../data';
import { Briefcase } from 'lucide-react';

export const StatusView: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(WORK_EXPERIENCE[0]);

  if (!selectedExperience) {
    return <div className="p-8 font-tech text-black">No experience data available.</div>;
  }

  return (
    <div className="flex flex-col h-full w-full animate-fadeIn">

      {/* Nier Header */}
      <div className="flex items-baseline gap-2 md:gap-4 mb-6 select-none flex-shrink-0">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark/10 absolute top-0 left-0 translate-x-1 translate-y-1 tracking-[0.1em]">
            EXPERIENCE
          </h1>
          <h1 className="text-4xl md:text-5xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
            EXPERIENCE
          </h1>
        </div>
        <span className="text-xl md:text-2xl font-tech text-nier-dark/70 tracking-widest uppercase -ml-2">
          - Career Log
        </span>
      </div>

      <div className="flex flex-col lg:flex-row h-full gap-8 flex-1 min-h-0 overflow-hidden">

        {/* Left Column: Experience List */}
        <div className="w-full lg:w-[40%] flex flex-col border border-nier-dark/20 bg-nier-beige-dim h-full overflow-hidden">
          {/* Header for list - Flush */}
          <div className="flex items-center justify-between bg-nier-dark text-nier-beige px-3 py-1 flex-shrink-0">
            <span className="text-sm md:text-base font-tech font-bold uppercase tracking-widest">
              CAREER HISTORY
            </span>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-1">
            {WORK_EXPERIENCE.map((exp, index) => {
              const isSelected = selectedExperience.id === exp.id;

              return (
                <div key={exp.id} className="relative group">
                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className={`
                        w-full group relative text-left py-2 px-3 border-b border-nier-dark/10 transition-all flex items-center gap-3
                        ${isSelected
                        ? 'bg-nier-dark/10 text-nier-dark'
                        : 'hover:bg-nier-dark/10 text-nier-dark bg-nier-beige/50'}
                      `}
                  >
                    <Briefcase size={16} strokeWidth={2} className='text-nier-dark opacity-70' />

                    <div className="flex-1">
                      <div className="font-tech text-lg uppercase tracking-wider font-bold truncate text-nier-dark">
                        {exp.role}
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-1 flex flex-col bg-nier-beige-dim border border-nier-dark/10 overflow-hidden h-full">
          {/* Title Bar - Touches Edges */}
          <div className="w-full bg-nier-dark py-2 px-4 shadow-sm flex justify-between items-center z-10 flex-shrink-0">
            <h3 className="text-2xl font-tech text-nier-beige font-bold uppercase tracking-[0.15em]">
              {selectedExperience.company}
            </h3>
            <div className="text-nier-beige/50 text-xs font-tech tracking-widest uppercase">
              {selectedExperience.period}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
            <div className="flex flex-col xl:flex-row gap-6 min-h-full">
              {/* Main Content */}
              <div className="flex-1 space-y-6">
                <div className="bg-nier-dark/5 border border-nier-dark/20 p-6 relative nier-header-grid min-h-[160px]">
                  {/* Decorative Corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-nier-dark"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-nier-dark"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-nier-dark"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-nier-dark"></div>

                  <div className="text-sm text-nier-dark/60 font-bold uppercase tracking-widest mb-3 border-b border-nier-dark/20 pb-1">Operational Objective</div>
                  <p className="font-tech text-xl text-nier-dark font-medium leading-relaxed">
                    {selectedExperience.description}
                  </p>
                </div>

                {/* Achievements Section */}
                {selectedExperience.achievements && selectedExperience.achievements.length > 0 && (
                  <div className="mt-6">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="h-px bg-nier-dark/20 flex-1"></div>
                        <span className="text-sm font-bold uppercase tracking-widest text-nier-dark/70">Mission Records</span>
                        <div className="h-px bg-nier-dark/20 flex-1"></div>
                     </div>
                     <ul className="space-y-3">
                        {selectedExperience.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-nier-dark/90 items-start">
                             <div className="mt-1.5 w-1.5 h-1.5 bg-nier-dark rotate-45 flex-shrink-0 opacity-60"></div>
                             <span className="font-tech text-base leading-snug">{achievement}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
                )}
              </div>

              {/* Sidebar Stats */}
              <div className="w-full xl:w-72 bg-nier-beige border-t-4 border-nier-dark/10 p-4 font-tech text-nier-dark flex flex-col justify-between">
                <div>
                  <div className="text-xl font-bold border-b border-nier-dark/30 pb-2 mb-4">
                    Parameters
                  </div>

                  <div className="space-y-3 text-base">
                    <div className="flex justify-between items-center">
                      <span className="uppercase tracking-wider opacity-70 text-sm">Role</span>
                      <span className="font-bold text-right max-w-[150px] truncate">{selectedExperience.role}</span>
                    </div>
                    {selectedExperience.location && (
                      <div className="flex justify-between items-center">
                        <span className="uppercase tracking-wider opacity-70 text-sm">Location</span>
                        <span className="font-bold text-right max-w-[150px] truncate">{selectedExperience.location}</span>
                      </div>
                    )}
                     {selectedExperience.type && (
                      <div className="flex justify-between items-center">
                        <span className="uppercase tracking-wider opacity-70 text-sm">Type</span>
                        <span className="font-bold text-right max-w-[150px] truncate">{selectedExperience.type}</span>
                      </div>
                    )}
                    
                    <div className="mt-6 pt-3 border-t border-dotted border-nier-dark/30">
                      <span className="uppercase tracking-wider opacity-70 block mb-2 text-sm">Capabilities</span>
                      <div className="flex flex-wrap gap-1.5 justify-end">
                        {selectedExperience.skills && selectedExperience.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 border border-nier-dark/20 text-xs uppercase font-bold text-nier-dark/90 bg-nier-dark/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 text-center text-sm opacity-50 tracking-[0.2em] uppercase">
                  Data Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};