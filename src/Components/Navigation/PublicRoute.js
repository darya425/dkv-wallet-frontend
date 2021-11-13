import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../Redux/auth';

const PublicRoute = ({
  component: Component,
  restricted = false,
  redirectTo = '/',
  children,
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
