import React from 'react';
import { Text, Link, Code } from '@zeit-ui/react';
import makeStyles from '../makeStyles';
import Theme from '../../typings/Theme';

const useStyles = makeStyles((ui: Theme) => ({
  root: {
    padding: '0 40px',
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
        <Link
          href="https://github.com/ofekashery"
          target="_blank"
          pure
          underline
        >
          Ofek Ashery
        </Link>
        {' using '}
        <Link href="https://github.com/zeit-ui/react" target="_blank" pure>
          <Code>@zeit-ui/react</Code>
        </Link>
        .
      </Text>
    </div>
  );
};

export default Footer;
