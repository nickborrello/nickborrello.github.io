import React, { useId } from 'react';

/**
 * NierBorderBand
 * Renders the iconic NieR: Automata geometric border with repeating
 * dot-triangle clusters (∴ / ▾), micro-ticks, and end square anchors (■).
 */
export const NierBorderBand: React.FC<{
  position?: 'top' | 'bottom';
  className?: string;
  showAnchors?: boolean;
}> = ({ position = 'top', className = '', showAnchors = true }) => {
  const isTop = position === 'top';

  // Multiple bands mount per document; derive a unique pattern id to avoid duplicate DOM ids.
  const uniqueId = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const patternId = `nier-band-${position}-${uniqueId}`;

  return (
    <div
      className={`relative w-full h-[14px] overflow-hidden flex items-center select-none pointer-events-none text-nier-darker/60 ${className}`}
      aria-hidden="true"
    >
      {showAnchors && (
        <span className="w-1.5 h-1.5 bg-nier-darker/70 flex-shrink-0 mr-1" />
      )}

      {/* SVG repeating micro-pattern */}
      <svg className="flex-1 h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id={patternId}
            width="28"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            {/* Main centerline */}
            <line
              x1="0"
              y1={isTop ? "10" : "4"}
              x2="28"
              y2={isTop ? "10" : "4"}
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            {/* Repeating vertical tick */}
            <line
              x1="14"
              y1={isTop ? "7" : "4"}
              x2="14"
              y2={isTop ? "10" : "7"}
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            {/* 3-dot triangle cluster (∴ or ∵) */}
            {isTop ? (
              <g fill="currentColor" fillOpacity="0.75">
                <circle cx="14" cy="2.5" r="0.9" />
                <circle cx="11.5" cy="5.5" r="0.9" />
                <circle cx="16.5" cy="5.5" r="0.9" />
              </g>
            ) : (
              <g fill="currentColor" fillOpacity="0.75">
                <circle cx="11.5" cy="8.5" r="0.9" />
                <circle cx="16.5" cy="8.5" r="0.9" />
                <circle cx="14" cy="11.5" r="0.9" />
              </g>
            )}
            {/* Minor dot accent */}
            <circle
              cx="0"
              cy={isTop ? "10" : "4"}
              r="1"
              fill="currentColor"
              fillOpacity="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {showAnchors && (
        <span className="w-1.5 h-1.5 bg-nier-darker/70 flex-shrink-0 ml-1" />
      )}
    </div>
  );
};

/**
 * NierCornerFrame
 * Adds subtle technical corner brackets (┌ ┐ └ ┘) to containers.
 */
export const NierCornerFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  bracketSize?: number;
  active?: boolean;
}> = ({ children, className = '', bracketSize = 6, active = false }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top-Left */}
      <span
        aria-hidden="true"
        style={{ width: bracketSize, height: bracketSize }}
        className={`absolute -top-px -left-px border-t-2 border-l-2 pointer-events-none transition-colors duration-150 ${
          active ? 'border-accent' : 'border-nier-darker/50'
        }`}
      />
      {/* Top-Right */}
      <span
        aria-hidden="true"
        style={{ width: bracketSize, height: bracketSize }}
        className={`absolute -top-px -right-px border-t-2 border-r-2 pointer-events-none transition-colors duration-150 ${
          active ? 'border-accent' : 'border-nier-darker/50'
        }`}
      />
      {/* Bottom-Left */}
      <span
        aria-hidden="true"
        style={{ width: bracketSize, height: bracketSize }}
        className={`absolute -bottom-px -left-px border-b-2 border-l-2 pointer-events-none transition-colors duration-150 ${
          active ? 'border-accent' : 'border-nier-darker/50'
        }`}
      />
      {/* Bottom-Right */}
      <span
        aria-hidden="true"
        style={{ width: bracketSize, height: bracketSize }}
        className={`absolute -bottom-px -right-px border-b-2 border-r-2 pointer-events-none transition-colors duration-150 ${
          active ? 'border-accent' : 'border-nier-darker/50'
        }`}
      />
      {children}
    </div>
  );
};

/**
 * NierRailMarker
 * The dual vertical track with diamond indicator (▌ | ◆) matching NieR menu selection.
 */
export const NierRailMarker: React.FC<{
  active?: boolean;
  className?: string;
}> = ({ active = false, className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1 flex-shrink-0 select-none ${className}`} aria-hidden="true">
      <span
        className={`w-1 h-4 transition-all duration-150 ${
          active ? 'bg-nier-darker scale-y-110' : 'bg-nier-dark/40'
        }`}
      />
      <span
        className={`w-0.5 h-4 transition-all duration-150 ${
          active ? 'bg-accent' : 'bg-nier-dark/20'
        }`}
      />
      <span
        className={`text-[11px] leading-none transition-opacity duration-150 ${
          active ? 'opacity-100 text-nier-darker font-bold' : 'opacity-0 text-transparent'
        }`}
      >
        ◆
      </span>
    </div>
  );
};
