import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/products/productsSlice';
import artistsReducer from '../features/artists/artistsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';
import cartReducer from '../features/cart/cartSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import customArtworkReducer from '../features/custom-artwork/customArtworkSlice';
import ordersReducer from '../features/orders/ordersSlice';
import reviewsReducer from '../features/reviews/reviewsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    artists: artistsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    customArtwork: customArtworkReducer,
    orders: ordersReducer,
    reviews: reviewsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
