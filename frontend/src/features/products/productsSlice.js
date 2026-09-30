import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  selectedProduct: null,
  status: 'idle',
  error: null,
  filter: {
    category: 'all',
    searchQuery: '',
    sortBy: 'latest',
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setSelectedProduct, setFilter, setStatus } = productsSlice.actions;
export default productsSlice.reducer;
