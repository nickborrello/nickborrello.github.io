import type { TechJewel } from '../types';

interface JewelIconProps {
  jewel: TechJewel | null;
  slotNumber: number;
}

/**
 * Returns the appropriate Tailwind color class for a given tech jewel
 */
function getTechColor(tech: TechJewel): string {
  const colorMap: Record<TechJewel, string> = {
    'React': 'bg-cyan-400',
    'TypeScript': 'bg-blue-500',
    'JavaScript': 'bg-yellow-400',
    'Node.js': 'bg-green-600',
    'Python': 'bg-blue-600',
    'HTML': 'bg-orange-600',
    'CSS': 'bg-blue-400',
    'Tailwind CSS': 'bg-cyan-500',
    'Vue': 'bg-green-500',
    'Angular': 'bg-red-600',
    'Vite': 'bg-purple-500',
    'Express': 'bg-gray-700',
    'MongoDB': 'bg-green-700',
    'PostgreSQL': 'bg-blue-700',
    'GraphQL': 'bg-pink-600',
    'REST API': 'bg-blue-300',
    'Docker': 'bg-blue-500',
    'Git': 'bg-orange-500',
    'Jest': 'bg-red-500',
    'Vitest': 'bg-yellow-500',
    'Redux': 'bg-purple-600',
    'Socket.io': 'bg-gray-800',
    'JWT': 'bg-pink-500',
    'Stripe API': 'bg-indigo-600',
    'Firebase': 'bg-yellow-600',
    'Material-UI': 'bg-blue-600',
    'React DnD': 'bg-cyan-600',
  };

  return colorMap[tech];
}

export default function JewelIcon({ jewel, slotNumber }: JewelIconProps) {
  // Empty slot
  if (jewel === null) {
    return (
      <div
        className="w-2.5 h-2.5 border border-gray-500 bg-gray-900 rounded-sm jewel-slot-empty"
        data-slot={slotNumber}
        data-slot-empty="true"
        title="Empty Slot"
      />
    );
  }

  // Filled slot with jewel
  const colorClass = getTechColor(jewel);

  return (
    <div
      className={`w-2.5 h-2.5 ${colorClass} rounded-sm jewel-gem border border-white/20 shadow-sm hover:scale-110 transition-transform duration-200 cursor-pointer`}
      data-tech={jewel}
      data-slot={slotNumber}
      title={jewel}
    />
  );
}
