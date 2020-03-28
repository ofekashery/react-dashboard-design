import React from 'react';
import { useTheme } from '@zeit-ui/react';

const MoonIcon = ({ width = 24, height = 24 }: any) => {
  const theme = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      style={{ color: theme.palette.accents_5 }}
    >
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
};

export default MoonIcon;
