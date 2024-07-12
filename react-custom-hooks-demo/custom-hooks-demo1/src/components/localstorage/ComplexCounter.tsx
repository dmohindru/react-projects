import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ComponentContainer from '../ComponentContainer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useLocalStorage from '../../hooks/useLocalStorage';

type counter = {
  name: string;
  value: number;
};

type ops = (c: counter) => void;

const createCounterControl = (
  currentCounter: counter,
  increment: ops,
  decrement: ops
): React.ReactElement => (
  <Box
    display="flex"
    flexDirection="row"
    my={0.5}
    key={`${currentCounter.name}-${currentCounter.value}`}
  >
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" fontWeight="bold">
        {currentCounter.name}:
      </Typography>
    </Box>
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <IconButton
        color="primary"
        size="small"
        onClick={() => increment(currentCounter)}
      >
        <AddIcon />
      </IconButton>
      <Typography
        variant="body1"
        fontWeight="bold"
        mx={2}
        width="30px"
        textAlign="center"
      >
        {currentCounter.value}
      </Typography>
      <IconButton
        color="primary"
        size="small"
        onClick={() => decrement(currentCounter)}
      >
        <RemoveIcon />
      </IconButton>
    </Box>
  </Box>
);

const ComplexCounter: React.FC = () => {
  const initialCounters: counter[] = [
    { name: 'counter1', value: 20 },
    { name: 'counter2', value: 30 },
    { name: 'counter3', value: 2 },
    { name: 'counter4', value: 200 },
  ];

  const [counters, setCounters] = useLocalStorage<counter[]>(
    'ComplexCounter',
    initialCounters
  );

  const updateCounter = () => {
    const newCounter: counter[] = [];
    counters.forEach((c) => newCounter.push(c));
    setCounters(newCounter);
  };
  const increment = (c: counter) => {
    c.value++;
    console.log(`Counter: ${c.name}, Value: ${c.value}`);
    updateCounter();
  };
  const decrement = (c: counter) => {
    c.value--;
    console.log(`Counter: ${c.name}, Value: ${c.value}`);
    updateCounter();
  };

  return (
    <ComponentContainer>
      <Box display="flex" flexDirection="column">
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            my: 0.5,
          }}
          variant="h5"
          fontWeight="bold"
        >
          Complex Counter
        </Typography>
        {counters.map((counter) =>
          createCounterControl(counter, increment, decrement)
        )}
      </Box>
    </ComponentContainer>
  );
};

export default ComplexCounter;
