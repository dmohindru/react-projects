import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const Login: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box
        margin={4}
        display="flex"
        flexDirection="column"
        alignContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Vehicle Management Software</Typography>
        <Typography variant="h5">Login</Typography>
        <Box></Box>
      </Box>
    </Container>
  );
};
