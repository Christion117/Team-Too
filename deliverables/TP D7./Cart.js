import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import Authentication from './components/Authentication';
import Button from 'react-bootstrap/Button';



function Cart(props){
    const [totalPrice, setTotalPrice] = useState(0)
    const [aty, setAty] = useState(0)



    return (
        <div className="Cart">
            <div>Cart</div>
            <button role = "confirmation" onClick={() => {
                props.func(totalPrice);
            }}>Confirm</button>
            <button role = "removeItem" onClick={() => {
                props.func(0);
            }}>Remove Item</button>
            <button role = "clearCart" onClick={() => {
                props.func(0);
            }}>Clear Cart</button>
        </div>
    );
}