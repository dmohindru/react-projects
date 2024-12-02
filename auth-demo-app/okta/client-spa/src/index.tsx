import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './global.css';
import { App } from './App';
import { Home } from './Home';
import { ErrorPage } from './ErrorPage';
import { RequireAuth } from './RequireAuth';
import { Callback } from './Callback';
import { loadConfig, getConfig } from './config';

const bootstrapApp = async () => {
  await loadConfig();
  const domain = getConfig('auth0Domain');
  const clientId = getConfig('auth0ClientId');

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/app"
          element={
            <RequireAuth>
              <App />
            </RequireAuth>
          }
        />
        <Route path="/callback" element={<Callback />} />
      </Route>
    )
  );

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/callback`,
        }}
      >
        <RouterProvider router={router} />
      </Auth0Provider>
    </React.StrictMode>
  );
};

bootstrapApp();
