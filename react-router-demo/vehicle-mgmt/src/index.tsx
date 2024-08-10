import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { App, loader as rootLoader } from './App';
import { Login } from './Login';
import { VehiclesRoot } from './vehicles/VehiclesRoot';
import { VehiclesHome } from './vehicles/VehiclesHome';
import { Vehicle } from './vehicles/Vehicle';
import { VehicleAdd } from './vehicles/VehicleAdd';
import { VehicleEdit } from './vehicles/VehicleEdit';
import { ErrorPage } from './ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} loader={rootLoader}>
      <Route errorElement={<ErrorPage />}>
        <Route path="login" element={<Login />} />
        <Route path="vehicles" element={<VehiclesRoot />}>
          <Route index element={<VehiclesHome />} />
          <Route path="add" element={<VehicleAdd />} />
          <Route path=":vehicleId" element={<Vehicle />} />
          <Route path=":vehicleId/edit" element={<VehicleEdit />} />
        </Route>
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
