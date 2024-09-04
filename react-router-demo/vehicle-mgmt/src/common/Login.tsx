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
import { Form } from 'react-router-dom';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [spaceError, setSpaceError] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  useEffect(() => {
    const spaceRegex = /\s/;
    const containsSpace = spaceRegex.test(username.trim());
    setSpaceError(containsSpace);
    const isEmpty = username.trim() === '';
    setDisabled(isEmpty || containsSpace);
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
          <Form method="post">
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
                name="username"
                label="Username"
                variant="outlined"
                size="small"
                sx={{ my: 3 }}
                onChange={handleInputChange}
                value={username}
                error={spaceError}
                helperText={spaceError && 'Username cannot have space in it'}
              />
              <Button
                variant="contained"
                disabled={disabled}
                sx={{ my: 3 }}
                type="submit"
              >
                Login
              </Button>
            </Box>
          </Form>
        </Paper>
        <Box></Box>
      </Box>
    </Container>
  );
};
