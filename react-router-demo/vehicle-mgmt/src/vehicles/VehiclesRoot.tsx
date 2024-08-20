import React from 'react';
import type { LoggedInUser } from '../data';
import { getCurrentUser, logoutUser } from '../data';
import { useLoaderData, redirect, Form } from 'react-router-dom';
import { AppBar, Typography, Button, Box, Toolbar } from '@mui/material';

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
    </Box>
  );
};
