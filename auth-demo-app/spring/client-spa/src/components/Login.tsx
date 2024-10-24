import React, { ChangeEvent, FormEvent } from 'react';
import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Paper,
  TextField,
  Button,
} from '@mui/material';
// import { Form, ActionFunctionArgs } from 'react-router-dom';
import axios from 'axios';

// export const loginAction = async ({ request }: ActionFunctionArgs) => {
//   const formData = await request.formData();
//   const username = formData.get('username')?.toString() ?? '';
//   const password = formData.get('password')?.toString() ?? '';
//   try {
//     const response = await axios.post(
//       'http://localhost:8080/login',
//       new URLSearchParams({
//         username,
//         password,
//       }),
//       {
//         withCredentials: true, // If you need to include cookies (like JSESSIONID)
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//       }
//     );

//     if (response.status === 200) {
//       // Successful login, Spring Boot will handle the redirection
//       console.log('Login successful, Spring Boot will handle the redirection.');
//     }
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('Login failed:', error.response?.data || error.message);
//     } else {
//       console.error('Unexpected error:', error);
//     }
//   }
//   console.log('username', username);
//   console.log('password', password);
// };

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    if (spaceError) {
      // Prevent submission if there's an error in the username
      return;
    }

    setDisabled(true);

    try {
      const response = await axios.post(
        'http://localhost:8080/login',
        new URLSearchParams({
          username,
          password,
        }),
        {
          withCredentials: true, // If you need to include cookies (like JSESSIONID)
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      if (response.status === 200) {
        // Successful login, Spring Boot will handle the redirection
        console.log(
          'Login successful, Spring Boot will handle the redirection.'
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Login failed:', error.response?.data || error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
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
          <form method="post" onSubmit={handleSubmit}>
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
                name="password"
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
          </form>
        </Paper>
      </Box>
    </Container>
  );
};
