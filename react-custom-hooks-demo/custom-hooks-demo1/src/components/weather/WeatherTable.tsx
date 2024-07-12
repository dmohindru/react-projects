import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import ComponentContainer from '../ComponentContainer';
import useWeather, { WeatherItem } from '../../hooks/useWeather';

type WeatherTableProps = {
  city: string;
  lat: number;
  lng: number;
  updateFrequencySec: number;

  timezone: string;
};

const getTableRow = (label: string, value: string): React.ReactElement => (
  <TableRow key={`${label}-${value}`}>
    <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
      {label}
    </TableCell>
    <TableCell>{value}</TableCell>
  </TableRow>
);

const getErrorMessage = (weatherItems: WeatherItem[]): React.ReactElement => {
  const errorObj = weatherItems.find(({ label }) => label === 'Error');

  return (
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{
        color: 'red',
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      {errorObj ? errorObj.value : 'Unknown Error'}
    </Typography>
  );
};

const hasErrorLabel = (weatherItems: WeatherItem[]) =>
  weatherItems.some(({ label }) => label === 'Error');

const WeatherTable: React.FC<WeatherTableProps> = ({
  city,
  lat,
  lng,
  updateFrequencySec,
  timezone,
}) => {
  const weatherItems = useWeather(lat, lng, updateFrequencySec, timezone);

  return (
    <ComponentContainer>
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ display: 'flex', my: 0.5, justifyContent: 'center' }}
      >
        Weather Info for {city}
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {!hasErrorLabel(weatherItems) &&
              weatherItems.map(({ label, value }) => getTableRow(label, value))}
            {hasErrorLabel(weatherItems) && getErrorMessage(weatherItems)}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentContainer>
  );
};

export default WeatherTable;
