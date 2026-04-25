import React from 'react';
import { ThemeGraphics, SupportedThemes } from './ThemeGraphics';

export interface CuratedThemeLayoutProps {
  children: React.ReactNode;
  theme: SupportedThemes;
}

export const CuratedThemeLayout: React.FC<CuratedThemeLayoutProps> = ({ children, theme }) => {
  let cardClass = "";
  
  if (theme === 'purple-y2k') {
    cardClass = "bg-[#6b4c9a] border-[#5a3e82]";
  } else if (theme === 'skater-punk') {
    cardClass = "bg-[#dc2626] border-[#991b1b]";
  } else if (theme === 'cute-kawaii') {
    cardClass = "bg-[#a5f3fc] border-[#67e8f9]";
  } else if (theme === 'retro-tech') {
    cardClass = "bg-[#cbd5e1] border-[#94a3b8]";
  } else if (theme === 'neon-party') {
    cardClass = "bg-[#0f172a] border-[#334155]";
  } else if (theme === 'space-voyage') {
    cardClass = "bg-[#1e1b4b] border-[#312e81]";
  } else if (theme === 'gothic-grunge') {
    cardClass = "bg-[#1c1917] border-[#44403c]";
  }

  return (
    <div className="min-h-[100dvh] w-full bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-6" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
      {/* Contenedor principal de la tarjeta */}
      <div className={`relative w-full max-w-[380px] rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-2 overflow-hidden flex flex-col min-h-[720px] transition-colors duration-500 ${cardClass}`}>
        
        {/* ELEMENTOS GRÁFICOS (Estilo Scrapbook Y2K) */}
        <ThemeGraphics theme={theme} />

        {/* CONTENIDO (La info del usuario) */}
        <div className="relative z-10 flex flex-col items-center pt-24 px-6 pb-8 h-full">
          {children}
        </div>
      </div>
    </div>
  );
};
