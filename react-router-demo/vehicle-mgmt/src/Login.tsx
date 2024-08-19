import React, { ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  useEffect(() => {
    setDisabled(username.trim() === '');
  }, [username]);

  return (
    <Container maxWidth="md">
      <Box
        margin={4}
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
      >
        <Typography variant="h4" sx={{ mt: 15 }}>
          Fleet Master
        </Typography>
        <Paper
          elevation={3}
          square={false}
          sx={{ width: '50%', mt: 7, py: 4, px: 4 }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h5"
              display="flex"
              justifyContent="center"
              my={3}
            >
              Login
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              size="small"
              sx={{ my: 3 }}
              onChange={handleInputChange}
              value={username}
            />
            <Button variant="contained" disabled={disabled} sx={{ my: 3 }}>
              Submit
            </Button>
          </Box>
        </Paper>
        <Box></Box>
      </Box>
    </Container>
  );
};
