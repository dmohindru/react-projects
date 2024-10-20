import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  styled,
} from '@mui/material';
import { generatePKCE } from './utils/PKCEUtils';

const CenteredTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
}));

export const Home: React.FC = () => {
  const handleLoginClick = async () => {
    const { codeVerifier, codeChallenge } = await generatePKCE();

    sessionStorage.setItem('pkce_code_verifier', codeVerifier);
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: 'frontend-react-app',
      redirect_uri: 'http://localhost:3000/callback',
      scope: 'openid profile',
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
    });

    window.location.href = `http://localhost:8080/oauth2/authorize?${params.toString()}`;
  };
  return (
    <Container maxWidth="md">
      <Box
        margin={3}
        display="flex"
        alignContent="center"
        justifyContent="center"
      >
        <Card sx={{ mt: 4, maxWidth: '600' }}>
          <CardMedia
            sx={{ height: 500, width: 500 }}
            image="/app-logo.jpg"
            title="app-logo"
          />
          <CardContent sx={{ border: 1 }}>
            <Box display="flex" flexDirection="column">
              <CenteredTypography variant="h4">
                Welcome to WiseCrack!
              </CenteredTypography>
              <CenteredTypography variant="body1">
                Your daily does of humor and wisdom
              </CenteredTypography>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <Button onClick={handleLoginClick}>Login</Button>
                <Button disabled>Register</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Outlet />
    </Container>
  );
};
