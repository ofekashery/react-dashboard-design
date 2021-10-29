import React from 'react';
import NextLink from 'next/link';
import { Avatar, Button, Tag, Text, Link, useTheme } from '@geist-ui/react';
import * as Icons from 'react-feather';

interface Props {
  head: { name: string; role: string; github?: string; button?: string };
}

export type HeadingProps = Props;

const Heading: React.FC<HeadingProps> = ({ head }) => {
  const theme = useTheme();

  return (
    <>
      <div className="heading__wrapper">
        <div className="heading">
          {/* <Avatar alt="Your Avatar" className="heading__head-avatar" src="/assets/avatar.png" /> */}
          <div className="heading__name">
            <div className="heading__title">
              <Text h3 className="headding__head-name">
                {head.name}
              </Text>
              {head.role && <Tag className="headding__head-role">{head.role}</Tag>}

              {head.button && (
                <div className="heading__actions">
                  <NextLink href="/projects" passHref>
                    <Button type="secondary" auto>
                      Create Project
                    </Button>
                  </NextLink>
                </div>
              )}
            </div>

            {head.github && (
              <div className="heading__integration">
                <Text className="heading__integration-title">Git Integrations</Text>
                <Link
                  href={`https://github.com/${head.github}`}
                  target="_blank"
                  rel="noopener"
                  underline
                >
                  <div className="heading__integration-inner">
                    <Icons.GitHub size={16} aria-label="Github" />
                    <span>{head.github}</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .heading__wrapper {
          border-bottom: 1px solid ${theme.palette.border};
        }
        .heading {
          display: flex;
          flex-direction: row;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: calc(${theme.layout.gap} * 2) ${theme.layout.pageMargin}
            calc(${theme.layout.gap} * 2);
          box-sizing: border-box;
        }
        .heading :global(.heading__head-avatar) {
          height: 100px;
          width: 100px;
          margin-right: ${theme.layout.gap};
        }
        .heading__title {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex: 1;
        }
        .heading__name {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .heading__name :global(.headding__head-name) {
          line-height: 1;
        }
        .heading__name :global(.headding__head-role) {
          background: ${theme.palette.accents_1};
          border-color: ${theme.palette.accents_2};
          border-radius: 1rem;
          padding: 0.175rem 0.5rem;
          height: unset;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          margin-left: ${theme.layout.gapQuarter};
        }
        .heading__actions {
          margin-left: auto;
        }
        .heading__integration :global(.heading__integration-title) {
          color: ${theme.palette.accents_5} !important;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          margin: 0;
        }
        .heading__integration-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .heading__integration-inner :global(svg) {
          margin-right: ${theme.layout.gapQuarter};
        }

        @media (max-width: ${theme.breakpoints.xs.max}) {
          .heading :global(.heading__head-avatar) {
            width: 80px !important;
            height: 80px !important;
          }
          .heading__name :global(.headding__head-name) {
            font-size: 1.5rem;
          }
          .heading__actions {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Heading;
