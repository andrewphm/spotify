import formatDuration from '../utilities/formatDuration';

const Song = ({ track, index }) => {
  console.log(track);

  return (
    <div className="grid grid-cols-[16px_4fr_2fr_minmax(120px,_1fr)] rounded-[4px] h-[56px] gap-[16px] relative">
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
          <div className="flex truncate text-gray-400 text-sm overflow-hidden">
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

      <div className="album truncate">{track.track.album.name}</div>

      <div className="duration">{formatDuration(track.track.duration_ms)}</div>
    </div>
  );
};
export default Song;
