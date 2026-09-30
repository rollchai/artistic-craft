import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, logout } from '../features/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return {
    user: auth?.user,
    token: auth?.token,
    isAuthenticated: auth?.isAuthenticated,
    login: (userData) => dispatch(setCredentials(userData)),
    logout: () => dispatch(logout()),
  };
};
