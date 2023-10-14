import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsFetchCurrentUser, selectIsLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFetchCurrentUser = useSelector(selectIsFetchCurrentUser);
  const shouldRedirect = !isLoggedIn && !isFetchCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
