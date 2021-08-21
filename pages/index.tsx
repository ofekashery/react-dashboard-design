import React from 'react';
import NextLink from 'next/link';
import { Text, Link, useTheme } from '@geist-ui/react';
import Heading from '@/components/heading';
import EventListItem from '@/components/activity-event';
import OverviewProject from '@/components/overview-project';

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <Heading user={{ name: 'Ofek Ashery', role: 'Admin', github: 'ofekashery' }} />
      <div className="page__wrapper">
        <div className="page__content">
          <div className="projects">
            <OverviewProject
              projectId="react-dashboard-design"
              repo="ofekashery/react-dashboard-design"
              createdAt="4m"
            />
            <OverviewProject projectId="personal-website" repo="ofekashery/personal-website" createdAt="2d" />
            <OverviewProject projectId="docs" repo="github/docs" createdAt="5d" />
            <NextLink href="/projects" passHref>
              <Link className="view-all" color underline>
                View All Projects
              </Link>
            </NextLink>
          </div>
          <div className="recent-activity">
            <Text h2 className="recent-activity__title">
              Recent Activity
            </Text>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="4m">
              You deployed react-dashboard-design to <b>production</b>
            </EventListItem>
            <EventListItem username="dependabot" avatar="/assets/dependabot.png" createdAt="2d">
              Dependabot deployed docs to <b>docs-git-dependabot-npmelliptic-653.vercel.app</b>
            </EventListItem>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="3d">
              You deployed personal-website to <b>production</b>
            </EventListItem>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="9d">
              You deployed personal-website to <b>production</b>
            </EventListItem>
            <EventListItem username="ofekashery" avatar="/assets/avatar.png" createdAt="9d">
              You created project <b>personal-website</b>
            </EventListItem>
            <NextLink href="/activity" passHref>
              <Link className="view-all" color underline>
                View All Activity
              </Link>
            </NextLink>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          background-color: ${theme.palette.accents_1};
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          transform: translateY(-35px);
          box-sizing: border-box;
        }
        .projects {
          width: 540px;
          max-width: 100%;
          margin-right: calc(4 * ${theme.layout.gap});
        }
        .projects :global(.project__wrapper):not(:last-of-type) {
          margin-bottom: calc(1.5 * ${theme.layout.gap});
        }
        .recent-activity {
          flex: 1;
        }
        .recent-activity :global(.recent-activity__title) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: 0 0 calc(3 * ${theme.layout.gapHalf});
        }
        .page__content :global(.view-all) {
          font-size: 0.875rem;
          font-weight: 700;
          margin: calc(1.5 * ${theme.layout.gap}) 0;
          text-align: center;
        }
        @media (max-width: ${theme.breakpoints.sm.max}) {
          .page__content {
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
          }
          .projects {
            width: 100%;
            margin-right: unset;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
