/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CuratedThemeLayout } from './components/CuratedThemeLayout';
import { SupportedThemes } from './components/ThemeGraphics';

export default function App() {
  const [theme, setTheme] = useState<SupportedThemes>('purple-y2k');

  // Define logic for text color based on background lightness
  const isLightText = !['cute-kawaii', 'retro-tech'].includes(theme);

  return (
    <>
      {/* Theme Switcher */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2 bg-white/90 p-2 rounded-full shadow-lg border-2 border-black backdrop-blur-sm max-w-[90vw] overflow-x-auto overflow-y-hidden">
        <button onClick={() => setTheme('purple-y2k')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'purple-y2k' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#6b4c9a' }} title="Purple Y2K" />
        <button onClick={() => setTheme('skater-punk')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'skater-punk' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#dc2626' }} title="Skater Punk" />
        <button onClick={() => setTheme('cute-kawaii')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'cute-kawaii' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#a5f3fc' }} title="Cute Kawaii" />
        <button onClick={() => setTheme('retro-tech')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'retro-tech' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#cbd5e1' }} title="Retro Tech" />
        <button onClick={() => setTheme('neon-party')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'neon-party' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#0f172a' }} title="Neon Party" />
        <button onClick={() => setTheme('space-voyage')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'space-voyage' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#1e1b4b' }} title="Space Voyage" />
        <button onClick={() => setTheme('gothic-grunge')} className={`shrink-0 w-8 h-8 rounded-full border-2 border-black transition-transform ${theme === 'gothic-grunge' ? 'scale-110 ring-2 ring-black' : 'hover:scale-105'}`} style={{ backgroundColor: '#1c1917' }} title="Gothic Grunge" />
      </div>

      <CuratedThemeLayout theme={theme}>
        <div className="relative mt-2">
          <div className="w-24 h-24 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.5)] overflow-hidden relative z-10 mx-auto border-2 border-white/50">
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" 
              className="w-full h-full object-cover p-1 bg-white/20 rounded-full" 
              alt="Avatar" 
            />
          </div>
        </div>

        <div className="mt-4 text-center z-10 relative w-full">
          <h1 className={`text-xl font-bold tracking-wide break-words ${!isLightText ? 'text-black drop-shadow-[0_2px_0px_rgba(255,255,255,0.8)]' : 'text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'}`}>
            @eddycreadordigital
          </h1>
          <p className={`font-bold mt-3 mx-auto max-w-[220px] text-[13px] leading-relaxed ${!isLightText ? 'text-black drop-shadow-[0_1px_0px_rgba(255,255,255,0.8)]' : 'text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]'}`}>
            Creador de Sitios Web y Aplicaciones Digitales
          </p>
        </div>
        
        <div className="w-full mt-12 space-y-4 z-10 relative">
          <button className="w-full py-4 bg-white text-slate-800 rounded-3xl font-bold text-sm shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-[4px] border-[3px] border-black transition-all">
            Contact Form
          </button>
        </div>
      </CuratedThemeLayout>
    </>
  );
}
