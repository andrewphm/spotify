import { createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
  name: 'song',
  initialState: {
    currentTrackId: null,
    isPlaying: false,
  },
  reducers: {
    setCurrentTrackId: (state, action) => {
      state.currentTrackId = action.payload;
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setCurrentTrackId, setIsPlaying } = songSlice.actions;

export default songSlice.reducer;
