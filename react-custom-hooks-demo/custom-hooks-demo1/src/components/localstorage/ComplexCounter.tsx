import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import ComponentContainer from '../ComponentContainer';

interface MultiCounter {
  counter1: number;
  counter2: number;
  counter3: number;
}

const ComplexCounter: React.FC = () => {
  return (
    <ComponentContainer>
      <Box display="flex" flexDirection="column">
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          variant="h5"
        >
          Complex Counter
        </Typography>
        <Box display="flex" flexDirection="row">
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" fontWeight="bold">
              counter1:
            </Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Button>+</Button>
            <TextField>0</TextField>
            <Button>-</Button>
          </Box>
        </Box>
      </Box>
    </ComponentContainer>
  );
};

export default ComplexCounter;
