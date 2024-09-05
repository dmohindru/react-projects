import React from 'react';
import { useLoaderData, Form, Outlet, Link } from 'react-router-dom';
import { AppBar, Typography, Button, Box, Toolbar } from '@mui/material';
import { SidePanel } from './SidePanel';
import type { LoginData } from '../common/loaders';

export const VehiclesRoot: React.FC = () => {
  const { user, vehicles } = useLoaderData() as LoginData;

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            <Link
              to="/vehicles"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {user.username}
            </Link>
          </Typography>
          <Form method="post">
            <Button
              color="inherit"
              type="submit"
              sx={{ fontWeight: 'bold', fontSize: '16px' }}
            >
              Logout
            </Button>
          </Form>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row" py={1} flexGrow={1}>
        <Box flex={2}>
          <SidePanel vehicles={vehicles ?? []} />
        </Box>
        <Box flex={5}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
