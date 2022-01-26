import formatDuration from '../utilities/formatDuration';
import useSpotify from '../hooks/useSpotify';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentTrackId, setIsPlaying } from '../redux/SongSlice';

const Song = ({ track, index }) => {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const currentTrackId = useSelector((state) => state.song.currentTrackId);
  const isPlaying = useSelector((state) => state.song.isPlaying);

  const playSong = () => {
    dispatch(setCurrentTrackId(track.track.id));
    dispatch(setIsPlaying());

    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  return (
    <div
      onClick={playSong}
      className="grid grid-cols-[16px_4fr_2fr_.5fr] rounded-[4px] h-[56px] gap-[16px] relative hover:bg-[#302b2b] px-4 cursor-default"
    >
      <div className="index text-gray-300 flex items-center justify-center">
        {index + 1}
      </div>

      <div className="info flex items-center ">
        <img
          src={track?.track?.album?.images[2]?.url}
          alt=""
          className="w-[40px] h-[40px] mr-3"
        />
        <div className="grid truncate">
          <div className="track-name truncate">{track.track.name}</div>
          <div className="flex truncate text-[#b3b3b3] text-sm overflow-hidden">
            {track.track.artists.map((name, i) => {
              if (i === 0) return <p className="truncate">{name.name}</p>;

              return (
                <p className="truncate" key={name.name}>
                  {`, ${name.name}`}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <div className="album truncate items-center flex text-[#b3b3b3]">
        {track.track.album.name}
      </div>

      <div className="duration items-center flex text-[#b3b3b3]">
        {formatDuration(track.track.duration_ms)}
      </div>
    </div>
  );
};
export default Song;
