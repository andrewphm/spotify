import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from './playlistSlice';
import songReducer from './SongSlice';

export default configureStore({
  reducer: {
    playlist: playlistReducer,
    song: songReducer,
  },
});
