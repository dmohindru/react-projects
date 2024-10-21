import React, { useEffect } from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

export const App: React.FC = () => {
  const { user, logout } = useAuth0();

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            {`Welcome ${user?.name || user?.email}`}
          </Typography>
          <Button
            color="inherit"
            sx={{ fontWeight: 'bold', fontSize: '16px' }}
            onClick={() => logout()}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="row">
        <Box bgcolor="red" flexGrow="1" height="100vh">
          <Typography>Box 1</Typography>
        </Box>
        <Box bgcolor="blue" flexGrow="1" height="100vh">
          <Typography>Box 2</Typography>
        </Box>
      </Box>
    </Box>
  );
};
