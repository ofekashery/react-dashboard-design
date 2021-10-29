import { useState, useEffect, ChangeEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { AuthSession } from '@supabase/supabase-js';
import UploadButton from '../components/UploadButton';
import Avatar from './Avatar';
import { DEFAULT_AVATARS_BUCKET, Profile } from '../lib/constants';
import {
  Input,
  Button,
  Fieldset,
  Text,
  Grid,
  Link,
  Card,
  Dot,
  Tag,
  useTheme,
} from '@geist-ui/react';
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

      const { error: uploadError } = await supabase.storage
        .from(DEFAULT_AVATARS_BUCKET)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { error: updateError } = await supabase.from('profiles').upsert({
        id: user!.id,
        avatar_url: filePath,
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
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
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
                <p style={{ paddingTop: '10pt', paddingBottom: '10pt' }}>
                  This is your avatar.
                  <br />
                  Click on the avatar to upload a custom one from your files.
                </p>
              </Grid>
              <Grid>
                {avatar ? (
                  <Avatar url={avatar} size={60} />
                ) : (
                  <div className="avatarPlaceholder">?</div>
                )}
              </Grid>
            </Grid.Container>

            <Fieldset.Footer>
              <Text>An avatar is optional</Text>
              <Button auto type="secondary-light" disabled>
                Save
              </Button>
            </Fieldset.Footer>
          </Fieldset>
        </Grid>
        <Grid style={{ display: 'block' }} xs={15}>
          <Fieldset>
            <Fieldset.Title>General</Fieldset.Title>

            <Grid.Container gap={2} justify="center">
              <Grid xs={24}>
                <Input label="email" id="email" value={session.user.email} disabled />
              </Grid>
              <Grid xs={24}>
                <Input
                  label="username"
                  id="username"
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid xs={24}>
                <Input
                  label="website"
                  id="website"
                  value={website || ''}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </Grid>
            </Grid.Container>

            <Fieldset.Footer>
              <Text type="error"></Text>
              <Button
                onClick={() => updateProfile()}
                disabled={loading}
                auto
                type="secondary-light"
              >
                {loading ? 'Loading ...' : 'Save'}
              </Button>
            </Fieldset.Footer>
          </Fieldset>
        </Grid>
      </Grid.Container>

      <style jsx>{``}</style>
    </>

    //   <div>
    //     <button className="button block" onClick={() => signOut()}>
    //       Sign Out
    //     </button>
    //   </div> */}
    // </div>
  );
}
