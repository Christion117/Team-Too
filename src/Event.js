import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import Authentication from './components/Authentication';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function Event(props) {
    const [price, setPrice] = useState(50)

  return (
    <div className="Event">
      <div>Event</div> 
      <div>{price}</div>
      <div>
      <button role="pricebtn" onClick={() => {
           props.func(100.00)
        }}>Generate Price</button>
      </div>
      <div>Capacity</div>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default Event;