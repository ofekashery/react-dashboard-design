import { useState, useEffect, ChangeEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AuthSession } from '@supabase/supabase-js';
import UploadButton from '../components/UploadButton';
import Avatar from './Avatar';
import { DEFAULT_AVATARS_BUCKET, Profile } from '../lib/constants';
import { Input, Button, Fieldset, Text, Grid, Link, Card, Dot, Tag, useTheme } from '@geist-ui/react';
import * as Icons from 'react-feather';

export default function Account({ session }: { session: AuthSession }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const theme = useTheme();

  useEffect(() => {
    getProfile();
  }, [session]);

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error logging out:', error.message);
  }

  async function uploadAvatar(event: ChangeEvent<HTMLInputElement>) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length == 0) {
        throw 'You must select an image to upload.';
      }

      const user = supabase.auth.user();
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${session?.user.id}${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage.from(DEFAULT_AVATARS_BUCKET).upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { error: updateError } = await supabase.from('profiles').upsert({
        id: user!.id,
        avatar_url: filePath
      });

      if (updateError) {
        throw updateError;
      }

      setAvatar(null);
      setAvatar(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }

  function setProfile(profile: Profile) {
    setAvatar(profile.avatar_url);
    setUsername(profile.username);
    setWebsite(profile.website);
  }

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const { data, error } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
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

  async function updateProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user!.id,
        username,
        website,
        updated_at: new Date()
      };

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal' // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Grid.Container gap={1.5} justify="center">
        <Grid style={{ display: 'block' }} xs={15}>
          <Fieldset>
            <Fieldset.Title>Your Avatar</Fieldset.Title>
            <Grid.Container justify="space-between" wrap="wrap">
              <Grid>
                <Fieldset.Subtitle style={{ paddingTop: '10pt', paddingBottom: '10pt' }}>
                  This is your avatar.
                  <br />
                  Click on the avatar to upload a custom one from your files.
                </Fieldset.Subtitle>
              </Grid>
              <Grid>{avatar ? <Avatar url={avatar} size={35} /> : <div className="avatarPlaceholder">?</div>}</Grid>
            </Grid.Container>

            <Fieldset.Footer>
              <Text>
                An avatar is optional <Text sm={0} md={6}>but strongly recommended.</Text>
              </Text>
              <Button auto b type="secondary-light">
                Save
              </Button>
            </Fieldset.Footer>
          </Fieldset>
        </Grid>
        <Grid style={{ display: 'block' }} xs={15}>
          <Fieldset>
            <Fieldset.Title>HTTP is extensible</Fieldset.Title>
            <Fieldset.Subtitle>
              Introduced in HTTP/1.0, HTTP headers make this protocol easy to extend and experiment with.{' '}
            </Fieldset.Subtitle>
            <Fieldset.Footer>
              <Text type="error">An error has occurred.</Text>
              <Button auto scale={1 / 3} type="error">
                Revert
              </Button>
            </Fieldset.Footer>
          </Fieldset>
        </Grid>
      </Grid.Container>

      <div>
        <label htmlFor="avatar">Avatar image</label>
        <div className="avatarField">
          <div className="avatarContainer">
            {avatar ? <Avatar url={avatar} size={35} /> : <div className="avatarPlaceholder">?</div>}
          </div>
          <UploadButton onUpload={uploadAvatar} loading={uploading} />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Input id="email" value={session.user.email} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <Input id="username" value={username || ''} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <Input id="website" value={website || ''} onChange={(e) => setWebsite(e.target.value)} />
      </div>

      <div>
        <Button onClick={() => updateProfile()} disabled={loading} auto type="success">
          {loading ? 'Loading ...' : 'Update'}
        </Button>
      </div>
      <style jsx>{`
        .three-one {
          grid-template-columns: 3fr 1fr;
        }
        @media screen and (max-width: 1024px) {
          .three-one {
            grid-template-columns: 1fr;
          }
        }
        .two-one {
          grid-template-columns: 1fr 1fr;
        }
        @media screen and (max-width: 1024px) {
          .two-one {
            grid-template-columns: 1fr;
          }
        }

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
          max-width: 400px;
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

    //   <div>
    //     <button className="button block" onClick={() => signOut()}>
    //       Sign Out
    //     </button>
    //   </div> */}
    // </div>
  );
}
