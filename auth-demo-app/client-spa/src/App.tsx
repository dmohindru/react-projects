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

const CenteredTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bold',
}));

export const App: React.FC = () => {
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
                <Button>Login</Button>
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
