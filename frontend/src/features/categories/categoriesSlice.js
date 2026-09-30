import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'pottery', name: 'Pottery & Ceramics', icon: '🏺' },
    { id: 'paintings', name: 'Handmade Paintings', icon: '🎨' },
    { id: 'woodwork', name: 'Wood Crafts & Carvings', icon: '🪵' },
    { id: 'jewelry', name: 'Artisan Jewelry', icon: '💍' },
    { id: 'textiles', name: 'Weaving & Textiles', icon: '🧵' },
    { id: 'metalwork', name: 'Handcrafted Metalwork', icon: '⚒️' },
  ],
  status: 'idle',
  error: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
