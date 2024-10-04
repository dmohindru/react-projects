import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { App } from './App';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Main } from './components/Main';
import { ErrorPage } from './components/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="app" element={<Main />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
