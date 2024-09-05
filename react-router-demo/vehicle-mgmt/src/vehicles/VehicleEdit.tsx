import React from 'react';
import { Container } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { VehicleForm } from './VehicleForm';
import type { Vehicle } from '../data/data';

export const VehicleEdit: React.FC = () => {
  const vehicle = useLoaderData() as Vehicle;

  return (
    <Container maxWidth="md">
      <VehicleForm labelAction="Edit" vehicle={vehicle} />
    </Container>
  );
};
