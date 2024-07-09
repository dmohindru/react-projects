import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ComponentContainer from '../ComponentContainer';
// import useCSVFileUpload from "../../hooks/useCSVFileUpload";
const CsvMeanDeviation: React.FC = () => {
  // const {selectFile, data, error} = useCSVFileUpload()

  return (
    <ComponentContainer>
      <Box>
        <Typography>Mean Standard Deviation Component</Typography>
        <Button>Click me</Button>
      </Box>
    </ComponentContainer>
  );
};

export default CsvMeanDeviation;
