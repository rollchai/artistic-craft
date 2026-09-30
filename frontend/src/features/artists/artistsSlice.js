import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  artists: [],
  selectedArtist: null,
  status: 'idle',
  error: null,
};

export const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    setArtists: (state, action) => {
      state.artists = action.payload;
    },
    setSelectedArtist: (state, action) => {
      state.selectedArtist = action.payload;
    },
  },
});

export const { setArtists, setSelectedArtist } = artistsSlice.actions;
export default artistsSlice.reducer;
