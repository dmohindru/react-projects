import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { App } from './App';
import { Login, loginAction } from './components/Login';
import { Register } from './components/Register';
import { Main } from './components/Main';
import { ErrorPage } from './components/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} action={loginAction} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<Main />} />
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
