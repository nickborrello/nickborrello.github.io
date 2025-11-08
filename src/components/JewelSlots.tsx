import type { JewelSlot } from '../types';
import JewelIcon from './JewelIcon';

interface JewelSlotsProps {
  jewelSlots?: JewelSlot[];
  size?: 'sm' | 'md' | 'lg';
}

export default function JewelSlots({ jewelSlots, size = 'md' }: JewelSlotsProps) {
  return (
    <div className="flex gap-1 items-center" data-jewel-slots>
      {jewelSlots?.map((slot) => (
        <JewelIcon
          key={slot.slotNumber}
          jewel={slot.jewel}
          slotNumber={slot.slotNumber}
          size={size}
        />
      ))}
    </div>
  );
}
