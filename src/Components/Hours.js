import React, { useState, useEffect } from 'react';

export default function Minutes() {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let currentHours = 0;

    const interval = setInterval(() => {
      setHours((prevHours) => {
        currentHours = (prevHours + 1) >= 24 ? 0 : prevHours + 1;
        
        return currentHours;
      });
    }, 3600000);
    return () => clearInterval(interval);
  }, []); 
  return <div>{hours} Hours</div>;
}
