import React from 'react';
import { motion } from 'motion/react';

export const ThemeSpaceVoyage = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Saturn */}
      <motion.div 
         className="absolute -top-4 -left-6 w-48 h-48 origin-center"
         animate={{ rotate: [-5, 5, -5], y: [-5, 5, -5] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black transform rotate-12">
          {/* Back of ring */}
          <ellipse cx="60" cy="50" rx="55" ry="15" fill="none" stroke="#6366f1" strokeWidth="4" />
          {/* Planet */}
          <circle cx="60" cy="50" r="30" fill="#f59e0b" stroke="black" strokeWidth="3" />
          <path d="M40 35 C 50 30, 70 30, 80 35" stroke="#d97706" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M35 50 C 50 45, 70 45, 85 50" stroke="#d97706" strokeWidth="6" fill="none" strokeLinecap="round" />
          {/* Front of ring */}
          <path d="M 5 50 A 55 15 0 0 0 115 50" fill="none" stroke="#6366f1" strokeWidth="4" strokeLinecap="round" />
          <path d="M 12 50 A 48 10 0 0 0 108 50" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* UFO */}
      <motion.div 
         className="absolute -top-4 -right-6 w-48 h-32 origin-center"
         animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 90" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           {/* Glass dome */}
           <path d="M 30 45 C 30 20, 90 20, 90 45" fill="#a5b4fc" stroke="black" strokeWidth="3" opacity="0.8" />
           {/* Alien inside */}
           <circle cx="60" cy="35" r="10" fill="#22c55e" stroke="black" strokeWidth="2" />
           <ellipse cx="55" cy="33" rx="2" ry="4" fill="black" />
           <ellipse cx="65" cy="33" rx="2" ry="4" fill="black" />
           {/* Saucer base */}
           <ellipse cx="60" cy="50" rx="55" ry="15" fill="#cbd5e1" stroke="black" strokeWidth="4" />
           <ellipse cx="60" cy="45" rx="45" ry="10" fill="#94a3b8" />
           {/* Lights */}
           <circle cx="20" cy="50" r="4" fill="#ef4444" />
           <circle cx="40" cy="55" r="4" fill="#3b82f6" />
           <circle cx="60" cy="57" r="4" fill="#eab308" />
           <circle cx="80" cy="55" r="4" fill="#3b82f6" />
           <circle cx="100" cy="50" r="4" fill="#ef4444" />
        </svg>
      </motion.div>

      {/* Astronaut Helmet */}
      <motion.div 
         className="absolute top-36 -left-6 w-36 h-40 origin-center"
         animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 0] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 110" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
            <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="black" strokeWidth="4" />
            <rect x="15" y="25" width="70" height="40" rx="20" fill="#0f172a" stroke="black" strokeWidth="3" />
            {/* Visor reflection */}
            <path d="M 25 35 Q 50 25 75 35" stroke="white" strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" />
            <path d="M40 90 L60 90" stroke="black" strokeWidth="4" strokeLinecap="round" />
            <circle cx="30" cy="90" r="5" fill="#ef4444" stroke="black" strokeWidth="2" />
         </svg>
      </motion.div>

      {/* Comet */}
      <motion.div className="absolute top-36 right-4 w-40 h-24 origin-center" animate={{ x: [0, 10, 0], y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
         <svg viewBox="0 0 150 80" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
            <path d="M 50 40 Q 100 20 140 10 Q 120 40 140 70 Q 100 60 50 40" fill="#fef08a" stroke="black" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="40" cy="40" r="20" fill="#eab308" stroke="black" strokeWidth="4" />
            <circle cx="35" cy="35" r="4" fill="#ca8a04" />
            <circle cx="45" cy="45" r="3" fill="#ca8a04" />
         </svg>
      </motion.div>

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}

      {/* Rocket */}
      <motion.div
        className="absolute bottom-36 -left-6 w-44 h-48 origin-center transform 1rotate-12"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 120" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
            {/* Flame */}
            <path d="M35 90 Q50 120 65 90 Z" fill="#ef4444" stroke="black" strokeWidth="2" />
            <path d="M45 90 Q50 110 55 90 Z" fill="#fef08a" />
            {/* Fins */}
            <path d="M30 60 L10 90 L30 80 Z" fill="#ef4444" stroke="black" strokeWidth="3" strokeLinejoin="round" />
            <path d="M70 60 L90 90 L70 80 Z" fill="#ef4444" stroke="black" strokeWidth="3" strokeLinejoin="round" />
            {/* Body */}
            <path d="M50 10 Q20 40 30 90 L70 90 Q80 40 50 10 Z" fill="#ffffff" stroke="black" strokeWidth="4" strokeLinejoin="round" />
            {/* Window */}
            <circle cx="50" cy="45" r="10" fill="#3b82f6" stroke="black" strokeWidth="3" />
            <path d="M45 40 Q50 40 55 45" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
         </svg>
      </motion.div>

      {/* Raygun */}
      <motion.div 
         className="absolute -bottom-4 -right-4 w-52 h-44 origin-center transform -rotate-12"
         animate={{ rotate: [-20, -10, -20] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 120 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <path d="M20 70 L40 50 L50 80 Z" fill="#ef4444" stroke="black" strokeWidth="3" strokeLinejoin="round" />
           <rect x="40" y="30" width="60" height="25" rx="5" fill="#94a3b8" stroke="black" strokeWidth="4" />
           <circle cx="100" cy="42.5" r="8" fill="#3b82f6" stroke="black" strokeWidth="3" />
           <path d="M108 42.5 L120 42.5" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4,2" />
           <rect x="45" y="35" width="5" height="15" fill="#cbd5e1" />
           <rect x="55" y="35" width="5" height="15" fill="#cbd5e1" />
           <rect x="65" y="35" width="5" height="15" fill="#cbd5e1" />
           {/* Handle */}
           <path d="M30 50 Q40 60 35 90 L20 85 Q25 60 30 50 Z" fill="#f97316" stroke="black" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Alien / Moon Flag */}
      <motion.div 
         className="absolute -bottom-4 -left-4 w-44 h-48 origin-center transform 1rotate-12"
         animate={{ rotate: [-5, 5, -5] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 120" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           {/* Crater base */}
           <ellipse cx="50" cy="100" rx="30" ry="10" fill="#94a3b8" stroke="black" strokeWidth="3" />
           <ellipse cx="60" cy="98" rx="5" ry="2" fill="#64748b" />
           {/* Flag pole */}
           <line x1="50" y1="100" x2="50" y2="20" stroke="black" strokeWidth="4" strokeLinecap="round" />
           {/* Flag */}
           <path d="M50 20 L90 35 L50 50 Z" fill="#22c55e" stroke="black" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </motion.div>

      {/* Star / Planet */}
      <motion.div 
         className="absolute bottom-36 right-8 w-28 h-28 origin-center"
         animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
         transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
            <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="#fde047" stroke="black" strokeWidth="3" strokeLinejoin="round" />
         </svg>
      </motion.div>

    </div>
  );
};
