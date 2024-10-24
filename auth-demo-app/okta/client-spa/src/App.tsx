import React, { useEffect } from 'react';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { MessageFetcher } from './MessageFetcher';

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
      <Box display="flex" flexDirection="row" flexGrow={1}>
        <Box display="flex" width="50vw" borderRight={1}>
          <MessageFetcher title="Dad Jokes" messageType="DadJoke" />
        </Box>
        <Box display="flex" width="50vw" borderLeft={1}>
          <MessageFetcher title="Quote of the day" messageType="Quote" />
        </Box>
      </Box>
    </Box>
  );
};
