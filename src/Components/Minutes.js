import React, { useState, useEffect } from 'react';

export default function Minutes() {
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let currentMinutes = 0;

    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        currentMinutes = (prevMinutes + 1) >= 60 ? 0 : prevMinutes + 1;
        return currentMinutes;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []); 
  return <div>{minutes} Minutes</div>;
}
