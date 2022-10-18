import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  const reduce = () => {
    setNumber(number - 1)
  }

  

  return (
    <div className="App">
       <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{ number }</h1>
        </div>
        <div className="buttons">
          <button title={"-"} onClick={increase}> Add </button>
          <button title={"+"} onClick={reduce}> Subtract </button>
        </div>
      </div>
    </div>
  );
}

export default App;
