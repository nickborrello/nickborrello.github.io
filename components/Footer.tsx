import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className="h-10 bg-nier-beige border-t-2 border-nier-dark/20 flex items-center justify-between px-4 sm:px-6 z-50 text-[10px] font-tech tracking-[0.18em] text-nier-dark uppercase nier-header-grid shadow-[0_-1px_2px_rgba(0,0,0,0.05)] select-none">
      <div className="flex items-center gap-4">
        <span className="font-bold tracking-[0.2em]">Nick Borrello</span>
        <span className="hidden md:inline-block text-nier-dark/40">//</span>
        <span className="hidden md:inline-block text-nier-dark/65 font-medium">SYSTEM OPERATIONAL</span>
      </div>
      <div className="flex items-center gap-4 sm:gap-6 opacity-80">
        <div className="hidden sm:flex items-center gap-2 bg-nier-dark/5 px-2 py-0.5 border border-nier-dark/15 text-[9px]">
          <span className="opacity-60 font-bold">NAV:</span>
          <span className="font-bold">[A / D]</span>
          <span className="opacity-50">OR</span>
          <span className="font-bold">[← / →]</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-nier-dark/70 rounded-full animate-pulse"></span>
          <span className="font-bold">CONNECTED</span>
        </div>
        <span className="font-bold">VER: 2.0</span>
      </div>
    </div>
  );
};