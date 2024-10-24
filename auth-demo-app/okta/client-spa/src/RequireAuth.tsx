import { useAuth0 } from '@auth0/auth0-react';
import { useLocation, Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: React.ReactNode; // Explicitly define children prop
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/"
        state={{ from: location, error: 'You must log in to access app page' }}
        replace
      />
    );
  }
  return <>{children}</>;
};
