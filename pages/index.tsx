import React from 'react';
import NextLink from 'next/link';
import { Text, Link, useTheme } from '@geist-ui/react';
import Heading from '@/components/heading';
import EventListItem from '@/components/activity-event';
import OverviewProject from '@/components/overview-project';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AuthSession } from '@supabase/supabase-js';
import { Profile } from '../lib/constants';
import Auth from '../components/Auth';
import Account from '../components/Account';

const Page = () => {
  const theme = useTheme();

  const [session, setSession] = useState<AuthSession | null>(null);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  // console.log(session)

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event: string, session: AuthSession | null) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    getPublicProfiles();
  }, []);

  async function getPublicProfiles() {
    try {
      const { data, error } = await supabase
        .from<Profile>('profiles')
        .select('avatar_url, website, updated_at')
        .order('updated_at', { ascending: false });

      if (error || !data) {
        throw error || new Error('No data');
      }
      // console.log('Public profiles:', data);
      setProfiles(data);
    } catch (error) {
      console.log('error', error.message);
    }
  }
  if (!session) return <Auth />;

  return (
    <>
      <div className="page__wrapper">
        <div className="page__content">
          <div className="container" style={{ padding: '50px 0 100px 0' }}>
            <div className="row">
              <div className="col-6">
                <h3>Account</h3>
                <Account key={session.user.id} session={session} />
              </div>
              <div className="col-6">
                <h3>Public Profiles</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page__wrapper {
          background-color: ${theme.palette.accents_1};
          min-height: calc(100vh - 172px);
        }
        .page__content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: calc(${theme.layout.unit} * 2) ${theme.layout.pageMargin};
          box-sizing: border-box;
        }
        .actions-stack {
          display: flex;
          width: 100%;
        }
        .actions-stack :global(.input-wrapper) {
          background-color: ${theme.palette.background};
        }
        .actions-stack :global(input) {
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default Page;
