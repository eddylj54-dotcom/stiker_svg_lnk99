import React from 'react';
import { motion } from 'motion/react';

export const ThemeNeonParty = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Disco Ball */}
      <motion.div 
         className="absolute -top-4 -left-6 w-44 h-44 origin-center"
         animate={{ rotate: [0, 360], y: [0, -5, 0] }}
         transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black">
          <circle cx="50" cy="50" r="40" fill="#06b6d4" stroke="black" strokeWidth="4" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="black" strokeWidth="2" />
          <path d="M22 22 Q50 -10 78 22 Q110 50 78 78 Q50 110 22 78 Q-10 50 22 22 Z" fill="none" stroke="black" strokeWidth="2" />
          {/* Sparkles */}
          <path d="M20 20 L30 30 M30 20 L20 30" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M70 70 L80 80 M80 70 L70 80" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Cassette Tape */}
      <motion.div 
         className="absolute -top-4 -right-6 w-48 h-36 origin-center"
         animate={{ scale: [1, 1.05, 1], rotate: [-10, -5, -10] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 80" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           <rect x="10" y="10" width="100" height="60" rx="5" fill="#ec4899" stroke="black" strokeWidth="4" />
           <rect x="25" y="25" width="70" height="25" rx="3" fill="#1f2937" stroke="black" strokeWidth="3" />
           <circle cx="45" cy="37.5" r="7" fill="white" stroke="black" strokeWidth="2" />
           <circle cx="75" cy="37.5" r="7" fill="white" stroke="black" strokeWidth="2" />
           <path d="M20 60 L100 60" stroke="white" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
           <rect x="40" y="25" width="40" height="2" fill="white" />
        </svg>
      </motion.div>

      {/* Cocktail Glass */}
      <motion.div 
         className="absolute top-36 -left-6 w-36 h-44 origin-center"
         animate={{ rotate: [-5, 5, -5], y: [-5, 5, -5] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 120" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
            <path d="M10 20 L50 80 L90 20 Z" fill="#f43f5e" stroke="black" strokeWidth="4" strokeLinejoin="round" opacity="0.9" />
            <path d="M10 20 L90 20" stroke="white" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
            <path d="M50 80 L50 110" stroke="black" strokeWidth="4" strokeLinecap="round" />
            <path d="M30 110 L70 110" stroke="black" strokeWidth="4" strokeLinecap="round" />
            {/* Olive / Cherry */}
            <circle cx="65" cy="20" r="8" fill="#84cc16" stroke="black" strokeWidth="3" />
            <path d="M65 12 L75 5" fill="none" stroke="black" strokeWidth="2" />
         </svg>
      </motion.div>

      {/* Lightning Flash */}
      <motion.div className="absolute top-36 right-4 w-24 h-36 origin-center" animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 1, repeat: Infinity }}>
         <svg viewBox="0 0 50 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
            <path d="M30 10 L10 50 L25 50 L15 90 L40 40 L25 40 Z" fill="#eab308" stroke="black" strokeWidth="3" strokeLinejoin="round" />
         </svg>
      </motion.div>

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}

      {/* DJ Headphones */}
      <motion.div
        className="absolute bottom-36 -left-6 w-44 h-44 origin-center transform -rotate-12"
        animate={{ y: [-5, 5, -5], rotate: [-20, -10, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <path d="M20 50 A 30 30 0 0 1 80 50" fill="none" stroke="black" strokeWidth="6" strokeLinecap="round" />
           <rect x="10" y="45" width="15" height="40" rx="5" fill="#84cc16" stroke="black" strokeWidth="4" />
           <rect x="75" y="45" width="15" height="40" rx="5" fill="#84cc16" stroke="black" strokeWidth="4" />
           <rect x="5" y="55" width="5" height="20" rx="2" fill="black" />
           <rect x="90" y="55" width="5" height="20" rx="2" fill="black" />
           {/* Sound waves */}
           <path d="M90 30 Q95 20 100 25" fill="none" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
           <path d="M10 30 Q5 20 0 25" fill="none" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
         </svg>
      </motion.div>

      {/* Vinyl Record */}
      <motion.div 
         className="absolute -bottom-4 -right-4 w-52 h-52 origin-center"
         animate={{ rotate: [0, 360] }}
         transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <circle cx="50" cy="50" r="45" fill="#0f172a" stroke="black" strokeWidth="4" />
           <circle cx="50" cy="50" r="35" fill="none" stroke="#334155" strokeWidth="2" />
           <circle cx="50" cy="50" r="25" fill="none" stroke="#334155" strokeWidth="2" />
           <circle cx="50" cy="50" r="15" fill="#ec4899" stroke="black" strokeWidth="3" />
           <circle cx="50" cy="50" r="3" fill="white" />
           {/* Light reflection */}
           <path d="M50 15 A 35 35 0 0 1 85 50" fill="none" stroke="white" strokeWidth="2" opacity="0.3" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Glow Sticks */}
      <motion.div 
         className="absolute -bottom-4 -left-4 w-44 h-44 origin-center transform -rotate-12"
         animate={{ scale: [1, 1.05, 1], rotate: [10, 15, 10] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <rect x="20" y="10" width="10" height="80" rx="5" fill="#2dd4bf" stroke="black" strokeWidth="3" transform="rotate(-15 25 50)" />
           <rect x="60" y="10" width="10" height="80" rx="5" fill="#fbbf24" stroke="black" strokeWidth="3" transform="rotate(25 65 50)" />
           <rect x="40" y="15" width="10" height="70" rx="5" fill="#d946ef" stroke="black" strokeWidth="3" transform="rotate(5 45 50)" />
        </svg>
      </motion.div>

      {/* Music Note */}
      <motion.div 
         className="absolute bottom-36 right-8 w-32 h-32 origin-center"
         animate={{ rotate: [-10, 10, -10], scale: [1, 1.1, 1] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
            <ellipse cx="30" cy="70" rx="15" ry="10" fill="#06b6d4" stroke="black" strokeWidth="3" />
            <path d="M45 70 L45 20 L80 30 L80 40 L45 30" fill="black" stroke="black" strokeWidth="2" />
         </svg>
      </motion.div>

    </div>
  );
};
