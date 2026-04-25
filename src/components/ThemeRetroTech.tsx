import React from 'react';
import { motion } from 'motion/react';

export const ThemeRetroTech = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Floppy Disk */}
      <motion.div 
         className="absolute -top-4 -left-6 w-44 h-44 origin-center"
         animate={{ rotate: [-6, 6, -6], y: [0, -5, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black transform -rotate-12">
          <rect x="15" y="15" width="70" height="70" rx="4" fill="#3b82f6" stroke="black" strokeWidth="4" />
          <path d="M70 15 L85 30" stroke="black" strokeWidth="4" fill="none" />
          <rect x="30" y="15" width="40" height="25" fill="#d1d5db" stroke="black" strokeWidth="3" />
          <rect x="55" y="18" width="10" height="15" fill="#4b5563" />
          <rect x="25" y="50" width="50" height="35" fill="white" stroke="black" strokeWidth="3" />
          <path d="M30 60 L70 60 M30 70 L70 70 M30 80 L50 80" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* CD-ROM */}
      <motion.div
        className="absolute -top-4 -right-6 w-48 h-48 origin-center"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <circle cx="50" cy="50" r="40" fill="#e5e7eb" stroke="black" strokeWidth="4" />
           <circle cx="50" cy="50" r="12" fill="none" stroke="black" strokeWidth="4" />
           <circle cx="50" cy="50" r="4" fill="white" stroke="black" strokeWidth="2" />
           <path d="M50 15 A 35 35 0 0 1 85 50" fill="none" stroke="#2dd4bf" strokeWidth="4" />
           <path d="M15 50 A 35 35 0 0 0 50 85" fill="none" stroke="#a855f7" strokeWidth="4" />
         </svg>
      </motion.div>

      {/* File Folder */}
      <motion.div
        className="absolute top-36 -left-6 w-36 h-28 origin-center"
        animate={{ rotate: [-10, 10, -10], y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 80" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <path d="M10 20 L35 20 L45 30 L90 30 C95 30, 95 35, 95 40 L95 70 C95 75, 90 80, 80 80 L20 80 C10 80, 10 75, 10 70 Z" fill="#fbbf24" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <path d="M10 40 L95 40" fill="none" stroke="black" strokeWidth="4" />
        </svg>
      </motion.div>

      {/* Pixel Heart */}
      <motion.div
        className="absolute top-36 right-4 w-28 h-28 origin-center"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
            <path d="M20 20 L40 20 L40 10 L60 10 L60 20 L80 20 L80 40 L90 40 L90 60 L80 60 L80 80 L70 80 L70 90 L50 90 L50 100 L30 100 L30 90 L10 90 L10 70 L20 70 L20 40 Z" fill="#ef4444" stroke="black" strokeWidth="4" strokeLinejoin="miter" />
            <rect x="25" y="25" width="10" height="10" fill="white" />
         </svg>
      </motion.div>

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}

      {/* VHS Tape */}
      <motion.div 
         className="absolute bottom-36 -left-6 w-52 h-32 origin-center"
         animate={{ rotate: [-5, 5, -5], y: [0, 5, 0] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 70" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
           <rect x="10" y="10" width="100" height="50" fill="#1f2937" stroke="black" strokeWidth="4" rx="2" />
           <rect x="25" y="15" width="70" height="25" fill="#374151" stroke="black" strokeWidth="2" />
           <circle cx="45" cy="27.5" r="8" fill="white" stroke="black" strokeWidth="2" />
           <circle cx="75" cy="27.5" r="8" fill="white" stroke="black" strokeWidth="2" />
           <path d="M20 45 L100 45" stroke="white" strokeWidth="4" />
           <path d="M20 50 L100 50" stroke="#ef4444" strokeWidth="2" />
           <path d="M20 53 L100 53" stroke="#3b82f6" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Old Computer */}
      <motion.div 
         className="absolute -bottom-4 -right-4 w-48 h-48 origin-center"
         animate={{ rotate: [-8, 2, -8], y: [0, 5, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
           <path d="M15 20 L85 20 L90 70 L10 70 Z" fill="#d1d5db" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <rect x="25" y="30" width="50" height="30" rx="2" fill="#020617" stroke="black" strokeWidth="3" />
           <path d="M30 35 L50 35" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
           <path d="M30 40 L40 40" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
           <rect x="43" y="38" width="4" height="4" fill="#4ade80" />
           <rect x="75" y="30" width="8" height="2" fill="black" />
           <rect x="75" y="35" width="8" height="2" fill="black" />
           <path d="M40 70 L60 70 L65 80 L35 80 Z" fill="#9ca3af" stroke="black" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Error Dialog */}
      <motion.div 
         className="absolute -bottom-4 -left-4 w-48 h-32 origin-center transform rotate-12"
         animate={{ rotate: [5, 15, 5], scale: [1, 1.05, 1] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 120 70" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
            <rect x="0" y="0" width="120" height="70" fill="#f3f4f6" stroke="black" strokeWidth="3" />
            <rect x="0" y="0" width="120" height="15" fill="#2563eb" stroke="black" strokeWidth="2" />
            <text x="5" y="11" fill="white" fontSize="8" fontFamily="monospace" fontWeight="bold">Error 404</text>
            <rect x="105" y="2" width="10" height="10" fill="#ef4444" stroke="black" strokeWidth="1" />
            <path d="M107 4 L113 10 M113 4 L107 10" stroke="white" strokeWidth="1" />
            <circle cx="20" cy="35" r="8" fill="#ef4444" stroke="black" strokeWidth="1.5" />
            <path d="M17 32 L23 38 M23 32 L17 38" stroke="white" strokeWidth="2" />
            <rect x="40" y="30" width="60" height="4" fill="black" />
            <rect x="40" y="40" width="40" height="4" fill="black" />
            <rect x="40" y="50" width="30" height="12" fill="#d1d5db" stroke="black" strokeWidth="1.5" />
            <text x="45" y="58" fill="black" fontSize="6" fontFamily="monospace">OK</text>
         </svg>
      </motion.div>

      {/* Hourglass */}
      <motion.div 
         className="absolute bottom-36 right-8 w-28 h-40 origin-center"
         animate={{ rotate: [0, 180, 180] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 60 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
            <rect x="10" y="10" width="40" height="10" fill="#9ca3af" stroke="black" strokeWidth="3" />
            <rect x="10" y="80" width="40" height="10" fill="#9ca3af" stroke="black" strokeWidth="3" />
            <path d="M15 20 L25 50 L15 80" fill="none" stroke="black" strokeWidth="3" />
            <path d="M45 20 L35 50 L45 80" fill="none" stroke="black" strokeWidth="3" />
            <path d="M17 22 L43 22 L35 45 L25 45 Z" fill="#38bdf8" opacity="0.8" />
            <path d="M25 55 L35 55 L40 78 L20 78 Z" fill="#38bdf8" opacity="0.4" />
            {/* Sand falling */}
            <path d="M30 45 L30 70" stroke="#38bdf8" strokeWidth="2" />
         </svg>
      </motion.div>

    </div>
  );
};
