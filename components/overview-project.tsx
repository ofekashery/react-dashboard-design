import React from 'react';
import { Button, Text, Link, Card, Dot, Tag, useTheme } from '@geist-ui/react';
import * as Icons from 'react-feather';

interface Props {
  projectId: string;
  createdAt: string;
  repo: string;
}

export type OverviewProjectProps = Props;

const OverviewProject: React.FC<OverviewProjectProps> = ({ projectId, createdAt, repo }) => {
  const theme = useTheme();

  return (
    <>
      <div className="project__wrapper">
        <Card className="project__card" shadow>
          <div className="project__title">
            <Text h3>{projectId}</Text>
            <Button className="project__visit-button" height={0.8} auto>
              Visit
            </Button>
          </div>
          <div>
            <Dot className="project__deployment" type="success">
              <Link href="#">{projectId}.vercel.app</Link>
              <Tag className="project__environment-tag" type="secondary">
                Production
              </Tag>
              <span className="project__created-at">{createdAt}</span>
            </Dot>
            <Dot className="project__deployment" type="success">
              <Link href="#">{projectId}-oa71gi2.vercel.app</Link>
              <Tag className="project__environment-tag" type="secondary">
                Latest
              </Tag>
              <span className="project__created-at">{createdAt}</span>
            </Dot>
          </div>
          <Card.Footer className="project__footer">
            <Icons.GitHub size={14} />
            <Text className="project__repo">{repo}</Text>
          </Card.Footer>
        </Card>
      </div>
      <style jsx>{`
        .project__wrapper :global(.project__card) {
          padding: 0 !important;
        }
        .project__title {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: ${theme.layout.gap};
        }
        .project__title :global(h3) {
          margin: 0;
        }
        .project__wrapper :global(.project__deployment) {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: ${theme.layout.gapQuarter};
        }
        .project__wrapper :global(.project__deployment) :global(.icon) {
          background-color: #50e3c2;
        }
        .project__wrapper :global(.project__deployment) :global(.label) {
          display: flex;
          align-items: center;
          flex: 1;
          overflow: hidden;
          text-transform: unset;
        }
        .project__wrapper :global(.project__deployment) :global(a) {
          font-size: 0.875rem;
          font-weight: 500;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .project__wrapper :global(.project__environment-tag) {
          color: ${theme.palette.foreground};
          background: ${theme.palette.accents_1};
          border-color: ${theme.palette.accents_2};
          border-radius: 1rem;
          padding: 2px 6px;
          height: unset;
          font-size: 0.75rem;
          font-weight: 500;
          margin-left: ${theme.layout.gapHalf};
        }
        .project__wrapper :global(.project__created-at) {
          color: ${theme.palette.accents_4};
          font-size: 0.875rem;
          text-align: right;
          margin: 0 0 0 ${theme.layout.gapHalf};
        }
        .project__wrapper :global(.project__footer) {
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        .project__wrapper :global(.project__repo) {
          font-size: 0.875rem;
          font-weight: 500;
          margin-left: ${theme.layout.gapQuarter};
        }
        @media (max-width: ${theme.breakpoints.xs.max}) {
          .project__wrapper :global(.project__visit-button) {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default OverviewProject;
