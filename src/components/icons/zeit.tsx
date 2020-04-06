import React from 'react';
import { useTheme } from '@zeit-ui/react';

const ZeitIcon = ({ width = 24, height = 24 }: any) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <svg width={width} height={height} viewBox="0 0 226 200" aria-label="zeit">
      <defs>
        <linearGradient x1="196.572%" y1="228.815%" x2="50%" y2="50%" id="logo-1">
          <stop offset="0%" stopColor={theme.palette.background} />
          <stop offset="100%" stopColor={theme.palette.foreground} />
        </linearGradient>
      </defs>
      <path fill="url(#logo-1)" d="M254 156.46L367 356H141z" transform="translate(-141 -156)"></path>
    </svg>
  );
};

export default ZeitIcon;
