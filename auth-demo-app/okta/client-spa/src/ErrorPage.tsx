import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export const ErrorPage: React.FC = () => {
  const error: any = useRouteError();
  return (
    <Box display="flex" flexDirection="column" alignContent="center">
      <Typography variant="h3">Error Page</Typography>
      {error && (
        <Box display="flex" flexDirection="column">
          <Typography>{error.status || `Error: ${error.status}`}</Typography>
          <Typography>{error.statusText || error.message}</Typography>
          <Typography>{error.statusText || error.message}</Typography>
          <Typography>
            {error.data && JSON.stringify(error.data, null, 2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
