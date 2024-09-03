import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';
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
      {({ isActive }) => (
        <ListItem
          sx={{
            backgroundColor: isActive ? 'primary.main' : 'inherit',
            color: isActive ? 'white' : 'inherit',
            '&:hover': {
              backgroundColor: isActive ? 'primary.main' : 'lightgrey',
            },
            '&:active': {
              color: isActive ? 'white' : 'blue',
            },
          }}
        >
          <ListItemText
            sx={{ py: 1, px: 1 }}
            primary={`${vehicle.make} ${vehicle.model}`}
          />
          <ListItemIcon>
            {vehicle.favorite ? <Star /> : <StarBorder />}
          </ListItemIcon>
        </ListItem>
      )}
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
      <Divider />
      <List flexGrow={1} component={Box}>
        {vehicles.map((vehicle) => renderVehicle(vehicle))}
      </List>
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
