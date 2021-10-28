import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, useTheme, Popover } from '@geist-ui/react';
import * as Icons from 'react-feather';
import Submenu from '@/components/navigation/submenu';
import UserSettings from '@/components/navigation/user-settings';
import { usePrefers } from '@/lib/use-prefers';
import { supabase } from '@/lib/supabaseClient';
import { AuthSession } from '@supabase/supabase-js';
import AvatarIcon from '@/components/Avatar';
import { Profile } from '@/lib/constants';

export default function Menu({ session }: { session: AuthSession }) {
  const theme = useTheme();
  const prefers = usePrefers();

  // mulai
  const [loading, setLoading] = useState<boolean>(true);
  const [avatar, setAvatar] = useState<string | null>(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  function setProfile(profile: Profile) {
    setAvatar(profile.avatar_url);
  }

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const { data, error } = await supabase
        .from('profiles')
        .select(`avatar_url`)
        .eq('id', user!.id)
        .single();

      if (error) {
        throw error;
      }

      setProfile(data);
    } catch (error) {
      console.log('error', error.message);
    } finally {
      setLoading(false);
    }
  }

  // end

  return (
    <>
      <nav className="menu-nav">
        <h1 className="menu-nav__title">Pajak365</h1>
        <div>
          <Button
            aria-label="Toggle Dark mode"
            className="theme-button"
            auto
            type="abort"
            onClick={() => prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')}
          >
            {theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
          </Button>
          <Popover
            content={<UserSettings />}
            placement="bottomEnd"
            portalClassName="user-settings__popover"
          >
            <button className="user-settings__button">
              {avatar ? (
                <AvatarIcon url={avatar} size={40} />
              ) : (
                <div className="avatarPlaceholder">?</div>
              )}
            </button>
          </Popover>
        </div>
      </nav>
      <Submenu />
      <style jsx>{`
        .menu-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: ${theme.layout.pageWidthWithMargin};
          max-width: 100%;
          margin: 0 auto;
          padding: 0 ${theme.layout.pageMargin};
          background-color: ${theme.palette.background};
          font-size: 16px;
          height: 54px;
          box-sizing: border-box;
        }
        .menu-nav__title {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          letter-spacing: 0;
        }
        .menu-nav > div {
          display: flex;
          align-items: center;
        }
        .menu-nav :global(.theme-button) {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          padding: 0;
          margin: 0 ${theme.layout.gapHalf};
        }
        .user-settings__button {
          border: none;
          background: none;
          padding: 0;
          margin: 0;
          appearance: none;
          cursor: pointer;
        }
        :global(.user-settings__popover) {
          width: 180px !important;
        }
      `}</style>
    </>
  );
}
