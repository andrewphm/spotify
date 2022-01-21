import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    id: '3LFIBdP7eZXJKqf3guepZ1',
    playlist: null,
  },
  reducers: {
    setCurrentPlaylistId: (state, action) => {
      state.id = action.payload;
    },
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { setCurrentPlaylistId, setPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
