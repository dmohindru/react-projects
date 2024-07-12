import React from 'react';
import { Box, Typography } from '@mui/material';

type DemoContainerProps = {
  title: string;
  components: React.FC[];
};

const DemoContainer: React.FC<DemoContainerProps> = ({ title, components }) => {
  if (components.length < 2) {
    throw new Error('The components prop should contain atleast two elements');
  }
  const [FirstComponent, SecondComponent] = components;
  return (
    <Box display="flex" flexDirection="column" my={2}>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        variant="h4"
      >
        {title}
      </Typography>
      <Box display="flex" flexDirection="row">
        <Box sx={{ flex: 1, p: 1 }}>
          <FirstComponent />
        </Box>
        <Box sx={{ flex: 1, p: 1 }}>
          <SecondComponent />
        </Box>
      </Box>
    </Box>
  );
};

export default DemoContainer;
