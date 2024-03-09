import React, { useState, useEffect } from 'react';
import './GridDisplay.css';

const GridDisplay = ({ hall, pattern }) => {
    const [gridData, setGridData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/grid-data/${hall}/${pattern}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setGridData(data))
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                setError(error.message);
            });
    }, [hall, pattern]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {gridData.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((seat, seatIndex) => (
                        <div key={seatIndex} style={{ backgroundColor: seat.color }}>
                            {seat.seat_number}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GridDisplay;
