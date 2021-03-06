import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import spotifyApi from '../lib/spotify';

const useSpotify = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, direct user to login...
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }

      // Initialize spotifyApi API with accessToken
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
