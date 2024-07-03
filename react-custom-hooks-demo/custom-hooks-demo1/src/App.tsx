import React from 'react';
import { Container } from '@mui/material';
import DemoContainer from './components/DemoContainer';
import ComplexCounter from './components/localstorage/ComplexCounter';

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        background: 'gray',
      }}
    >
      <DemoContainer
        title="Local Storage Hook Demo"
        components={[ComplexCounter, ComplexCounter]}
      />
    </Container>
  );
}

export default App;
