import React from 'react';
import { motion } from 'motion/react';

export const ThemeSkaterPunk = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Skull */}
      <motion.div 
         className="absolute -top-4 -left-6 w-48 h-52 origin-center transform -rotate-12"
         animate={{ rotate: [-12, -4, -12], y: [0, -5, 0] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 120" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black">
          <path d="M20 40 C20 10, 80 10, 80 40 C80 60, 70 70, 70 80 L30 80 C30 70, 20 60, 20 40 Z" fill="white" stroke="black" strokeWidth="4" strokeLinejoin="round" />
          <rect x="35" y="80" width="30" height="15" fill="white" stroke="black" strokeWidth="4" />
          <path d="M45 80 L45 95 M55 80 L55 95" stroke="black" strokeWidth="4" />
          <circle cx="35" cy="50" r="10" fill="black" />
          <circle cx="65" cy="50" r="10" fill="black" />
          <path d="M45 65 L55 65 L50 70 Z" fill="black" />
        </svg>
      </motion.div>

      {/* Safety Pin */}
      <motion.div 
         className="absolute top-36 -left-6 w-40 h-20 origin-center"
         animate={{ rotate: [-10, 10, -10] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 40" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           <path d="M15 20 Q5 20 5 10 Q5 0 15 0 Q25 0 25 10 A 5 5 0 0 0 35 10 L85 10 Q95 10 95 20 A 5 5 0 0 1 85 20 L35 20 A 5 5 0 0 0 25 10 M35 10 L85 10 M35 20 L85 20" fill="none" stroke="#d1d5db" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
           <circle cx="15" cy="10" r="4" fill="#9ca3af" stroke="black" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Lightning Bolt */}
      <motion.div 
         className="absolute -top-4 -right-6 w-40 h-56 origin-center"
         animate={{ scale: [1, 1.1, 1], rotate: [15, 20, 15] }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 150" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
          <path d="M50 10 L20 70 L45 70 L30 140 L80 60 L50 60 Z" fill="#eab308" stroke="black" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </motion.div>
      
      {/* Anarchy */}
      <motion.div 
         className="absolute top-36 right-4 w-32 h-32 origin-center"
         animate={{ rotate: [-20, -10, -20] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
           <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" strokeWidth="8" />
           <path d="M50 15 L25 80 M50 15 L75 80 M20 55 L80 55" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Spray Can */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-32 h-48 origin-center"
        animate={{ y: [-5, 5, -5], rotate: [-25, -20, -25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 150" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
           <rect x="25" y="50" width="50" height="80" fill="#10b981" stroke="black" strokeWidth="4" rx="5" />
           <path d="M25 50 Q50 30 75 50 Z" fill="#9ca3af" stroke="black" strokeWidth="4" />
           <rect x="40" y="25" width="20" height="15" fill="white" stroke="black" strokeWidth="4" />
           <rect x="45" y="15" width="10" height="10" fill="#10b981" stroke="black" strokeWidth="4" />
           <rect x="30" y="70" width="40" height="40" fill="white" stroke="black" strokeWidth="3" />
           <circle cx="50" cy="90" r="10" fill="black" />
         </svg>
      </motion.div>

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}

      {/* Boombox */}
      <motion.div 
         className="absolute bottom-36 -left-6 w-48 h-36 origin-center"
         animate={{ rotate: [-5, 5, -5], scale: [1, 1.05, 1] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 90" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           <rect x="10" y="30" width="100" height="50" rx="4" fill="#374151" stroke="black" strokeWidth="3" />
           <path d="M30 30 L30 15 L90 15 L90 30" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
           <circle cx="35" cy="55" r="15" fill="#111827" stroke="black" strokeWidth="2" />
           <circle cx="85" cy="55" r="15" fill="#111827" stroke="black" strokeWidth="2" />
           <rect x="55" y="45" width="10" height="20" fill="white" stroke="black" strokeWidth="2" />
           <rect x="55" y="40" width="10" height="3" fill="#ef4444" />
        </svg>
      </motion.div>

      {/* Skateboard */}
      <motion.div 
         className="absolute -bottom-4 -left-4 w-60 h-28 origin-center transform -rotate-12"
         animate={{ rotate: [-8, 2, -8], x: [0, -10, 0] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
          <path d="M20 40 L180 40 C190 40, 195 45, 190 50 L10 50 C5 45, 10 40, 20 40 Z" fill="#ef4444" stroke="black" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="50" cy="55" r="12" fill="white" stroke="black" strokeWidth="4" />
          <circle cx="50" cy="55" r="4" fill="black" />
          <circle cx="150" cy="55" r="12" fill="white" stroke="black" strokeWidth="4" />
          <circle cx="150" cy="55" r="4" fill="black" />
        </svg>
      </motion.div>

      {/* Decorative Checkers */}
      <motion.div className="absolute bottom-36 right-8 w-36 h-36 opacity-90 origin-center" animate={{ rotate: -15 }}>
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }}>
            <rect x="10" y="10" width="30" height="30" fill="black" />
            <rect x="40" y="10" width="30" height="30" fill="white" stroke="black" strokeWidth="2" />
            <rect x="10" y="40" width="30" height="30" fill="white" stroke="black" strokeWidth="2" />
            <rect x="40" y="40" width="30" height="30" fill="black" />
         </svg>
      </motion.div>

    </div>
  );
};
