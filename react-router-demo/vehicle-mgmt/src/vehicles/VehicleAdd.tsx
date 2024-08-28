import React from 'react';
import { Container } from '@mui/material';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { randomBytes } from 'crypto';
import { VehicleForm } from './VehicleForm';
import type { Vehicle } from '../data';

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  //const randomId: string = randomBytes(16).toString('hex');
  const make = formData.get('make');
  const model = formData.get('model');
  const year = formData.get('year'); // String type convert to number
  const value = formData.get('value'); // String type convert to number
  const favorite = formData.get('favorite'); // String type convert to boolean

  return redirect('/vehicles');
};

export const VehicleAdd: React.FC = () => {
  return (
    <Container maxWidth="md">
      <VehicleForm labelAction="Add" />
    </Container>
  );
};
