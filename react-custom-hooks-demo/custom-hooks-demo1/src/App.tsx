import React from 'react';
import { Container } from '@mui/material';
import DemoContainer from './components/DemoContainer';
import ComplexCounter from './components/localstorage/ComplexCounter';
import FriendList from './components/localstorage/FriendList';

function App() {
  return (
    <Container maxWidth="md">
      {/*  Local Storage Demo Container*/}
      <DemoContainer
        title="Local Storage Hook Demo"
        components={[ComplexCounter, FriendList]}
      />
    </Container>
  );
}

export default App;
