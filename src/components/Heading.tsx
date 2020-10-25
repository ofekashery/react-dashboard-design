import React from 'react';
import { GeistUIThemes, Avatar, Button, Text, Link } from '@geist-ui/react';
import makeStyles from '../makeStyles';
import * as Icons from 'react-feather';

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  root: {
    borderBottom: `solid 1px ${ui.palette.accents_2}`
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 4)`,
    boxSizing: 'border-box',
    margin: '0 auto'
  },
  avatar: {
    width: '100px !important',
    height: '100px !important',
    marginRight: '30px !important'
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    lineHeight: 1
  },
  createProjectButton: {},
  [`@media screen and (max-width: ${ui.layout.pageWidthWithMargin})`]: {
    createProjectButton: {
      display: 'none !important'
    },
    avatar: {
      width: '80px !important',
      height: '80px !important',
      marginRight: '20px !important'
    },
    username: {
      fontSize: 24
    }
  },
  integrationsTitle: {
    textTransform: 'uppercase',
    color: `${ui.palette.accents_5} !important`,
    fontWeight: 500,
    fontSize: 12,
    margin: 0
  },
  integrationsUsername: {
    margin: '0 0 0 4px',
    fontWeight: 0
  }
}));

const Heading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Avatar alt="Your Avatar" className={classes.avatar} src="/assets/avatar.png" />
        <div className={classes.name}>
          <div className={classes.title}>
            <Text h2 className={classes.username}>
              Ofek Ashery
            </Text>
            <Button className={classes.createProjectButton} type="secondary" auto>
              Create Project
            </Button>
          </div>
          <div>
            <Text className={classes.integrationsTitle}>Git Integrations</Text>
            <Link href="https://github.com/ofekashery" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icons.GitHub size={16} aria-label="Github" />
                <Text className={classes.integrationsUsername}>ofekashery</Text>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
