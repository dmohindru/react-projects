import React from 'react';
import { Container } from '@mui/material';
import DemoContainer from './components/DemoContainer';
import ComplexCounter from './components/localstorage/ComplexCounter';
import FriendList from './components/localstorage/FriendList';
import OnLineStatusOne from './components/onlinestatus/OnLineStatusOne';
import OnLineStatusTwo from './components/onlinestatus/OnLineStatusTwo';
import CsvAverage from './components/csvdata/CsvAverage';
import CsvStdDeviation from './components/csvdata/CsvStdDeviation';
import SydneyWeather from './components/weather/SydneyWeather';
import LudhianaWeather from './components/weather/LudhianaWeather';

function App() {
  return (
    <Container maxWidth="md">
      {/*  Local Storage Demo Container*/}
      <DemoContainer
        title="Local Storage Hook Demo"
        components={[ComplexCounter, FriendList]}
      />
      {/*   Online hook Demo Container*/}
      <DemoContainer
        title="Online Hook Demo"
        components={[OnLineStatusOne, OnLineStatusTwo]}
      />
      {/* Csv File Hook Demo */}
      <DemoContainer
        title="CSV File Hook Demo"
        components={[CsvAverage, CsvStdDeviation]}
      />
      {/* Weather Hook Demo */}
      <DemoContainer
        title="Weather Hook Demo"
        components={[SydneyWeather, LudhianaWeather]}
      />
    </Container>
  );
}

export default App;
