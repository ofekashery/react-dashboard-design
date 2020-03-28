import React from 'react';
import { ZeitUIThemes, Avatar, Button, Tabs, useTheme } from '@zeit-ui/react';
import makeStyles from '../makeStyles';
import MoonIcon from './icons/moon';
import SunIcon from './icons/sun';

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  header: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: ui.palette.background,
    fontSize: 16,
    height: 60,
    zIndex: 15
  },
  headerContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${ui.layout.pageMargin}`
  },
  headerTitle: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10
  },
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: ui.palette.background,
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    zIndex: 15
  },
  navContent: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    '& .tabs header': {
      padding: `0 ${ui.layout.pageMargin}`,
      borderBottom: 'none !important',
      flexWrap: 'nowrap !important',
      overflowY: 'hidden',
      overflowX: 'auto',
      overflow: '-moz-scrollbars-none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '& .content': {
      display: 'none !important'
    },
    '& .tab': {
      padding: '12px !important',
      margin: '0 !important',
      fontSize: '14px !important'
    }
  },
  sidebar: {
    display: 'flex',
    alignItems: 'center !important'
  },
  themeIcon: {
    width: '40px !important',
    height: '40px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginRight: 5,
    padding: '0 !important'
  }
}));

const Menu = ({ toggleDarkMode }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const isDark = theme.type === 'dark';
  const switchThemes = () => toggleDarkMode(theme);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <div style={{ display: 'flex' }}>
            <svg viewBox="0 0 226 200" width={28} height={25}>
              <path d="M113 0.5L226 200H0z" fill="currentColor" />
            </svg>
            <div className={classes.headerTitle}>ZEIT Dashboard Dashboard</div>
          </div>
          <div className={classes.sidebar}>
            <Button
              aria-label="Toggle Dark mode"
              className={classes.themeIcon}
              auto
              type="abort"
              onClick={switchThemes}
            >
              {isDark ? (
                <SunIcon width={16} height={16} />
              ) : (
                <MoonIcon width={16} height={16} />
              )}
            </Button>
            <Avatar text="OA" />
          </div>
        </div>
      </div>
      <nav className={classes.nav}>
        <div className={classes.navContent}>
          <Tabs initialValue="1">
            <Tabs.Item label="Overview" value="1"></Tabs.Item>
            <Tabs.Item label="Projects" value="2"></Tabs.Item>
            <Tabs.Item label="Integrations" value="3"></Tabs.Item>
            <Tabs.Item label="Activity" value="4"></Tabs.Item>
            <Tabs.Item label="Domains" value="5"></Tabs.Item>
            <Tabs.Item label="Usage" value="6"></Tabs.Item>
            <Tabs.Item label="Settings" value="7"></Tabs.Item>
          </Tabs>
        </div>
      </nav>
    </>
  );
};

export default Menu;
