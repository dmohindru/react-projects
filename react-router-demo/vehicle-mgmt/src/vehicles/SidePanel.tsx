import React from 'react';
import { Box, Typography, Button, TextField, Divider } from '@mui/material';
import type { Vehicle } from '../data/data';
import { NavLink, useNavigate } from 'react-router-dom';

type SidePanelProps = {
  vehicles: Vehicle[];
};

const renderVehicle = (vehicle: Vehicle): React.ReactElement | null => {
  if (!vehicle.id) {
    return null;
  }
  return (
    <NavLink
      to={`${vehicle.id}`}
      style={{ textDecoration: 'none' }}
      key={vehicle.id}
    >
      <Typography
        variant="body1"
        my={1}
        mx={4}
        px={1}
        py={1}
        sx={{
          borderRadius: '5px',
          '&:hover': {
            bgcolor: '#E0E0E0',
          },
        }}
      >
        {vehicle.make} {vehicle.model}
      </Typography>
    </NavLink>
  );
};

export const SidePanel: React.FC<SidePanelProps> = ({ vehicles }) => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('add');
  };

  return (
    <Box display="flex" flexDirection="column" bgcolor="#F0F0F0" height="100%">
      <Box display="flex" flexDirection="row">
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1, m: 1 }}
        />
        <Button variant="contained" sx={{ m: 1 }} onClick={handleAddClick}>
          Add
        </Button>
      </Box>
      <Box flexGrow={1}>
        <Divider />
        {vehicles.map((vehicle) => renderVehicle(vehicle))}
      </Box>
      <Box>
        <Divider />
        <Typography
          variant="h6"
          display="flex"
          justifyContent="center"
          margin={1}
        >
          Fleet Master
        </Typography>
      </Box>
    </Box>
  );
};
