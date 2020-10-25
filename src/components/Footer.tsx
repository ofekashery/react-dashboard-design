import React from 'react';
import { GeistUIThemes, Text, Link, Image } from '@geist-ui/react';
import makeStyles from '../makeStyles';

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  root: {
    padding: '8px 42px',
    borderTop: `solid 1px ${ui.palette.accents_2}`,
    textAlign: 'center',
    display: 'flex',
    flexdirection: 'row',
    alignItems: 'center'
  },
  logo: {
    // border: `1px solid ${ui.palette.accents_2}`,
    borderRadius: '50% !important',
    margin: '0 6px 0 0 !important'
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    root: {
      textAlign: 'start !important'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Image className={classes.logo} src="/assets/geist.png" width={32} height={32} title="Geist Logo" />
      <Text>
        Made with{' '}
        <Link href="https://github.com/geist-org" target="_blank" rel="noopener" pure underline>
          Geist
        </Link>
        .
      </Text>
    </div>
  );
};

export default Footer;
