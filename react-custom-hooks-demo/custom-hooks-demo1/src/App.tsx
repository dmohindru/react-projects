import React from 'react';
import { Container } from '@mui/material';
import DemoContainer from './components/DemoContainer';
import ComplexCounter from './components/localstorage/ComplexCounter';
import FriendList from './components/localstorage/FriendList';
import OnLineStatusOne from './components/onlinestatus/OnLineStatusOne';
import OnLineStatusTwo from './components/onlinestatus/OnLineStatusTwo';

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
    </Container>
  );
}

export default App;
