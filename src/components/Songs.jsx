import { useSelector } from 'react-redux';

// UI Component
import Song from './Song';

const Songs = () => {
  const playlist = useSelector((state) => state.playlist.playlist);

  console.log(playlist);

  return (
    <div>
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.id} index={i} track={track} />
      ))}
    </div>
  );
};
export default Songs;
