import React, { useState } from 'react';
import './bus.css'; 

const Bus = () => {
  const rows = 5;  
  const columns = 4;  

  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const seats = [];
    let seatNumber = 1;

    for (let row = 0; row < rows; row++) {
      const rowSeats = [];

      for (let col = 0; col < columns; col++) {
        const isAisle = col === 2;  
        if (isAisle) {
          rowSeats.push(
            <div key={`aisle-${row}-${col}`} className="aisle"></div>
          );
        } else {
          rowSeats.push(
            <div
              key={seatNumber}
              className={`seat ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
              onClick={() => toggleSeatSelection(seatNumber)}
            >
              {seatNumber}
            </div>
          );
          seatNumber++;
        }
      }







      seats.push(
        <div key={`row-${row}`} className="row">
          {rowSeats}
        </div>
      );
    }

    return seats;
  };

  return (
    <div className="bus-container">
      <h1>Bus Seat Booking</h1>
      <div className="bus-layout">
        <div className="driver-seat">Driver</div>
        <div className="seats-container">
          {renderSeats()}
        </div>
      </div>
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <p>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
      </div>
    </div>
  );
};

export default Bus;


