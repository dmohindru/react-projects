import React from 'react';
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
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getConfig } from './config';

export const CenteredTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
}));

export const Home: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  const errorMessage = location.state?.error || null;
  const envIdentifier = getConfig('identifier');

  const handleLoginClick = async () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    } else {
      navigate('/app');
    }
  };
  return (
    <Container maxWidth="md">
      <Box
        margin={3}
        display="flex"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Card sx={{ mt: 4, maxWidth: '600' }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CardMedia
              sx={{
                height: 500,
                width: 500,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
              image="/app-logo.jpg"
              title="app-logo"
            />
            <CardContent sx={{ width: '100%' }}>
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
                </Box>
                <Typography
                  color="gray"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 1,
                  }}
                >
                  Env Identifier: {envIdentifier}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>
        {errorMessage && (
          <CenteredTypography color="red" variant="h5">
            {errorMessage}
          </CenteredTypography>
        )}
      </Box>
    </Container>
  );
};
