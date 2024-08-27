import React from 'react';
import { Container } from '@mui/material';
import { VehicleForm } from './VehicleForm';

export const VehicleAdd: React.FC = () => {
  return (
    <Container maxWidth="md">
      <VehicleForm labelAction="Add" />
    </Container>
  );
};
