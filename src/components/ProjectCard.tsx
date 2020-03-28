import React from 'react';
import {
  ZeitUIThemes,
  Button,
  Text,
  Link,
  Card,
  Dot,
  Tag
} from '@zeit-ui/react';
import makeStyles from '../makeStyles';

interface Props {
  projectId: string;
  created: string;
  repo: string;
}

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  card: {
    padding: '0 !important',
    marginBottom: `calc(${ui.layout.gap}*2) !important`
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: ui.layout.gap
  },
  content: {
    margin: `0 ${ui.layout.gap} ${ui.layout.gap} ${ui.layout.gap}`
  },
  created: {
    fontSize: 14,
    color: 'rgb(153, 153, 153) !important',
    margin: `0 0 0 ${ui.layout.gapHalf}`,
    textAlign: 'right'
  },
  visitButton: {},
  '@media screen and (max-width: 540px)': {
    created: {
      display: 'none !important'
    },
    visitButton: {
      display: 'none !important'
    }
  },
  dot: {
    display: 'flex !important',
    marginTop: ui.layout.gapQuarter,
    '& .icon': {
      backgroundColor: '#50e3c2 !important'
    },
    '& .label': {
      textTransform: 'none !important',
      display: 'flex',
      flex: 1,
      overflow: 'hidden'
    },
    '& .label a': {
      display: 'inline-block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontSize: 14,
      lineHeight: 'normal'
    },
    '& .link': {
      fontWeight: 500
    }
  },
  tag: {
    display: 'flex !important',
    alignItems: 'center',
    textTransform: 'capitalize !important',
    fontSize: '12px !important',
    padding: '3px 7px !important',
    borderRadius: '16px !important',
    height: 'unset !important',
    marginLeft: 8
  },
  footer: {
    display: 'flex !important',
    alignItems: 'center !important',
    height: 50,
    width: '100% !important',
    padding: `0 ${ui.layout.gap}`,
    borderTop: `solid 1px ${ui.palette.accents_2}`,
    borderRadius: `0 0 ${ui.layout.radius} ${ui.layout.radius}`
  },
  repo: {
    fontSize: 14,
    fontWeight: 500,
    marginLeft: '6px !important'
  }
}));

const ProjectCard = ({ projectId, created, repo }: Props) => {
  const classes = useStyles();
  return (
    <Card shadow className={classes.card}>
      <div className={classes.title}>
        <Text h3>{projectId}</Text>
        <Button className={classes.visitButton} size="small" auto>
          Visit
        </Button>
      </div>
      <div className={classes.content}>
        <Dot type="success" className={classes.dot}>
          <Link href={`https://${projectId}.now.sh`} target="_blank" pure>
            {projectId}.now.sh
          </Link>
          <Tag className={classes.tag}>Production</Tag>
          <span className={classes.created}>{created}</span>
        </Dot>
        <Dot type="success" className={classes.dot}>
          <Link href={`https://${projectId}.now.sh`} target="_blank" pure>
            {projectId}-oa71gi2.now.sh
          </Link>
          <Tag className={classes.tag}>Latest</Tag>
          <span className={classes.created}>{created}</span>
        </Dot>
      </div>
      <Link
        href={`https://github.com/${repo}`}
        target="_blank"
        className={classes.footer}
        pure
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-label="github">
          <path
            d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
            fill="currentColor"
            fillRule="nonzero"
          ></path>
        </svg>
        <Text className={classes.repo}>{repo}</Text>
      </Link>
    </Card>
  );
};

export default ProjectCard;
