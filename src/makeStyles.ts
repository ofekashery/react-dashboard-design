import { createUseStyles } from 'react-jss';
import { useTheme } from '@zeit-ui/react';
import Theme from '../typings/Theme';

const useStyles = (styles: ((ui: Theme) => any) | any) => {
  const theme: Theme = useTheme();
  if (typeof styles === 'function') {
    styles = styles(theme);
  }
  return createUseStyles(styles)();
};

const makeStyles = (styles: ((ui: Theme) => any) | any) => {
  return () => useStyles(styles);
};
export default makeStyles;
