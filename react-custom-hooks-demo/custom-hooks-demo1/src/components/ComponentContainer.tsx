import React from 'react';
import { Box } from '@mui/material';

type ComponentContainerProps = {
  children?: React.ReactNode;
};

const ComponentContainer: React.FC<ComponentContainerProps> = ({
  children,
}) => {
  return (
    <Box
      sx={{
        height: '250px',
        width: '100%', // Adjustable width
        overflowY: 'auto', // Scrollable if content exceeds height
        border: '1px solid #ccc', // Optional: Add a border for better visibility
        padding: '4px', // Optional: Add padding
        boxSizing: 'border-box', // Include padding and border in the element's total width and height
      }}
    >
      {children}
    </Box>
  );
};

export default ComponentContainer;
