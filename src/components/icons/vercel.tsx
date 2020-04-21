import React from 'react';
import { useTheme } from '@zeit-ui/react';

const VercelIcon = ({ width = 24, height = 24 }: any) => {
  const theme = useTheme();
  return (
    <svg width={width} height={height} viewBox="0 0 75 65" fill={theme.palette.foreground}>
      <path d="M37.59.25l36.95 64H.64l36.95-64z" />
    </svg>
  );
};

export default VercelIcon;
