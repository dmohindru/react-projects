import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
type MessageFetcherProps = {
  title: string;
  messageType: 'DadJoke' | 'Quote';
};

// const apiBaseURL = process.env.MESSAGE_API_BASE_URL;

export const MessageFetcher: React.FC<MessageFetcherProps> = ({
  title,
  messageType,
}) => {
  useEffect(() => {
    // if (!apiBaseURL) {
    //   throw new Error('Message Api base url not set');
    // }
  });
  return (
    <Box display="flex" flexDirection="column" alignContent="center">
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        my={4}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <Typography variant="h3" display="flex" justifyContent="center">
        {messageType}
      </Typography>
    </Box>
  );
};
