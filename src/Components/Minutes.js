import React, { useEffect } from 'react';

export default function Minutes({ time, setTime }) {
  useEffect(() => {
    setTime((prevTime) => {
      const seconds = prevTime.seconds;
      const minutes = seconds >=60 ? prevTime.minutes + 1 : prevTime.minutes;
      const hours = minutes === 60 ? prevTime.hours + 1 : prevTime.hours;

      return { seconds,minutes,hours};
    });
  }, [ setTime]);

  return <div>{time.minutes} minutes</div>;
}
