import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import {
  getCurrentUser,
  getUserVehicle,
  getUserVehicles,
  LoggedInUser,
  Vehicle,
} from '../data/data';

export type LoginData = {
  user: LoggedInUser;
  vehicles: Vehicle[] | null;
};

export async function vehicleDetailsLoader({ params }: LoaderFunctionArgs) {
  const { vehicleId } = params;
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/');
  } else if (!vehicleId) {
    return redirect('/vehicles');
  } else {
    const vehicle = await getUserVehicle(user.username, vehicleId);
    if (!vehicle) {
      throw new Response('', {
        status: 404,
        statusText: `Vehicle with id [${vehicleId}] not found`,
      });
    }
    return vehicle;
  }
}

export const allVehiclesLoader = async (): Promise<LoginData | Response> => {
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/');
  } else {
    const vehicles = await getUserVehicles(user.username);
    return {
      user,
      vehicles,
    };
  }
};

export const currentUserLoader = async ({
  request,
}: {
  request: Request;
}): Promise<Response | null> => {
  const currentPath = new URL(request.url).pathname;
  const user = await getCurrentUser();
  if (user && currentPath === '/') {
    return redirect('/vehicles');
  } else if (!user && currentPath !== '/login') {
    return redirect('/login');
  }
  return null;
};
