import React from 'react';
import ComponentContainer from '../ComponentContainer';
import { Box, Typography } from '@mui/material';

const FriendList: React.FC = () => {
  return (
    <ComponentContainer>
      <Box>
        <Typography variant="h3">Friend List</Typography>
      </Box>
    </ComponentContainer>
  );
};

export default FriendList;
