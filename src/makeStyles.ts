import { createUseStyles } from 'react-jss';
import { ZeitUIThemes, useTheme } from '@zeit-ui/react';

const useStyles = (styles: ((ui: ZeitUIThemes) => any) | any) => {
  const theme: ZeitUIThemes = useTheme();
  if (typeof styles === 'function') {
    styles = styles(theme);
  }
  return createUseStyles(styles)();
};

const makeStyles = (styles: ((ui: ZeitUIThemes) => any) | any) => {
  return () => useStyles(styles);
};
export default makeStyles;
