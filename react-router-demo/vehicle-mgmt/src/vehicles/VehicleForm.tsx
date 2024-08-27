import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { FormInputField } from '../common/StyledComponent';
type VehicleFormProps = {
  labelAction: string;
};

export const VehicleForm: React.FC<VehicleFormProps> = ({ labelAction }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ width: '100%' }}
      alignItems="center"
    >
      <Typography
        display="flex"
        justifyContent="center"
        mt={6}
        variant="h5"
        fontWeight="bold"
      >
        {labelAction} Vehicle Details
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
    </Box>
  );
};
