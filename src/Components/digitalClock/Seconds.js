import React, { useEffect } from 'react';

export default function Seconds({ time, setTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1 >= 60 ? 0 : prevTime.seconds + 1;
        const minutes = seconds === 0 ? prevTime.minutes + 1 : prevTime.minutes;
        const hours = minutes === 60 ? prevTime.hours + 1 : prevTime.hours;

        return { seconds, minutes, hours };
      }); 
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const newSeconds= time.seconds<10 ? `0${time.seconds}`: time.seconds;

  return <div>{newSeconds}</div>;
}
