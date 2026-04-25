import React from 'react';
import { motion } from 'motion/react';

export const ThemeGothicGrunge = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Spiderweb */}
      <motion.div 
         className="absolute -top-4 -left-6 w-52 h-52 origin-center"
         animate={{ scale: [1, 1.02, 1] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black">
          <path d="M50 50 L10 10 M50 50 L50 0 M50 50 L90 10 M50 50 L100 50 M50 50 L90 90 M50 50 L50 100 M50 50 L10 90 M50 50 L0 50" stroke="black" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
          <path d="M 20 20 Q 50 10 80 20 Q 90 50 80 80 Q 50 90 20 80 Q 10 50 20 20 Z" fill="none" stroke="black" strokeWidth="2" opacity="0.5" />
          <path d="M 35 35 Q 50 30 65 35 Q 70 50 65 65 Q 50 70 35 65 Q 30 50 35 35 Z" fill="none" stroke="black" strokeWidth="2" opacity="0.7" />
          {/* Spider */}
          <circle cx="35" cy="65" r="4" fill="black" />
          <path d="M 35 65 L 30 60 M 35 65 L 30 70 M 35 65 L 40 60 M 35 65 L 40 70" stroke="black" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Bat */}
      <motion.div 
         className="absolute -top-4 -right-6 w-48 h-32 origin-center"
         animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 80" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
           <path d="M60 50 C 40 50, 20 20, 10 10 C 20 30, 30 40, 50 40 Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="round" />
           <path d="M60 50 C 80 50, 100 20, 110 10 C 100 30, 90 40, 70 40 Z" fill="black" stroke="white" strokeWidth="2" strokeLinejoin="round" />
           <circle cx="60" cy="45" r="10" fill="black" />
           <polygon points="55,35 58,40 60,35 62,40 65,35" fill="black" />
           <circle cx="57" cy="45" r="2" fill="white" />
           <circle cx="63" cy="45" r="2" fill="white" />
        </svg>
      </motion.div>

      {/* Coffin */}
      <motion.div 
         className="absolute top-36 -left-6 w-36 h-48 origin-center"
         animate={{ rotate: [-5, 5, -5] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 130" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
            <polygon points="30,10 70,10 90,40 70,120 30,120 10,40" fill="#475569" stroke="black" strokeWidth="4" strokeLinejoin="round" />
            <polygon points="35,15 65,15 80,40 65,110 35,110 20,40" fill="#334155" stroke="black" strokeWidth="2" strokeLinejoin="round" />
            {/* Cross on coffin */}
            <path d="M50 30 L50 80 L35 45 L65 45" stroke="black" strokeWidth="4" strokeLinecap="square" opacity="0.6" />
         </svg>
      </motion.div>

      {/* Eye / Razor */}
      <motion.div className="absolute top-36 right-4 w-32 h-24 origin-center" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}>
         <svg viewBox="0 0 100 60" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
            <path d="M10 30 Q 50 0 90 30 Q 50 60 10 30 Z" fill="white" stroke="black" strokeWidth="4" strokeLinejoin="round" />
            <circle cx="50" cy="30" r="15" fill="#ef4444" stroke="black" strokeWidth="3" />
            <circle cx="50" cy="30" r="5" fill="black" />
            <path d="M50 15 L50 10 M50 45 L50 50" stroke="black" strokeWidth="2" strokeLinecap="round" />
         </svg>
      </motion.div>

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}

      {/* Skull with Rose */}
      <motion.div
        className="absolute bottom-36 -left-6 w-44 h-44 origin-center transform -rotate-12"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
            {/* Skull */}
            <path d="M20 40 C 20 10, 80 10, 80 40 C 80 60, 65 70, 65 90 L 35 90 C 35 70, 20 60, 20 40 Z" fill="#f8fafc" stroke="black" strokeWidth="4" strokeLinejoin="round" />
            <circle cx="35" cy="50" r="10" fill="black" />
            <circle cx="65" cy="50" r="10" fill="black" />
            <path d="M50 65 Q 45 70 50 75 Q 55 70 50 65 Z" fill="black" />
            <path d="M40 85 L40 90 M50 85 L50 90 M60 85 L60 90" stroke="black" strokeWidth="3" strokeLinecap="round" />
            {/* Rose */}
            <circle cx="20" cy="20" r="15" fill="#ef4444" stroke="black" strokeWidth="3" />
            <path d="M15 15 Q 25 10 25 25 Q 10 25 15 15 Z" fill="#b91c1c" stroke="black" strokeWidth="2" />
         </svg>
      </motion.div>

      {/* Broken Heart */}
      <motion.div 
         className="absolute -bottom-4 -right-4 w-48 h-48 origin-center transform rotate-12"
         animate={{ scale: [1, 1.05, 1], rotate: [10, 15, 10] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <path d="M50 30 C 50 10, 10 10, 10 40 C 10 70, 50 90, 50 90 C 50 90, 90 70, 90 40 C 90 10, 50 10, 50 30 Z" fill="#1e293b" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <path d="M50 25 L45 45 L55 60 L45 75 L50 90" fill="none" stroke="black" strokeWidth="5" strokeLinejoin="round" />
           <path d="M15 40 L25 40 M20 35 L20 45" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Chains */}
      <motion.div 
         className="absolute -bottom-4 -left-4 w-52 h-44 origin-center transform rotate-12"
         animate={{ y: [-5, 5, -5] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black">
           <ellipse cx="30" cy="50" rx="20" ry="10" fill="none" stroke="black" strokeWidth="6" transform="rotate(-30 30 50)" />
           <ellipse cx="60" cy="50" rx="10" ry="20" fill="none" stroke="black" strokeWidth="6" transform="rotate(-30 60 50)" />
           <ellipse cx="90" cy="50" rx="20" ry="10" fill="none" stroke="black" strokeWidth="6" transform="rotate(-30 90 50)" />
           <path d="M30 40 L40 50 M80 50 L90 60" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Cross */}
      <motion.div 
         className="absolute bottom-36 right-8 w-28 h-36 origin-center"
         animate={{ rotate: [-10, 10, -10] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 80 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
            <rect x="30" y="10" width="20" height="80" fill="#0f172a" stroke="black" strokeWidth="4" />
            <rect x="10" y="30" width="60" height="20" fill="#0f172a" stroke="black" strokeWidth="4" />
            {/* Texture lines */}
            <line x1="40" y1="20" x2="40" y2="80" stroke="white" strokeWidth="2" opacity="0.2" />
            <line x1="20" y1="40" x2="60" y2="40" stroke="white" strokeWidth="2" opacity="0.2" />
         </svg>
      </motion.div>

    </div>
  );
};
