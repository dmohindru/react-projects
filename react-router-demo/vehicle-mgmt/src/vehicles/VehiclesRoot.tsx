import React from 'react';
import type { LoggedInUser, Vehicle } from '../data';
import { getCurrentUser, logoutUser } from '../data';
import { useLoaderData, redirect, Form, Outlet } from 'react-router-dom';
import { AppBar, Typography, Button, Box, Toolbar, Stack } from '@mui/material';
import { SidePanel } from './SidePanel';

export const loader = async (): Promise<LoggedInUser | Response> => {
  const user = await getCurrentUser();
  if (!user) {
    return redirect('/');
  }
  return user;
};

export const action = async () => {
  await logoutUser();
  return redirect('/');
};

export const VehiclesRoot: React.FC = () => {
  const user = useLoaderData() as LoggedInUser;
  // Temp code
  const mockVehicleList: Vehicle[] = [
    {
      id: 'some-id-1',
      make: 'Ford',
      model: 'Falcon',
      year: 2007,
      value: 6000,
      favorite: false,
    },
    {
      id: 'some-id-2',
      make: 'Ford',
      model: 'Focus',
      year: 2013,
      value: 10000,
      favorite: true,
    },
    {
      id: 'some-id-3',
      make: 'Hyundai',
      model: 'i30',
      year: 2015,
      value: 12000,
      favorite: false,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            {user.username}
          </Typography>
          <Form method="post">
            <Button color="inherit" type="submit">
              Logout
            </Button>
          </Form>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row" margin={1} py={1}>
        <Box flex={2}>
          <SidePanel vehicles={mockVehicleList} />
        </Box>
        <Box flex={5}>
          <Typography>Main Content</Typography>
        </Box>
      </Box>
    </Box>
  );
};
