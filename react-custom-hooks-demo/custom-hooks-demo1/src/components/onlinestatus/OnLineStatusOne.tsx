import React from 'react';
import ComponentContainer from '../ComponentContainer';
import { Typography } from '@mui/material';
import useOnlineStatus from '../../hooks/useOnlineStatus';

const OnLineStatusOne: React.FC = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <ComponentContainer>
      <Typography
        sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
        variant="h5"
        fontWeight="bold"
      >
        You are currently
      </Typography>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          my: 2,
          color: onlineStatus ? 'green' : 'red',
        }}
        variant="h2"
      >
        {onlineStatus ? 'Connected' : 'Disconnected'}
      </Typography>
    </ComponentContainer>
  );
};

export default OnLineStatusOne;
