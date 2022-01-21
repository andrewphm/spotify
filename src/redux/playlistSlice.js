import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    id: null,
  },
  reducers: {
    setCurrentPlaylist: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setCurrentPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
