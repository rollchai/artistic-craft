import { createSlice } from '@reduxjs/toolkit';
import { STORAGE_KEYS } from '../../constants';

const initialUser = (() => {
  try {
    const user = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
})();

const initialState = {
  user: initialUser,
  token: localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN) || null,
  isAuthenticated: Boolean(localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)),
  status: 'idle',
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
