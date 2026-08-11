import React from 'react';

/** The world's frame device: four L-marks at a container's corners. */
export const CornerTicks: React.FC = () => (
  <span aria-hidden="true" className="pointer-events-none absolute inset-0">
    <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-nier-dark/60" />
    <span className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-nier-dark/60" />
    <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-nier-dark/60" />
    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-nier-dark/60" />
  </span>
);
