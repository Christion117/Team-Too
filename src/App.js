import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import Button from './components/Button'

function App() {
  const [number, setNumber] = useState(0)
  const [buttonName, setButtonName] = useState('Button')

  const increase = () => {
    setNumber(number + 1)
  }

  const reduce = () => {
    setNumber(number - 1)
  }

  const bName = () => {
    setButtonName('Hi')
  }

  

  return (
    <div className="App">
       <div>
        <div className="count">
          <h3>Count:</h3>
          <h1>{ number }</h1>
        </div>
        <div className="buttons">
          <Button name={buttonName} onClick={reduce} />
          <Button name={buttonName} onClick={increase} />
          <button title={"-"} onClick={increase}> Add </button>
          <button title={"+"} onClick={bName}> Subtract </button>
        </div>
      </div>
    </div>
  );
}

export default App;
