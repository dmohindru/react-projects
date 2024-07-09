import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ComponentContainer from '../ComponentContainer';
import useCSVFileUpload from '../../hooks/useCSVFileUpload';

type CsvComponentProps = {
  operation: 'average' | 'mean' | 'std-deviation';
};

const createInputNumbersElement = (
  numbers: number[],
  resultTitle: string,
  result: number
): React.ReactElement => (
  <Box display="flex" flexDirection="column" m={2}>
    <Box display="flex" flexDirection="row" my={1}>
      <Typography variant="body1" fontWeight="bold">
        Input numbers:{' '}
      </Typography>
      <Typography variant="body1">{JSON.stringify(numbers)}</Typography>
    </Box>
    <Box display="flex" flexDirection="row" my={1}>
      <Typography variant="body1" fontWeight="bold">
        Average:{' '}
      </Typography>
      <Typography variant="body1" ml={3}>
        {result?.toFixed(3)}
      </Typography>
    </Box>
  </Box>
);

const CsvAverage: React.FC<CsvComponentProps> = ({ operation }) => {
  const { selectFile, data, error } = useCSVFileUpload();

  let result = 0;

  useEffect(() => {
    if (operation === 'average' && data) {
      result = data.reduce((acc, curr) => acc + curr, 0) / data.length;
    } else if (operation === 'mean') {
    } else if (operation === 'std-deviation') {
    }
    result++;
  }, [data]);

  const average =
    data && data.reduce((acc, curr) => acc + curr, 0) / data.length;

  return (
    <ComponentContainer>
      <Box
        display="flex"
        flexDirection="row"
        m={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="body1" fontWeight="bold">
          Average of Input numbers
        </Typography>
        <Button variant="contained" size="small" onClick={selectFile}>
          Load
        </Button>
      </Box>

      {data && createInputNumbersElement(data, average)}
      {error && <Typography>{error}</Typography>}
    </ComponentContainer>
  );
};

export default CsvAverage;
