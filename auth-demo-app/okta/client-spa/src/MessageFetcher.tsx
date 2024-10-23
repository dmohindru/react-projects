import { Alert, Box, Typography, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { TimedButton } from './TimedButton';

type MessageFetcherProps = {
  title: string;
  messageType: 'DadJoke' | 'Quote';
};

interface ApiResponse {
  message: string;
  timeStamp: string;
}

const formatDate = (isoString: string) => {
  const date = new Date(isoString);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(date);

  return formattedDate;
};

export const MessageFetcher: React.FC<MessageFetcherProps> = ({
  title,
  messageType,
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [fetchTime, setFetchTime] = useState<string | null>(null);

  const fetchMessage = async () => {
    const apiUrl =
      messageType === 'DadJoke'
        ? 'http://localhost:8081/api/v1/dadjoke'
        : 'http://localhost:8081/api/v1/quote';
    setLoading(true);
    setError(null);
    setMessage(null);
    setFetchTime(null);

    try {
      const token = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'http://wisecrack.dmohindru.dev',
        },
      });

      const response = await axios.get<ApiResponse>(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.message);
      setFetchTime(response.data.timeStamp);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch message');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        my={4}
        fontWeight="bold"
      >
        {title}
      </Typography>
      <TimedButton initialTime={5} label="Fetch" onClick={fetchMessage} />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {message && (
        <Typography
          variant="h6"
          fontWeight="bold"
          width="90%"
          my={4}
          align="center"
        >
          {message}
        </Typography>
      )}
      {fetchTime && (
        <Typography variant="body1">{`fetched at: ${formatDate(fetchTime)}`}</Typography>
      )}
    </Box>
  );
};
