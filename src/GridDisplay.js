import React, { useState, useEffect } from 'react';
import './GridDisplay.css'; // Import CSS file for styling

const GridDisplay = () => {
    const [selectedHall, setSelectedHall] = useState('FLT');
    const [selectedPattern, setSelectedPattern] = useState('Checkerboard');
    const [gridData, setGridData] = useState([]);
    const [hoveredSeat, setHoveredSeat] = useState(null); // State to hold the details of the hovered seat

    const fetchGridData = async () => {
        try {
            const response = await fetch('http://localhost:5000/get_grid_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ selected_hall: selectedHall, selected_pattern: selectedPattern }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setGridData(data);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };

    useEffect(() => {
        fetchGridData();
    }, [selectedHall, selectedPattern]); // Fetch grid data whenever selectedHall or selectedPattern changes

    const handleHallChange = (event) => {
        setSelectedHall(event.target.value);
    };

    const handlePatternChange = (event) => {
        setSelectedPattern(event.target.value);
    };

    const handleSeatHover = (seat) => {
        setHoveredSeat(seat);
    };

    const handleSeatLeave = () => {
        setHoveredSeat(null);
    };

    return (
        <div className="grid-display-container"> {/* Apply a container class for styling */}
            <div className="select-container"> {/* Apply styling to the select containers */}
                <label htmlFor="hall">Select Hall:</label>
                <select id="hall" value={selectedHall} onChange={handleHallChange}>
                    <option value="TLT">TLT</option>
                    <option value="FLT">FLT</option>
                </select>
            </div>
            <div className="select-container">
                <label htmlFor="pattern">Select Pattern:</label>
                <select id="pattern" value={selectedPattern} onChange={handlePatternChange}>
                    <option value="Checkerboard">Checkerboard</option>
                    <option value="Normal">Normal</option>
                    <option value="TwoEmptySpaces">Two Empty Spaces</option>
                    <option value="Circular">Circular Hall representation</option>
                </select>
            </div>
            <div className="grid-container"> {/* Apply styling to the grid container */}
                {gridData.map((row, rowIndex) => (
                    <div key={rowIndex} className="row"> {/* Apply styling to each row */}
                        {row.map((seat, seatIndex) => (
                            <div
                                key={seatIndex}
                                className="seat"
                                style={{ backgroundColor: seat.color }}
                                onMouseEnter={() => handleSeatHover(seat)}
                                onMouseLeave={handleSeatLeave}
                            >
                                {seat.seat_number}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {hoveredSeat && ( 
                <div className="seat-popup">
                    <img src={hoveredSeat.image} alt={hoveredSeat.seat_number} />
                    <div>
                        <p>Name: {hoveredSeat.name}</p>
                        <p>Matric Number: {hoveredSeat.matric_number}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GridDisplay;
