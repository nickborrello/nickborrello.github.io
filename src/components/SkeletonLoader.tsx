import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-800/60 animate-pulse rounded-md ${className}`}
      style={{
        animationDuration: '1.5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
      }}
    />
  );
};

export default SkeletonLoader;
