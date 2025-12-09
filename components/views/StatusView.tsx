import React, { useState } from 'react';
import { WORK_EXPERIENCE } from '../../data';

export const StatusView: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(WORK_EXPERIENCE[0]);

  if (!selectedExperience) {
    return <div className="p-8 font-tech text-black">No experience data available.</div>;
  }

  return (
    <div className="flex flex-col h-full w-full animate-fadeIn">
      
      {/* Nier Header */}
      <div className="flex items-baseline gap-2 md:gap-4 mb-4 select-none flex-shrink-0">
        <div className="relative">
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark/20 absolute top-0 left-0 translate-x-2 translate-y-2 tracking-[0.1em]">
            EXPERIENCE
          </h1>
          <h1 className="text-2xl md:text-4xl font-tech font-bold text-nier-dark relative z-10 tracking-[0.1em]">
            EXPERIENCE
          </h1>
        </div>
        <span className="text-sm md:text-lg font-tech text-nier-dark/70 tracking-widest uppercase -ml-1">
          - Career Log
        </span>
      </div>
      
      <div className="flex flex-col lg:flex-row h-full gap-8 flex-1 min-h-0 overflow-hidden">
        
        {/* Left Column: Experience List */}
        <div className="w-full lg:w-[40%] flex flex-col border-r border-nier-dark/20 pr-0 lg:pr-6 overflow-y-auto custom-scrollbar">
           
           <div className="space-y-1 mt-2">
             {WORK_EXPERIENCE.map((exp, index) => {
               const isSelected = selectedExperience.id === exp.id;
               const isCurrent = index === 0; 
               const statusIcon = isCurrent ? '▶' : '✓';

               return (
                 <button 
                    key={exp.id} 
                    onClick={() => setSelectedExperience(exp)}
                    className={`
                      w-full group relative text-left p-3 border border-transparent transition-all flex items-center gap-3
                      ${isSelected 
                        ? 'bg-nier-dark text-nier-beige' 
                        : 'hover:bg-nier-dark hover:text-nier-beige bg-nier-dark/5 text-black'}
                    `}
                 >
                    {/* Status Box */}
                    <div className={`w-4 h-4 border flex items-center justify-center ${isSelected ? 'border-nier-beige text-nier-beige' : 'border-nier-dark text-nier-dark group-hover:text-nier-beige group-hover:border-nier-beige'}`}>
                       <span className="text-[10px] font-bold">{statusIcon}</span>
                    </div>
                    
                    <div className="flex-1">
                       <div className={`font-tech text-lg uppercase tracking-wider font-bold ${isSelected ? 'text-nier-beige' : 'text-black group-hover:text-nier-beige'}`}>
                          {exp.role}
                       </div>
                    </div>
                 </button>
               );
             })}
           </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex-1 flex flex-col bg-nier-beige-dim/20 p-6 border border-nier-dark/10 shadow-inner overflow-y-auto custom-scrollbar">
           {/* Header */}
           <div className="flex items-center gap-2 mb-6 border-b border-nier-dark/20 pb-2">
              <div className="w-3 h-3 bg-nier-dark"></div>
              <h3 className="text-xl font-tech text-black font-bold uppercase tracking-widest">
                {selectedExperience.company}
              </h3>
           </div>
           
           <div className="space-y-6">
              <div>
                 <div className="text-xs text-black font-bold uppercase tracking-widest mb-1 opacity-70">Client</div>
                 <div className="font-tech text-lg text-black font-semibold">{selectedExperience.company}</div>
              </div>

              <div>
                 <div className="text-xs text-black font-bold uppercase tracking-widest mb-1 opacity-70">Objective</div>
                 <p className="font-tech text-xl text-black font-medium leading-relaxed">
                   {selectedExperience.description}
                 </p>
              </div>

              {selectedExperience.skills && (
                <div>
                   <div className="text-xs text-black font-bold uppercase tracking-widest mb-1 opacity-70">Technologies</div>
                   <div className="flex flex-wrap gap-2">
                      {selectedExperience.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-nier-dark text-nier-beige text-xs font-tech font-bold uppercase tracking-wider">
                          {skill}
                        </span>
                      ))}
                   </div>
                </div>
              )}

              <div className="p-4 bg-nier-beige border border-nier-dark/10 mt-auto">
                 <div className="text-sm font-tech text-black font-medium italic">
                    "Successfully automated key business processes, resulting in improved operational efficiency. The client was pleased with the new inventory system."
                 </div>
              </div>
           </div>
           
        </div>
      </div>
    </div>
  );
};