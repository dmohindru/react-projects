import React from 'react';
import { Box, Typography } from '@mui/material';
import ComponentContainer from '../ComponentContainer';
import CircleIcon from '@mui/icons-material/Circle';
import useOnlineStatus from '../../hooks/useOnlineStatus';

const OnLineStatusTwo: React.FC = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <ComponentContainer>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          my: 2,
        }}
        variant="h5"
        fontWeight="bold"
      >
        {' '}
        Online Status
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CircleIcon
            sx={{
              color: onlineStatus ? 'green' : 'red',
            }}
          />
        </Box>
        <Typography variant="h3" mx={2}>
          {onlineStatus ? 'Connected' : 'Disconnected'}
        </Typography>
      </Box>
    </ComponentContainer>
  );
};

export default OnLineStatusTwo;
