import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ComponentContainer from '../ComponentContainer';
import useCSVFileUpload from '../../hooks/useCSVFileUpload';

type CsvComponentProps = {
  operation: 'average' | 'std-deviation';
};

type resultOps = (numbers: number[]) => number;

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
        {`${resultTitle}: `}
      </Typography>
      <Typography variant="body1" ml={3}>
        {result?.toFixed(3)}
      </Typography>
    </Box>
  </Box>
);

const createErrorElement = (error: string): React.ReactElement => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '50%',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        m: 2,
      }}
    >
      {error}
    </Typography>
  </Box>
);

const CsvComponent: React.FC<CsvComponentProps> = ({ operation }) => {
  const { selectFile, data, error } = useCSVFileUpload();

  const average: resultOps = (numbers) =>
    numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

  const stdDeviation: resultOps = (numbers) => {
    const mean = average(numbers);
    const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));
    const variance = average(squaredDifferences);
    return Math.sqrt(variance);
  };

  const getOpsResult: resultOps = (numbers) => {
    if (operation === 'average') return average(numbers);
    else if (operation === 'std-deviation') return stdDeviation(numbers);
    else return 0;
  };

  const getOperationName = (): string => {
    if (operation === 'average') return 'Average';
    else if (operation === 'std-deviation') return 'Std Deviation';
    else return '';
  };

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
          {getOperationName()} of Input numbers
        </Typography>
        <Button variant="contained" size="small" onClick={selectFile}>
          Load
        </Button>
      </Box>

      {data &&
        createInputNumbersElement(data, getOperationName(), getOpsResult(data))}
      {error && createErrorElement(error)}
    </ComponentContainer>
  );
};

export default CsvComponent;
