import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { App, loader as rootLoader } from './App';
import { Login, action as loginAction } from './Login';
import {
  VehiclesRoot,
  loader as vehicleRootLoader,
  action as vehicleRootAction,
} from './vehicles/VehiclesRoot';
import { VehiclesHome } from './vehicles/VehiclesHome';
import {
  VehicleDetails,
  loader as vehicleDetailsLoader,
} from './vehicles/VehicleDetails';
import { VehicleAdd, action as vehicleAddAction } from './vehicles/VehicleAdd';
import { VehicleEdit } from './vehicles/VehicleEdit';
import { action as vehicleDeleteAction } from './vehicles/VehicleDelete';
import { ErrorPage } from './ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
    >
      <Route errorElement={<ErrorPage />}>
        <Route path="login" element={<Login />} action={loginAction} />
        <Route
          path="vehicles"
          element={<VehiclesRoot />}
          loader={vehicleRootLoader}
          action={vehicleRootAction}
        >
          <Route index element={<VehiclesHome />} loader={vehicleRootLoader} />
          <Route
            path="add"
            element={<VehicleAdd />}
            action={vehicleAddAction}
          />
          <Route
            path=":vehicleId"
            element={<VehicleDetails />}
            loader={vehicleDetailsLoader}
          />
          <Route
            path=":vehicleId/edit"
            element={<VehicleEdit />}
            loader={vehicleDetailsLoader}
          />
          <Route path=":vehicleId/delete" action={vehicleDeleteAction} />
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
