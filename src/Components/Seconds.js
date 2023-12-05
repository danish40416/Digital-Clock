import React, { useState, useEffect } from 'react';

export default function Seconds(restSeconds) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let currentSeconds = 0;

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        currentSeconds = (prevSeconds + 1) >= 60 ? 0 : prevSeconds + 1;
        restSeconds(currentSeconds)
        return currentSeconds;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []); 
  return <div>{seconds} seconds</div>;
}
