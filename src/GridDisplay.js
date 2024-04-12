import React, { useState, useEffect } from 'react';

const GridDisplay = () => {
    const [selectedHall, setSelectedHall] = useState('FLT');
    const [selectedPattern, setSelectedPattern] = useState('Checkerboard');
    const [gridData, setGridData] = useState([]);

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

    return (
        <div>
            <div>
                <label htmlFor="hall">Select Hall:</label>
                <select id="hall" value={selectedHall} onChange={handleHallChange}>
                    <option value="TLT">TLT</option>
                    <option value="FLT">FLT</option>
                </select>
            </div>
            <div>
                <label htmlFor="pattern">Select Pattern:</label>
                <select id="pattern" value={selectedPattern} onChange={handlePatternChange}>
                    <option value="Checkerboard">Checkerboard</option>
                    <option value="Normal">Normal</option>
                    <option value="TwoEmptySpaces">Two Empty Spaces</option>
                </select>
            </div>
            <div>
                {gridData.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex' }}>
                        {row.map((seat, seatIndex) => (
                            <div key={seatIndex} style={{ backgroundColor: seat.color, padding: '5px' }}>
                                {seat.seat_number}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridDisplay;
