'use client';

import { useState } from 'react';
import { FilloutPopupEmbed } from '@fillout/react';
import { Button } from '@/components/ui/button'; // if you're using shadcn/ui
import { Calendar, CalendarClockIcon, CalendarPlus } from 'lucide-react';

export default function FilloutPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="outline" 
        onClick={() => setIsOpen(true)}
      >
        <CalendarPlus className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform"  />
                          Book a Slot
      </Button>

      <FilloutPopupEmbed
        filloutId="ffHSvDWweuus" // replace with your actual form ID
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        width="600px" // adjust as needed
        height="800px" // adjust as needed
      />
    </>
  );
}
