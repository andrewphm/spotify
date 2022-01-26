import { useSession, signOut } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import useSpotify from '../hooks/useSpotify';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setPlaylist } from '../redux/playlistSlice';

// Components
import Songs from './Songs';

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
];

const Center = () => {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const playlistId = useSelector((state) => state.playlist.id);
  const playlist = useSelector((state) => state.playlist.playlist);
  const dispatch = useDispatch();
  const spotifyApi = useSpotify();

  // Change header color
  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  // Load playlist
  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        dispatch(setPlaylist(data.body));
      })
      .catch((error) => {
        console.log('Something went wrong!', error);
      });
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow overflow-y-scroll h-screen scrollbar-hide">
      <header className="absolute top-5 right-8 z-10">
        <div
          onClick={signOut}
          className="flex items-center text-white bg-black space-x-2 opacity-80 hover:opacity-70 cursor-pointer rounded-full p-1 pr-5"
        >
          <img
            src={session?.user?.image}
            alt=""
            className="rounded-full w-10 h-10"
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          src={playlist?.images?.[0]?.url}
          alt=""
          className="h-44 w-44 shadow-2xl"
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-xl md:text-4xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>

      <section className="text-white">
        <Songs />
      </section>
    </div>
  );
};

export default Center;
