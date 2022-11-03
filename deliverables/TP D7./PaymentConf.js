import button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Ticket from './components/Ticket';
import Authentication from './components/Authentication';



function PaymentConf() {
    const [totalPrice, setTotalPrice] = useState(0)
    

    return (
    <div>
        <div className="PaymentConf">
            <Cart func={setTotalPrice}/>
        </div>
        <div button role = "completePurchase" onClick={() => {
            props.func(totalPrice)
        }}>Complete Purchase</div>

    </div>
    );
    
    
}