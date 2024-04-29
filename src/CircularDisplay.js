import React from 'react';
import './CircularHall.css'; // Import CSS file for styling

const CircularHall = ({ seatData }) => {
  return (
    <div className="hall">
      {seatData.map((row, rowIndex) => (
        <div className="row" key={rowIndex} style={{ transform: `translateX(-50%) translateY(-50%) rotate(${rowIndex * (360 / seatData.length)}deg)` }}>
          {row.map((seat, seatIndex) => (
            <div
              key={seatIndex}
              className={`seat ${seat.status}`}
              style={{
                top: `${seatIndex * 20}px`, // Adjust distance between seats vertically
                left: `${(seatIndex * 20) - ((row.length - 1) * 10)}px`, // Center seats horizontally
              }}
            >
              {seat.id}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CircularHall
