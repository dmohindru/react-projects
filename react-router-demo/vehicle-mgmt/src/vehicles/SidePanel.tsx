import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import type { Vehicle } from '../data';

type SidePanelProps = {
  vehicles: Vehicle[];
};

const renderVehicle = (vehicle: Vehicle): React.ReactElement => (
  <Typography variant="body1" my={1.5} mx={4}>
    {vehicle.make} {vehicle.model}
  </Typography>
);

export const SidePanel: React.FC<SidePanelProps> = ({ vehicles }) => {
  return (
    <Box display="flex" flexDirection="column" bgcolor="#F0F0F0">
      <Button>Add</Button>
      {vehicles.map((vehicle) => renderVehicle(vehicle))}
    </Box>
  );
};
