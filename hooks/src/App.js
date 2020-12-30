import React from 'react';
import './App.css';

// Hooks
import UseState from './components/UseState'; 
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';

const App = () => {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseRef />
    </div>
  );
}

export default App;
