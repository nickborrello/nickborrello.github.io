import type { JewelSlot } from '../types';
import JewelIcon from './JewelIcon';

interface JewelSlotsProps {
  jewelSlots?: JewelSlot[];
}

export default function JewelSlots({ jewelSlots }: JewelSlotsProps) {
  return (
    <div className="flex gap-1 items-center" data-jewel-slots>
      {jewelSlots?.map((slot) => (
        <JewelIcon
          key={slot.slotNumber}
          jewel={slot.jewel}
          slotNumber={slot.slotNumber}
        />
      ))}
    </div>
  );
}
