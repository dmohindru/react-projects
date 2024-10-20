import React from 'react';
import { Home } from './Home';
import { Login } from './components/Login';
import { Callback } from './components/Callback';
export const App: React.FC = () => {
  const currentPath = window.location.pathname;
  console.log('currentPath', currentPath);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/login':
        return <Login />;
      case '/callback':
        return <Callback />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return <div>{renderPage()}</div>;
};
