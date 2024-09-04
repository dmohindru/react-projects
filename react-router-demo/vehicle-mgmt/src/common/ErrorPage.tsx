import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const handleGoHomeClick = () => {
    navigate('/vehicles');
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" mt={4} mb={2}>
        Oops! Error occurred
      </Typography>
      <Button variant="contained" onClick={handleGoHomeClick}>
        Go Home
      </Button>
    </Container>
  );
};
