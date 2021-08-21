import React from 'react';
import { Avatar, Button, Text, Link, Card, Dot, Tag, useTheme } from '@geist-ui/react';
import GitHubIcon from '@/components/icons/github';

interface Props {
  projectId: string;
  productionHostname?: string;
  framework: string;
  git?: {
    repo: string;
    commitMessage: string;
  };
  updatedAt: string;
}

export type ProjectCardProps = Props;

const ProjectCard: React.FC<ProjectCardProps> = ({ projectId, productionHostname, updatedAt, git, framework }) => {
  const theme = useTheme();

  return (
    <>
      <div className="project__wrapper">
        <Card className="project__card" shadow>
          <div className="project-title__wrapper">
            <Avatar
              src={`https://raw.githubusercontent.com/vercel/vercel/main/packages/frameworks/logos/${framework}.svg`}
              height={1.25}
              width={1.25}
              marginRight={0.75}
              className="project-icon"
            />
            <div className="project-title__content">
              <Text margin={0} style={{ fontWeight: 500, lineHeight: '1.5rem' }}>
                {projectId}
              </Text>
              <Text margin={0} font="0.875rem" style={{ color: theme.palette.accents_6, lineHeight: '1.25rem' }}>
                {productionHostname || `${projectId}.vercel.app`}
              </Text>
            </div>
          </div>
          {git ? (
            <div className="project-git-commit">
              <Text margin={0} style={{ color: theme.palette.accents_6, fontWeight: 500 }}>
                {git?.commitMessage}
              </Text>
            </div>
          ) : (
            <div className="project-git-commit-error">No Git Repository connected.</div>
          )}
          <Text marginBottom={0} font="0.875rem" style={{ color: theme.palette.accents_5 }}>
            {updatedAt} ago
            {git && (
              <>
                {' '}
                via
                <GitHubIcon
                  color={theme.palette.foreground}
                  height="1rem"
                  width="1rem"
                  strokeWidth={2}
                  style={{ verticalAlign: 'middle', marginLeft: `calc(${theme.layout.unit} * 0.375)` }}
                />
              </>
            )}
          </Text>
        </Card>
      </div>
      <style jsx>{`
        .project__wrapper {
          width: 100%;
        }
        .project__wrapper :global(.project__card) {
          box-shadow: ${theme.type === 'dark' ? theme.expressiveness.shadowSmall : '0px 2px 4px rgba(0,0,0,0.1)'};
        }
        .project__wrapper :global(.project__card):hover {
          box-shadow: ${theme.type === 'dark'
            ? `0 0 0 1px ${theme.palette.foreground}`
            : '0px 4px 8px rgba(0,0,0,0.12)'};
        }
        .project-title__wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .project-title__wrapper :global(.project-icon) {
          background: #fff;
          border-radius: 50%;
          border: ${theme.type === 'dark' ? `1px solid ${theme.palette.foreground}` : 'none'};
        }
        .project-git-commit,
        .project-git-commit-error {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 3rem;
          margin: 1rem 0;
          font-size: 0.875rem;
        }
        .project-git-commit-error {
          padding: 0 ${theme.layout.unit};
          border-radius: ${theme.layout.radius};
          background: ${theme.palette.accents_1};
          border: 1px solid ${theme.palette.border};
          color: ${theme.palette.accents_5};
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
