import React from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import type { LoginData } from './VehiclesRoot';

export const VehiclesHome: React.FC = () => {
  const { user, vehicles } = useLoaderData() as LoginData;
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" mt={6} mb={3}>
        Welcome {user.username}
      </Typography>
      <Typography variant="h4" my={3}>
        Your vehicle portfolio details
      </Typography>
      <Box>
        <Typography variant="h5">Total Vehicles: {vehicles?.length}</Typography>
        <Typography variant="h5">
          Total Asset value:{'$'}
          {vehicles?.reduce((acc, current) => acc + current.value, 0)}
        </Typography>
        <Typography variant="h5">
          Number of favorite vehicles:{' '}
          {vehicles?.filter((vehicle) => vehicle.favorite).length}
        </Typography>
      </Box>
    </Container>
  );
};
