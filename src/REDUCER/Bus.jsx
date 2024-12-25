import React, { useState } from 'react';
import './bus.css'; // Add styles for the bus UI

const Bus = () => {
  // Define rows and columns for the bus seats
  const rows = 5; // Number of rows
  const columns = 4; // Number of columns (2 on each side of the aisle)

  // State to track selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Handle seat click
  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // Remove the seat from the selection if already selected
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Add the seat to the selection if not already selected
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // Generate seat layout
  const renderSeats = () => {
    const seats = [];
    let seatNumber = 1;

    for (let row = 0; row < rows; row++) {
      const rowSeats = [];

      for (let col = 0; col < columns; col++) {
        const isAisle = col === 2; // Add an aisle after the second column
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

// Example CSS in 'Bus.css':
/* Bus.css */

