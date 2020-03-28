import React from 'react';
import { Avatar, Button, Text, Link } from '@zeit-ui/react';
import makeStyles from '../makeStyles';
import Theme from '../../typings/Theme';

const useStyles = makeStyles((ui: Theme) => ({
  root: {
    padding: '45px 20px 90px',
    borderBottom: `solid 1px ${ui.palette.accents_2}`
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: 1024,
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
  '@media screen and (max-width: 1040px)': {
    createProjectButton: {
      display: 'none !important'
    },
    avatar: {
      width: '80px !important',
      height: '80px !important'
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
        <Avatar
          // alt="Your Avatar"
          className={classes.avatar}
          src="https://zeit.co/api/www/avatar/?u=evilrabbit&s=180"
        />
        <div className={classes.name}>
          <div className={classes.title}>
            <Text h2 className={classes.username}>
              Evil Rabbit
            </Text>
            <Button
              className={classes.createProjectButton}
              type="secondary"
              auto
            >
              Create Project
            </Button>
          </div>
          <div>
            <Text className={classes.integrationsTitle}>Git Integrations</Text>
            <Link
              href="https://github.com/ofekashery"
              target="_blank"
              pure
              underline
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  aria-label="github"
                >
                  <path
                    d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </svg>
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
