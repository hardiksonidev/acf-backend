// components/FilloutPopup.tsx
'use client';

import { useState } from 'react';
import { FilloutPopupEmbed } from '@fillout/react';
import { Button } from '@/components/ui/button'; // if you're using shadcn/ui

export default function FilloutPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 text-white hover:bg-gray-800 transition-all"
      >
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
