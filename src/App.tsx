// src/App.tsx
import React from 'react';
import { Greeting } from './components';


const App: React.FC = () => {
  return (
    <div className="App">
      <Greeting name='Саня' />

    </div>
  );
};

export default App;