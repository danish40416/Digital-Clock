import React, { useEffect } from 'react';
import classes from './AnalogWatch.module.css'

export default function Seconds({ time, setTime }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1 >= 60 ? 0 : prevTime.seconds + 1;
        const minutes = seconds === 0 ? prevTime.minutes + 1 : prevTime.minutes;
        const hours = minutes === 60 ? prevTime.hours + 1 : prevTime.hours;
        return {hours,minutes,seconds, };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const secondDegrees = time.seconds * 6;

  const handStyle = {
    transform: `rotate(${secondDegrees}deg)`,
  };

  return <div className={classes.secondHand} style={handStyle}></div>;
};
