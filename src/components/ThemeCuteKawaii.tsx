import React from 'react';
import { motion } from 'motion/react';

export const ThemeCuteKawaii = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* -------------------- */}
      {/*     TOP CLUSTER      */}
      {/* -------------------- */}
      
      {/* Cloud */}
      <motion.div 
         className="absolute -top-4 -left-6 w-44 h-32 origin-center"
         animate={{ y: [0, -8, 0], scale: [1, 1.02, 1] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 150 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full text-black">
          <path d="M40 70 A 20 20 0 0 1 40 30 A 30 30 0 0 1 90 20 A 30 30 0 0 1 120 50 A 20 20 0 0 1 110 80 Z" fill="white" stroke="black" strokeWidth="4" strokeLinejoin="round" />
          <circle cx="70" cy="50" r="4" fill="black" />
          <circle cx="95" cy="50" r="4" fill="black" />
          <path d="M78 55 Q82 60 87 55" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="60" cy="55" rx="5" ry="3" fill="#f472b6" opacity="0.6"/>
          <ellipse cx="105" cy="55" rx="5" ry="3" fill="#f472b6" opacity="0.6"/>
        </svg>
      </motion.div>

      {/* Milk Carton */}
      <motion.div 
         className="absolute top-36 -left-6 w-32 h-44 origin-center"
         animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 150" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           <path d="M20 50 L50 20 L80 50 L80 130 L20 130 Z" fill="#f8fafc" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <path d="M20 50 L50 20 L80 50" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <path d="M35 35 L65 35" stroke="black" strokeWidth="4" />
           {/* Milk face */}
           <circle cx="40" cy="90" r="4" fill="black" />
           <circle cx="60" cy="90" r="4" fill="black" />
           <path d="M48 95 Q50 100 52 95" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
           <circle cx="35" cy="95" r="3" fill="#fecdd3" opacity="0.8" />
           <circle cx="65" cy="95" r="3" fill="#fecdd3" opacity="0.8" />
           <rect x="35" y="60" width="30" height="15" rx="4" fill="#a5f3fc" stroke="black" strokeWidth="2" />
           <text x="38" y="71" fontSize="10" fill="black" fontWeight="bold">MILK</text>
        </svg>
      </motion.div>

      {/* Rainbow Arc */}
      <motion.div
        className="absolute -top-4 -right-6 w-44 h-36 origin-center"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform rotate-12">
           <path d="M10 80 A 40 40 0 0 1 90 80" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" />
           <path d="M20 80 A 30 30 0 0 1 80 80" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
           <path d="M30 80 A 20 20 0 0 1 70 80" fill="none" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
           <path d="M40 80 A 10 10 0 0 1 60 80" fill="none" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
           <circle cx="10" cy="80" r="10" fill="white" stroke="black" strokeWidth="2" />
           <circle cx="20" cy="85" r="8" fill="white" stroke="black" strokeWidth="2" />
           <circle cx="90" cy="80" r="10" fill="white" stroke="black" strokeWidth="2" />
           <circle cx="80" cy="85" r="8" fill="white" stroke="black" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Heart */}
      <motion.div 
         className="absolute top-36 right-4 w-28 h-28 origin-center"
         animate={{ scale: [1, 1.1, 1], rotate: [10, -5, 10] }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
          <path d="M50 85 C20 50, 10 30, 20 15 C30 0, 50 10, 50 25 C50 10, 70 0, 80 15 C90 30, 80 50, 50 85 Z" fill="#ec4899" stroke="black" strokeWidth="4" strokeLinejoin="round" />
          <path d="M25 25 A 15 15 0 0 1 40 15" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </svg>
      </motion.div>
      
      {/* Sparkles Top Right */}

      {/* -------------------- */}
      {/*    BOTTOM CLUSTER    */}
      {/* -------------------- */}
      
      {/* Bear Face */}
      <motion.div 
         className="absolute bottom-36 -left-6 w-36 h-36 origin-center"
         animate={{ rotate: [-10, 10, -10] }}
         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           {/* Ears */}
           <circle cx="25" cy="25" r="15" fill="#fcd34d" stroke="black" strokeWidth="4" />
           <circle cx="75" cy="25" r="15" fill="#fcd34d" stroke="black" strokeWidth="4" />
           <circle cx="25" cy="25" r="6" fill="#fef3c7" stroke="black" strokeWidth="2" />
           <circle cx="75" cy="25" r="6" fill="#fef3c7" stroke="black" strokeWidth="2" />
           {/* Face */}
           <circle cx="50" cy="55" r="40" fill="#fcd34d" stroke="black" strokeWidth="4" />
           {/* Eyes */}
           <circle cx="35" cy="50" r="5" fill="black" />
           <circle cx="65" cy="50" r="5" fill="black" />
           {/* Snout */}
           <ellipse cx="50" cy="65" rx="15" ry="12" fill="#fef3c7" stroke="black" strokeWidth="3" />
           <ellipse cx="50" cy="60" rx="5" ry="3" fill="black" />
           <path d="M50 63 L50 68" stroke="black" strokeWidth="2" />
           <path d="M45 70 Q50 72 55 70" fill="none" stroke="black" strokeWidth="2" />
           {/* Blush */}
           <circle cx="25" cy="60" r="4" fill="#fca5a5" opacity="0.8" />
           <circle cx="75" cy="60" r="4" fill="#fca5a5" opacity="0.8" />
        </svg>
      </motion.div>

      {/* Strawberry */}
      <motion.div
        className="absolute -bottom-4 -left-4 w-36 h-36 origin-center transform -rotate-12"
        animate={{ y: [-5, 5, -5], rotate: [-20, -10, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
         <svg viewBox="0 0 100 100" style={{ filter: 'url(#sticker)' }} className="w-full h-full">
           <path d="M20 30 C10 60, 40 90, 50 90 C60 90, 90 60, 80 30 C70 10, 30 10, 20 30 Z" fill="#ef4444" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
           <path d="M50 25 C40 10, 20 15, 20 15 C30 25, 45 25, 50 25 C55 25, 70 25, 80 15 C80 15, 60 10, 50 25 Z" fill="#22c55e" stroke="black" strokeWidth="4" strokeLinejoin="round"/>
           <circle cx="35" cy="45" r="2" fill="white" />
           <circle cx="65" cy="45" r="2" fill="white" />
           <circle cx="50" cy="65" r="2" fill="white" />
           <circle cx="40" cy="55" r="3" fill="black" />
           <circle cx="60" cy="55" r="3" fill="black" />
           <path d="M47 58 Q50 62 53 58" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
         </svg>
      </motion.div>

      {/* Bubble Tea */}
      <motion.div 
         className="absolute -bottom-4 -right-4 w-40 h-52 origin-center"
         animate={{ rotate: [-5, 5, -5], y: [0, -5, 0] }}
         transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 150" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform -rotate-12">
           <path d="M30 40 L25 120 C 25 130, 35 140, 50 140 C 65 140, 75 130, 75 120 L70 40 Z" fill="#fecaca" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           {/* Lid */}
           <ellipse cx="50" cy="40" rx="25" ry="10" fill="white" stroke="black" strokeWidth="4" />
           <path d="M25 40 Q50 60 75 40" fill="none" stroke="black" strokeWidth="2" />
           {/* Straw */}
           <path d="M50 45 L60 10" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
           <path d="M50 45 L60 10" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
           {/* Boba */}
           <circle cx="40" cy="125" r="5" fill="black" />
           <circle cx="55" cy="130" r="5" fill="black" />
           <circle cx="65" cy="120" r="5" fill="black" />
           <circle cx="35" cy="115" r="5" fill="black" />
           <circle cx="50" cy="110" r="5" fill="black" />
           <circle cx="62" cy="105" r="5" fill="black" />
           {/* Face */}
           <circle cx="42" cy="80" r="3" fill="black" />
           <circle cx="58" cy="80" r="3" fill="black" />
           <path d="M48 85 Q50 88 52 85" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Ribbon */}
      <motion.div 
         className="absolute bottom-36 right-8 w-36 h-20 origin-center"
         animate={{ rotate: [-20, -10, -20], x: [0, 5, 0] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 80" style={{ filter: 'url(#sticker)' }} className="w-full h-full transform 1rotate-12">
           <path d="M50 40 L20 10 L20 70 Z" fill="#ec4899" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <path d="M50 40 L80 10 L80 70 Z" fill="#ec4899" stroke="black" strokeWidth="4" strokeLinejoin="round" />
           <circle cx="50" cy="40" r="12" fill="white" stroke="black" strokeWidth="4" />
        </svg>
      </motion.div>

      {/* Star */}

    </div>
  );
};
