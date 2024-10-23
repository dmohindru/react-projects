import React, { useState, useEffect } from 'react';
import { Button, LinearProgress, Box } from '@mui/material';

interface TimedButtonProps {
  initialTime: number;
  label: string;
  onClick: () => void;
}

export const TimedButton: React.FC<TimedButtonProps> = ({
  initialTime,
  label,
  onClick,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [progress, setProgress] = useState(100); // for LinearProgress (from 0 to 100)

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (disabled && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
        setProgress((prevProgress) => (remainingTime / initialTime) * 100);
      }, 1000);
    } else if (remainingTime <= 0) {
      setDisabled(false);
      setRemainingTime(initialTime);
      setProgress(100);
    }

    return () => {
      clearInterval(timer);
    };
  }, [disabled, remainingTime, initialTime]);

  const handleClick = () => {
    onClick();
    setDisabled(true);
    setRemainingTime(initialTime);
  };

  return (
    <Box sx={{ display: 'inline-block', position: 'relative' }}>
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={disabled}
        sx={{ width: '200px' }}
      >
        {disabled ? `Wait ${remainingTime}s` : label}
        {disabled && (
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
            }}
          />
        )}
      </Button>
    </Box>
  );
};
