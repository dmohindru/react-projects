import React from 'react';
import WeatherTable from './WeatherTable';

const SydneyWeather: React.FC = () => {
  return (
    <WeatherTable
      city="Sydney"
      lat={-33.86}
      lng={151.2}
      updateFrequencySec={60}
      timezone="Australia/Sydney"
    />
  );
};

export default SydneyWeather;
