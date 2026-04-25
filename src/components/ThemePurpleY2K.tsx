import React from 'react';
import { motion } from 'motion/react';

export const ThemePurpleY2K = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Butterfly */}
      <motion.div 
         className="absolute -top-4 -left-6 w-48 h-48 origin-center"
         animate={{ rotate: [-6, 6, -6], y: [0, -6, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
          <path d="M50 50 C10 10, 0 40, 20 60 C10 80, 40 85, 50 55 C60 85, 90 80, 80 60 C100 40, 90 10, 50 50 Z" fill="#9e73d0" stroke="black" strokeWidth="2" strokeLinejoin="round" />
          <path d="M25 35 Q15 45 25 55 Q35 45 25 35 Z" fill="black" />
          <path d="M75 35 Q65 45 75 55 Q85 45 75 35 Z" fill="black" />
          <rect x="47" y="40" width="6" height="25" rx="3" fill="black" />
          <path d="M47 42 Q40 30 35 30" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M53 42 Q60 30 65 30" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Mouth */}
      <motion.div 
         className="absolute -top-4 -right-6 w-44 h-48 origin-center"
         animate={{ scale: [1, 1.05, 1], rotate: [20, 25, 20] }}
         transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 120" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black">
          <path d="M20 50 C40 30, 60 30, 80 50 C65 95, 35 95, 20 50 Z" fill="#d8b4e2" />
          <path d="M25 50 C40 35, 60 35, 75 50 C60 58, 40 58, 25 50 Z" fill="white" />
          <path d="M35 78 C45 85, 55 85, 65 78 C55 70, 45 70, 35 78 Z" fill="white" />
        </svg>
      </motion.div>

      {/* Cassette / Radio */}
      <motion.div
        className="absolute top-36 -left-6 w-36 h-24 origin-center"
        animate={{ y: [-5, 5, -5], rotate: [-15, -10, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 50" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           <path d="M5 25 Q50 -10 95 25 Q50 60 5 25 Z" fill="white" stroke="black" strokeWidth="4" />
           <circle cx="50" cy="25" r="16" fill="black" />
           <circle cx="55" cy="20" r="4" fill="white" />
           <circle cx="20" cy="25" r="5" fill="#d8b4e2" stroke="black" strokeWidth="2" />
           <circle cx="80" cy="25" r="5" fill="#d8b4e2" stroke="black" strokeWidth="2" />
         </svg>
      </motion.div>

      {/* Cherries */}
      <motion.div
        className="absolute top-36 right-4 w-32 h-32 origin-center"
        animate={{ rotate: [-5, 5, -5], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
           <path d="M50 20 Q40 50 30 70 M50 20 Q65 45 70 65" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
           <path d="M50 20 C60 10, 75 15, 80 25 C70 30, 55 25, 50 20 Z" fill="#16a34a" stroke="black" strokeWidth="2" />
           <circle cx="25" cy="75" r="15" fill="#ef4444" stroke="black" strokeWidth="3" />
           <circle cx="75" cy="70" r="15" fill="#ef4444" stroke="black" strokeWidth="3" />
           <circle cx="20" cy="70" r="3" fill="white" />
           <circle cx="70" cy="65" r="3" fill="white" />
         </svg>
      </motion.div>

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}

      {/* CD */}
      <motion.div 
         className="absolute bottom-36 -left-6 w-44 h-44 origin-center"
         animate={{ rotate: [0, 360] }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <circle cx="50" cy="50" r="45" fill="#e5e7eb" stroke="black" strokeWidth="4" />
           <circle cx="50" cy="50" r="15" fill="#f3f4f6" stroke="black" strokeWidth="3" />
           <circle cx="50" cy="50" r="6" fill="transparent" stroke="black" strokeWidth="3" />
           <path d="M50 5 A 45 45 0 0 1 95 50" fill="none" stroke="#d8b4e2" strokeWidth="4" opacity="0.7" />
           <path d="M5 50 A 45 45 0 0 0 50 95" fill="none" stroke="#93c5fd" strokeWidth="4" opacity="0.7" />
         </svg>
      </motion.div>

      {/* Lipstick */}
      <motion.div 
         className="absolute -bottom-4 -left-4 w-32 h-44 origin-center"
         animate={{ rotate: [-25, -15, -25], x: [-5, 5, -5] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-45">
          <rect x="20" y="50" width="60" height="40" fill="black" />
          <path d="M25 50 L25 80" stroke="white" strokeWidth="2" opacity="0.2" />
          <rect x="25" y="30" width="50" height="20" fill="#e0e0e0" stroke="black" strokeWidth="2"/>
          <path d="M35 15 L65 15 L65 30 L35 30 Z" fill="#ec4899" stroke="black" strokeWidth="2" />
          <path d="M40 5 Q65 5 65 15 L35 15 Z" fill="#f472b6" stroke="black" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Lollipop */}
      <motion.div 
         className="absolute -bottom-4 -right-4 w-44 h-60 origin-center"
         animate={{ rotate: [-15, -5, -15], y: [0, 5, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 150" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
           <rect x="46" y="50" width="8" height="90" rx="4" fill="#f0f0f0" stroke="black" strokeWidth="2" />
           <circle cx="50" cy="50" r="35" fill="black" stroke="black" strokeWidth="2" />
           <path d="M50 25 A 25 25 0 0 1 75 50 A 25 25 0 0 1 50 75 A 15 15 0 0 1 35 60 A 8 8 0 0 1 43 52 A 2 2 0 0 1 45 55" fill="none" stroke="#d8b4e2" strokeWidth="5" strokeLinecap="round" />
           <path d="M25 35 A 30 30 0 0 1 45 17" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      </motion.div>

      {/* Bandaids */}
      <motion.div 
         className="absolute bottom-36 right-8 w-36 h-36 origin-center"
         animate={{ rotate: [-20, -10, -20], y: [0, 5, 0] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <g transform="rotate(45 50 50)">
             <rect x="20" y="40" width="60" height="20" rx="10" fill="#fbcfe8" stroke="black" strokeWidth="4" />
             <rect x="40" y="40" width="20" height="20" fill="white" stroke="black" strokeWidth="3" />
             <circle cx="45" cy="45" r="2" fill="#f9a8d4" />
             <circle cx="55" cy="45" r="2" fill="#f9a8d4" />
             <circle cx="45" cy="55" r="2" fill="#f9a8d4" />
             <circle cx="55" cy="55" r="2" fill="#f9a8d4" />
           </g>
           <g transform="rotate(-45 50 50)">
             <rect x="20" y="40" width="60" height="20" rx="10" fill="#bae6fd" stroke="black" strokeWidth="4" />
             <rect x="40" y="40" width="20" height="20" fill="white" stroke="black" strokeWidth="3" />
             <circle cx="45" cy="45" r="2" fill="#7dd3fc" />
             <circle cx="55" cy="45" r="2" fill="#7dd3fc" />
             <circle cx="45" cy="55" r="2" fill="#7dd3fc" />
             <circle cx="55" cy="55" r="2" fill="#7dd3fc" />
           </g>
        </svg>
      </motion.div>

      {/* Sparkles Base Left & Right */}
    </div>
  );
};
