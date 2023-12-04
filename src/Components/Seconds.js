import React, { useState, useEffect } from 'react';

export default function Seconds({ updateSeconds }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = (prevSeconds + 1) % 60;
        updateSeconds(newSeconds);
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [updateSeconds]);

  return <div></div>;
}
