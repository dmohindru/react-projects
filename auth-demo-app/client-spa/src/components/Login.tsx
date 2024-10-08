import React, { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import { Form } from 'react-router-dom';

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [spaceError, setSpaceError] = useState<boolean>(false);

  useEffect(() => {
    const spaceRegex = /\s/;
    const usernameContainsSpace = spaceRegex.test(username.trim());
    setSpaceError(usernameContainsSpace);

    if (
      username.trim() === '' ||
      password.trim() === '' ||
      usernameContainsSpace
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [username, password]);

  const handleUsernameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box
        margin={4}
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
      >
        <Typography fontWeight="bold" variant="h4" sx={{ mt: 10 }}>
          WiseCrack Login
        </Typography>
        <Paper
          elevation={3}
          square={false}
          sx={{ width: '50%', mt: 7, py: 4, px: 4 }}
        >
          <Form method="post">
            <Box display="flex" flexDirection="column" alignContent="center">
              <TextField
                name="username"
                label="username"
                size="small"
                sx={{ my: 2 }}
                onChange={handleUsernameInputChange}
                value={username}
                error={spaceError}
                helperText={spaceError && 'Username cannot have space in it'}
              />
              <TextField
                label="password"
                size="small"
                sx={{ mb: 2 }}
                type="password"
                onChange={handlePasswordInputChange}
                value={password}
              />
              <Button variant="contained" type="submit" disabled={disabled}>
                Submit
              </Button>
            </Box>
          </Form>
        </Paper>
      </Box>
    </Container>
  );
};
