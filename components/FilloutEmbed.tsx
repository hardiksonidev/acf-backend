// // components/FilloutPopup.tsx
// 'use client';

// import { useState } from 'react';
// import { FilloutPopupEmbed } from '@fillout/react';
// import { Button } from '@/components/ui/button'; // if you're using shadcn/ui

// export default function FilloutPopup() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={() => setIsOpen(true)}
//         className="bg-gray-900 text-white hover:bg-gray-800 transition-all"
//       >
//         Book a Slot
//       </Button>

//       <FilloutPopupEmbed
//         filloutId="ffHSvDWweuus" // replace with your actual form ID
//         isOpen={isOpen}
//         onClose={() => setIsOpen(false)}
//         width="600px" // adjust as needed
//         height="800px" // adjust as needed
//       />
//     </>
//   );
// }


'use client';

import { useState } from 'react';
import { FilloutPopupEmbed } from '@fillout/react';
import { Button } from '@/components/ui/button'; // if you're using shadcn/ui
import { Calendar, CalendarClockIcon, CalendarPlus } from 'lucide-react';
import { Icon } from '@radix-ui/react-select';

export default function FilloutPopupContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Button variant="outline" 
        onClick={() => setIsOpen(true)}
      >
        <CalendarPlus className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform"  />
                          Book a Slot
      </Button> */}

      {/* <a
                        key="Schedule a meeting"
                        href={info.href}
                       
                      > */}
                        <span  onClick={() => setIsOpen(true)}
                        key="Schedule a meeting"                     
                        className="cursor-pointer flex items-center space-x-4 p-4 rounded-lg glass-effect hover:bg-white/20 transition-all duration-200"
                      >
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <CalendarPlus className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <div className="font-medium">Schedule a meeting</div>
                          <div className="text-gray-600 dark:text-gray-400">hardiksonidev</div>
                        </div>
                      </span>

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
