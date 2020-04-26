import React from 'react';
import { ZeitUIThemes, Text, Link, Code } from '@zeit-ui/react';
import makeStyles from '../makeStyles';

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  root: {
    padding: '8px 42px',
    borderTop: `solid 1px ${ui.palette.accents_2}`,
    textAlign: 'center'
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
      <Text>
        {'Created by '}
        <Link href="https://github.com/ofekashery" target="_blank" rel="noopener" pure underline>
          Ofek Ashery
        </Link>
        {' using '}
        <Link href="https://github.com/zeit-ui/react" target="_blank" rel="noopener" pure>
          <Code>@zeit-ui/react</Code>
        </Link>
        .
      </Text>
    </div>
  );
};

export default Footer;
