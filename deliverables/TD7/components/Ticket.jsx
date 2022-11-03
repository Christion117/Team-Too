import React, { useState } from 'react'

function Ticket(props) {
    const [ticketID, setTicketID] = useState(0)
    //const [ticketPrice, setTicketPrice] = useState(0.00)

  return (
    <div>
        <h1>Ticket</h1>
        <p>Ticket ID: {ticketID}</p>
        <p>Ticket Price: {props.ticketPrice}</p>
        
        {/* Button to generate a new ticket */}
{/* 
        <button onClick={() => {
            setTicketID(Math.floor(Math.random() * 1000000))
            setTicketPrice(Math.floor(Math.random() * 100))
        }}>Generate Ticket</button> */}
        

        


    </div>

    
  )
}

export default Ticket

