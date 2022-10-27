import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import Authentication from './components/Authentication';
import Button from 'react-bootstrap/Button';
import Event from './Event';
import React, { useState } from 'react';

function App() {
  const [ticketPrice, setTicketPrice] = useState(50)
  
  const sale = (salePrice) => {
  setTicketPrice(salePrice)
  }
  
  return (
    
    <div className="App">

      <Ticket ticketPrice ={ticketPrice}/>

      <Event func={sale}/>
    </div>
  );
}

export default App;
