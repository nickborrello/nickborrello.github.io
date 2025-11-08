import type { TechJewel } from '../types';

interface JewelIconProps {
  jewel: TechJewel | null;
  slotNumber: number;
  size?: 'sm' | 'md' | 'lg';
}

const jewelColors: Record<TechJewel, string> = {
  'React': 'from-blue-400 to-cyan-400',
  'TypeScript': 'from-blue-600 to-blue-800',
  'JavaScript': 'from-yellow-400 to-yellow-600',
  'Node.js': 'from-green-500 to-green-700',
  'Python': 'from-yellow-500 to-blue-600',
  'CSS': 'from-blue-500 to-purple-500',
  'HTML': 'from-orange-400 to-red-500',
  'Tailwind CSS': 'from-teal-400 to-cyan-500',
  'Vite': 'from-yellow-400 to-orange-500',
  'Vue': 'from-green-400 to-emerald-500',
  'Angular': 'from-red-500 to-red-700',
  'Express': 'from-gray-600 to-gray-800',
  'MongoDB': 'from-green-600 to-green-800',
  'PostgreSQL': 'from-blue-600 to-indigo-800',
  'GraphQL': 'from-pink-500 to-purple-600',
  'REST API': 'from-indigo-500 to-purple-600',
  'Docker': 'from-blue-500 to-blue-700',
  'Git': 'from-orange-600 to-red-600',
  'Jest': 'from-red-500 to-pink-500',
  'Vitest': 'from-green-500 to-lime-500',
  'Redux': 'from-purple-500 to-purple-700',
  'Socket.io': 'from-gray-500 to-gray-700',
  'JWT': 'from-yellow-600 to-orange-600',
  'Stripe API': 'from-purple-600 to-indigo-600',
  'Firebase': 'from-yellow-500 to-orange-500',
  'Material-UI': 'from-blue-500 to-indigo-500',
  'React DnD': 'from-orange-500 to-red-500',
};

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export default function JewelIcon({ jewel, slotNumber, size = 'md' }: JewelIconProps) {
  if (!jewel) {
    // Empty slot - render a gray placeholder
    return (
      <div
        className={`${sizeClasses[size]} rounded-full border-2 border-gray-600 bg-gray-800/50 flex items-center justify-center`}
        title={`Empty slot ${slotNumber}`}
      >
        <div className="w-1 h-1 bg-gray-500 rounded-full opacity-50" />
      </div>
    );
  }

  const colorClass = jewelColors[jewel];

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colorClass} shadow-lg border border-white/20 flex items-center justify-center relative`}
      title={`${jewel} (Slot ${slotNumber})`}
    >
      {/* Inner highlight for jewel effect */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-t from-transparent to-white/30" />
      {/* Small sparkle effect */}
      <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full opacity-80" />
    </div>
  );
}