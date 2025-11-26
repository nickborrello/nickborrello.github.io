import React from 'react';

interface StyledHeaderProps {
  label: string;
  value: string;
}

const StyledHeader: React.FC<StyledHeaderProps> = ({ label, value }) => (
  <div className="relative inline-flex items-start justify-start gap-4">
    <div className="bg-gradient-to-r from-transparent via-black/70 to-transparent rounded">
      <span className="font-cinzel font-bold text-[#fbbf24] text-lg tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-1">
        {label}
      </span>
      <span className="font-cinzel font-bold text-white text-lg tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ml-4 px-1">
        {value}
      </span>
    </div>
  </div>
);

export default StyledHeader;