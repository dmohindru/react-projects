import React, { useState, useEffect } from 'react';
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
import {
  NavLink,
  useNavigate,
  Form,
  useSubmit,
  useLoaderData,
} from 'react-router-dom';
import { LoginData } from '../common/loaders';

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
  const submit = useSubmit();
  const { searchParam } = useLoaderData() as LoginData;
  const [defaultSearchParam, setDefaultSearchParam] = useState<string>('');

  useEffect(() => {
    setDefaultSearchParam(searchParam ?? '');
  }, [searchParam]);

  const handleAddClick = () => {
    navigate('add');
  };

  return (
    <Box display="flex" flexDirection="column" bgcolor="#F0F0F0" height="100%">
      <Box display="flex" flexDirection="row">
        <Form id="search-form" role="search">
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            name="q"
            value={defaultSearchParam}
            sx={{ flexGrow: 1, m: 1 }}
            onChange={(event) => {
              submit(event.currentTarget.form);
            }}
          />
        </Form>
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
