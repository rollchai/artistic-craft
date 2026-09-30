import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.items = action.payload;
    },
    addReview: (state, action) => {
      state.items.unshift(action.payload);
    },
  },
});

export const { setReviews, addReview } = reviewsSlice.actions;
export default reviewsSlice.reducer;
