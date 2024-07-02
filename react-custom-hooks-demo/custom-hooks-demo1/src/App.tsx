import React from 'react';

import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [name, setName, removeName] = useLocalStorage<string>('name', 'Dhruv');
  return (
    <div>
      <></>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={removeName}>Remove Name</button>
    </div>
  );
}

export default App;
