
import React from 'react';
import { Skill } from '../types';
import { Database, Code, Cpu } from 'lucide-react';
import BookLayout from './BookLayout';

interface HuntersNotesProps {
  onBack: () => void;
  skills: Skill[];
}

const SkillRow: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-6 group">
    <div className="flex justify-between items-end mb-1">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-[#2a2824] border border-[#8c8574] flex items-center justify-center shadow-sm">
            {skill.type === 'FRONTEND' && <Code size={14} className="text-cyan-400"/>}
            {skill.type === 'BACKEND' && <Database size={14} className="text-orange-400"/>}
            {skill.type === 'TOOLS' && <Cpu size={14} className="text-purple-400"/>}
        </div>
        <h4 className="text-[#3e3a32] font-bold text-md tracking-tight">{skill.name}</h4>
      </div>
      <span className="text-xs text-[#b45309] font-bold uppercase tracking-widest">Lv {skill.level}</span>
    </div>
    
    {/* Skill Squares */}
    <div className="flex gap-1 mb-2">
      {[...Array(skill.maxLevel)].map((_, i) => (
        <div 
          key={i} 
          className={`h-3 flex-1 skew-x-[-20deg] border border-[#5c5546]/50 ${i < skill.level ? 'bg-[#eab308] shadow-[0_0_5px_rgba(234,179,8,0.5)]' : 'bg-[#2a2824]/10'}`}
        ></div>
      ))}
    </div>
    
    <p className="text-xs text-[#5c5546] italic pl-8 border-l-2 border-[#8c8574]/30 ml-3">
      {skill.description}
    </p>
  </div>
);

const HuntersNotes: React.FC<HuntersNotesProps> = ({ onBack, skills }) => {
  return (
    <BookLayout
      onBack={onBack}
      leftContent={
        <div className="p-8 border-r border-[#8c8574]/20 h-full relative">
           <div className="absolute top-0 right-0 p-4 opacity-5">
              <Code size={200} className="text-[#3e3a32]"/>
           </div>
           <h3 className="text-2xl font-mh-header text-[#b45309] border-b-2 border-[#8c8574]/50 pb-2 mb-6 flex items-center gap-3">
              <span className="text-4xl text-[#8c8574]">I</span> Frontend Architecture
           </h3>
           <div className="relative z-10">
              {skills.filter(s => s.type === 'FRONTEND').map(skill => <SkillRow key={skill.name} skill={skill} />)}
           </div>
        </div>
      }
      rightContent={
        <div className="p-8 h-full relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Database size={200} className="text-[#3e3a32]"/>
           </div>
           <h3 className="text-2xl font-mh-header text-[#b45309] border-b-2 border-[#8c8574]/50 pb-2 mb-6 flex items-center gap-3">
              <span className="text-4xl text-[#8c8574]">II</span> Backend & Operations
           </h3>
           <div className="relative z-10">
              {skills.filter(s => s.type !== 'FRONTEND').map(skill => <SkillRow key={skill.name} skill={skill} />)}
           </div>
        </div>
      }
    />
  );
};

export default HuntersNotes;
