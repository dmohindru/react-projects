import React from 'react';
import { Container } from '@mui/material';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { VehicleForm } from './VehicleForm';
import { getCurrentUser, saveUserVehicle, type Vehicle } from '../data';

export const action = async ({ request }: ActionFunctionArgs) => {
  const user = await getCurrentUser();
  if (!user) {
    redirect('/login');
  } else {
    const formData = await request.formData();

    const randomId: string = uuidv4();
    const make = formData.get('make');
    const model = formData.get('model');
    const year = formData.get('year'); // String type convert to number
    const value = formData.get('value'); // String type convert to number
    const favorite = formData.get('favorite'); // String type convert to boolean

    const vehicle: Vehicle = {
      id: randomId,
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

export const VehicleAdd: React.FC = () => {
  return (
    <Container maxWidth="md">
      <VehicleForm labelAction="Add" />
    </Container>
  );
};
