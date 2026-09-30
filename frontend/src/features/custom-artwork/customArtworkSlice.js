import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  requests: [],
  selectedRequest: null,
  status: 'idle',
  error: null,
};

export const customArtworkSlice = createSlice({
  name: 'customArtwork',
  initialState,
  reducers: {
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
    addRequest: (state, action) => {
      state.requests.unshift(action.payload);
    },
    setSelectedRequest: (state, action) => {
      state.selectedRequest = action.payload;
    },
  },
});

export const { setRequests, addRequest, setSelectedRequest } = customArtworkSlice.actions;
export default customArtworkSlice.reducer;
