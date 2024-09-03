import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  getCurrentUser,
  Vehicle,
  saveUserVehicle,
  logoutUser,
  loginUser,
} from '../data/data';

export const vehicleSaveAction = async ({ request }: ActionFunctionArgs) => {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  } else {
    const formData = await request.formData();

    const id = formData.get('id');
    const make = formData.get('make');
    const model = formData.get('model');
    const year = formData.get('year');
    const value = formData.get('value');
    const favorite = formData.get('favorite');

    const vehicleId =
      id?.toString() === 'undefined' ? uuidv4() : id?.toString();

    const vehicle: Vehicle = {
      id: vehicleId,
      make: make?.toString() || '',
      model: model?.toString() || '',
      year: +(year?.toString() || 1990),
      value: +(value?.toString() || 0),
      favorite: favorite?.toString() === 'true',
    };

    await saveUserVehicle(user?.username, vehicle);

    return redirect('/vehicles');
  }
};

export const logoutUserAction = async () => {
  await logoutUser();
  return redirect('/');
};

export const loginUserAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const username = formData.get('username');

  if (typeof username === 'string' && username.trim() !== '') {
    await loginUser(username);
    return redirect('/vehicles');
  }
  return redirect('/login');
};
