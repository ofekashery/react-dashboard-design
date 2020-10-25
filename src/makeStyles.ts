import { createUseStyles } from 'react-jss';
import { GeistUIThemes, useTheme } from '@geist-ui/react';

const useStyles = (styles: ((ui: GeistUIThemes) => any) | any) => {
  const theme: GeistUIThemes = useTheme();
  if (typeof styles === 'function') {
    styles = styles(theme);
  }
  return createUseStyles(styles)();
};

const makeStyles = (styles: ((ui: GeistUIThemes) => any) | any) => {
  return () => useStyles(styles);
};
export default makeStyles;
