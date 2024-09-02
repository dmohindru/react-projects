import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { getCurrentUser, deleteUserVehicle } from '../data';

export async function action({ params }: ActionFunctionArgs) {
  const { vehicleId } = params;
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/');
  } else if (!vehicleId) {
    return redirect('/vehicles');
  } else {
    await deleteUserVehicle(user.username, vehicleId);
    return redirect('/vehicles');
  }
}
