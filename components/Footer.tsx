import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="h-10 bg-[#dad4bb] border-t border-nier-dark/20 flex items-center justify-between px-6 z-50 text-[10px] font-tech tracking-[0.2em] text-nier-dark uppercase nier-header-grid shadow-[0_-1px_2px_rgba(0,0,0,0.05)]">
       <div className="flex gap-4">
          <span className="font-bold">Nick Borrello Portfolio</span>
       </div>
       <div className="flex gap-6 opacity-70">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-nier-dark/50 rounded-full animate-pulse"></span>
            <span>CONNECTED</span>
          </div>
          <span>VER: 2.0</span>
       </div>
    </div>
  );
};