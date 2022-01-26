import { useSelector } from 'react-redux';

import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
  ClockIcon,
} from '@heroicons/react/outline';

// UI Component
import Song from './Song';

const Songs = () => {
  const playlist = useSelector((state) => state.playlist.playlist);

  return (
    <div className="px-4">
      <div className="grid grid-cols-[16px_4fr_2fr_.5fr] h-[56px] gap-[16px] relative px-4 border-b border-[#b3b3b3] mb-2">
        <div className="index text-[#b3b3b3] flex items-center justify-center">
          #
        </div>

        <div className="info flex items-center text-[#b3b3b3]">TITLE</div>

        <div className="album truncate items-center flex text-[#b3b3b3]">
          ALBUM
        </div>

        <div className="duration items-center flex">
          <ClockIcon className="h-5 w-5 text-[#b3b3b3]" />
        </div>
      </div>

      {playlist?.tracks.items.map((track, i) => {
        return <Song key={track.track.id} index={i} track={track} />;
      })}
    </div>
  );
};
export default Songs;
