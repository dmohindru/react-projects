import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { FormInputField } from '../common/StyledComponent';

export const VehicleAdd: React.FC = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography display="flex" justifyContent="center" mt={6} variant="h5">
        Add Vehicle Details
      </Typography>
      <Box width="60%" mt={2} display="flex" flexDirection="column">
        <FormInputField label="Make" size="small" />
        <FormInputField label="Model" size="small" />
        <FormInputField label="Year" size="small" />
        <FormInputField label="Value" size="small" />
        <Box display="flex" flexGrow={1}>
          <Button
            variant="contained"
            type="submit"
            sx={{ flex: 1, mr: 0.5, mt: 1 }}
          >
            Save
          </Button>
          <Button variant="contained" sx={{ flex: 1, ml: 0.5, mt: 1 }}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
