import { CenteredTypography } from './Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export const Callback: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated && !isLoading) {
    return <Navigate to="/app" />;
  } else
    return <CenteredTypography variant="h5">Logging in ...</CenteredTypography>;
};
