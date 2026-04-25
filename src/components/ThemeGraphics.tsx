import React from 'react';
import { ThemePurpleY2K } from './ThemePurpleY2K';
import { ThemeSkaterPunk } from './ThemeSkaterPunk';
import { ThemeCuteKawaii } from './ThemeCuteKawaii';
import { ThemeRetroTech } from './ThemeRetroTech';
import { ThemeNeonParty } from './ThemeNeonParty';
import { ThemeSpaceVoyage } from './ThemeSpaceVoyage';
import { ThemeGothicGrunge } from './ThemeGothicGrunge';

export type SupportedThemes = 'purple-y2k' | 'skater-punk' | 'cute-kawaii' | 'retro-tech' | 'neon-party' | 'space-voyage' | 'gothic-grunge';

interface ThemeGraphicsProps {
  theme: SupportedThemes;
}

export const ThemeGraphics: React.FC<ThemeGraphicsProps> = ({ theme }) => {
  return (
    <>
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <filter id="sticker" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="expand" />
            <feFlood floodColor="white" result="white" />
            <feComposite in="white" in2="expand" operator="in" result="outline" />
            <feMerge result="withOutline">
              <feMergeNode in="outline" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
            <feDropShadow dx="3" dy="5" stdDeviation="1" floodColor="rgba(0,0,0,0.7)" />
          </filter>
        </defs>
      </svg>

      {theme === 'purple-y2k' && <ThemePurpleY2K />}
      {theme === 'skater-punk' && <ThemeSkaterPunk />}
      {theme === 'cute-kawaii' && <ThemeCuteKawaii />}
      {theme === 'retro-tech' && <ThemeRetroTech />}
      {theme === 'neon-party' && <ThemeNeonParty />}
      {theme === 'space-voyage' && <ThemeSpaceVoyage />}
      {theme === 'gothic-grunge' && <ThemeGothicGrunge />}
    </>
  );
};
