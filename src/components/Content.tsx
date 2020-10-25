import React from 'react';
import { GeistUIThemes, Text, Link } from '@geist-ui/react';
import makeStyles from '../makeStyles';
import EventListItem from './EventListItem';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  root: {
    backgroundColor: ui.palette.accents_1
  },
  content: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    boxSizing: 'border-box',
    margin: '0 auto',
    padding: `0 ${ui.layout.pageMargin}`,
    transform: 'translateY(-35px)'
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 1,
    maxWidth: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  projects: {
    width: '100%'
  },
  activity: {
    flex: 1
  },
  [`@media screen and (min-width: ${ui.layout.pageWidthWithMargin})`]: {
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    projects: {
      width: 540,
      maxWidth: '100%',
      marginRight: 80
    },
    activityTitle: {
      marginTop: '0 !important',
      marginBottom: 30,
      fontSize: '14px !important',
      textAlign: 'start !important'
    },
    viewAll: {
      marginBottom: '0 !important',
      textAlign: 'start !important'
    }
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: ui.layout.gap,
    textAlign: 'center'
  },
  activityTitle: {
    fontWeight: 700,
    marginTop: ui.layout.gap,
    fontSize: 24,
    textAlign: 'center'
  }
}));

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.row}>
          <div className={classes.projects}>
            <ProjectCard projectId="react-dashboard-design" repo="ofekashery/react-dashboard-design" created="4m" />
            <ProjectCard projectId="personal-website" repo="ofekashery/personal-website" created="2d" />
            <ProjectCard projectId="docs" repo="github/docs" created="5d" />
            <Text className={classes.viewAll}>
              <Link color pure>
                View All Projects
              </Link>
            </Text>
          </div>
          <div className={classes.activity}>
            <Text h2 className={classes.activityTitle}>
              Recent Activity
            </Text>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" created="4m">
              You deployed react-dashboard-design to <b>production</b>
            </EventListItem>
            <EventListItem username="dependabot" avatar="/assets/dependabot.png" created="2d">
              Dependabot deployed docs to <b>docs-git-dependabot-npmelliptic-653.vercel.app</b>
            </EventListItem>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" created="3d">
              You deployed personal-website to <b>production</b>
            </EventListItem>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" created="9d">
              You deployed personal-website to <b>production</b>
            </EventListItem>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" created="9d">
              You created project <b>personal-website</b>
            </EventListItem>
            <Text className={classes.viewAll}>
              <Link color pure>
                View All Activity
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
