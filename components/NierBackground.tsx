import React from 'react';

export const NierBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Tactical Grid Mesh Texture across whole page */}
      <div className="absolute inset-0 opacity-[0.055] mesh" />

      {/* 2. Vector Orbital Arcs & Technical Guidelines (Matching NieR:Automata UI) */}
      <svg
        className="absolute inset-0 w-full h-full text-nier-darker opacity-[0.075]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="nier-coord-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 6"
            />
            {/* Coordinate crosshair at intersections */}
            <path d="M 0 0 L 4 0 M 0 0 L 0 4 M 120 0 L 116 0 M 0 120 L 0 116" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>

        {/* Global coordinate grid */}
        <rect width="100%" height="100%" fill="url(#nier-coord-grid)" />

        {/* Large Concentric Orbital Arcs */}
        <g stroke="currentColor" fill="none" strokeWidth="0.75">
          {/* Primary Top-Left / Center Arc Group */}
          <ellipse cx="20%" cy="15%" rx="35vw" ry="40vh" strokeDasharray="6 3 2 3" opacity="0.6" />
          <ellipse cx="20%" cy="15%" rx="42vw" ry="48vh" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="20%" cy="15%" rx="48vw" ry="55vh" strokeDasharray="12 6" opacity="0.5" />

          {/* Secondary Intersecting Right-Side Arcs */}
          <ellipse cx="85%" cy="50%" rx="45vw" ry="50vh" strokeWidth="0.75" opacity="0.7" />
          <ellipse cx="85%" cy="50%" rx="52vw" ry="58vh" strokeDasharray="4 4" opacity="0.5" />
          <ellipse cx="85%" cy="50%" rx="60vw" ry="65vh" strokeWidth="0.5" opacity="0.3" />

          {/* Bottom Left Supporting Arc */}
          <ellipse cx="10%" cy="85%" rx="30vw" ry="35vh" strokeDasharray="8 4" opacity="0.5" />
        </g>

        {/* 45-Degree Technical Diagonal Ray Lines */}
        <g stroke="currentColor" fill="none" strokeWidth="0.75" opacity="0.6">
          <line x1="15%" y1="0%" x2="75%" y2="100%" strokeDasharray="12 8 4 8" />
          <line x1="18%" y1="0%" x2="78%" y2="100%" strokeWidth="0.5" />
          <line x1="60%" y1="0%" x2="100%" y2="65%" strokeDasharray="6 4" />
          <line x1="0%" y1="40%" x2="45%" y2="100%" strokeDasharray="8 6" />
        </g>

        {/* Measurement Ticks & Calibration Marks */}
        {/* Percent coordinates are invalid inside path data; <line> geometry attributes accept them. */}
        <g stroke="currentColor" fill="none" strokeWidth="1" opacity="0.5">
          <line x1="95%" y1="60" x2="98%" y2="60" />
          <line x1="98%" y1="60" x2="98%" y2="100" />
          <line x1="2%" y1="85%" x2="2%" y2="90%" />
          <line x1="2%" y1="90%" x2="5%" y2="90%" />
        </g>
      </svg>

      {/* Subtle Terminal Watermark Stamps */}
      <div className="absolute top-20 right-6 font-tech text-[10px] tracking-[0.25em] text-nier-darker/20 uppercase select-none pointer-events-none hidden sm:block">
        SYS.VER // 1.0.4 [AUTO] · YORHA TERMINAL
      </div>
      <div className="absolute bottom-24 left-6 font-tech text-[10px] tracking-[0.25em] text-nier-darker/20 uppercase select-none pointer-events-none hidden sm:block">
        LOC: 35.9940° N, 78.8986° W · DURHAM_NC
      </div>
    </div>
  );
};
