import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  currentUserLoader,
  allVehiclesLoader,
  vehicleDetailsLoader,
} from './common/loaders';
import {
  vehicleSaveAction,
  logoutUserAction,
  loginUserAction,
} from './common/actions';
import { App } from './App';
import { Login } from './common/Login';
import { VehiclesRoot } from './vehicles/VehiclesRoot';
import { VehiclesHome } from './vehicles/VehiclesHome';
import { VehicleDetails } from './vehicles/VehicleDetails';
import { VehicleAdd } from './vehicles/VehicleAdd';
import { VehicleEdit } from './vehicles/VehicleEdit';
import { action as vehicleDeleteAction } from './vehicles/VehicleDelete';
import { ErrorPage } from './ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
      errorElement={<ErrorPage />}
      loader={currentUserLoader}
    >
      <Route errorElement={<ErrorPage />}>
        <Route path="login" element={<Login />} action={loginUserAction} />
        <Route
          path="vehicles"
          element={<VehiclesRoot />}
          loader={allVehiclesLoader}
          action={logoutUserAction}
        >
          <Route index element={<VehiclesHome />} loader={allVehiclesLoader} />
          <Route
            path="add"
            element={<VehicleAdd />}
            action={vehicleSaveAction}
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
            action={vehicleSaveAction}
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
