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

type WeatherTableProps = {
  city: string;
  lat: number;
  lng: number;
};

type WeatherItem = {
  label: string;
  value: string;
};

const getTableRow = (label: string, value: string): React.ReactElement => (
  <TableRow key={`${label}-${value}`}>
    <TableCell component="th" scope="row" style={{ fontWeight: 'bold' }}>
      {label}
    </TableCell>
    <TableCell>{value}</TableCell>
  </TableRow>
);

const WeatherTable: React.FC<WeatherTableProps> = ({ city, lat, lng }) => {
  const weatherItems: WeatherItem[] = [
    { label: 'City', value: city },
    { label: 'Current Temp', value: '12.50' },
    { label: 'Max Temp', value: '15.67' },
    { label: 'Min Temp', value: '3.50' },
    { label: 'Sun Rise', value: '7:00 AM' },
    { label: 'Sun Set', value: '5:00 PM' },
    { label: 'Day Duration', value: '10 Hr 12 Min 34 Secs' },
  ];

  return (
    <ComponentContainer>
      <Typography
        variant="body1"
        fontWeight="bold"
        sx={{ display: 'flex', my: 0.5, justifyContent: 'center' }}
      >
        Weather Info
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {weatherItems.map(({ label, value }) => getTableRow(label, value))}
          </TableBody>
        </Table>
      </TableContainer>
    </ComponentContainer>
  );
};

export default WeatherTable;
