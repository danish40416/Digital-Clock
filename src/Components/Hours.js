import React, { useEffect } from 'react';

export default function Hours({ time, setTime }) {
  useEffect(() => {
    setTime((prevTime) => {
      const seconds = prevTime.seconds;
      const minutes = prevTime.minutes;
      const hours = minutes >= 60 && seconds >= 60 ? prevTime.hours + 1 : prevTime.hours;

      return { seconds,minutes, hours };
    });
  }, [ setTime]);

  return <div>{time.hours} hours</div>;
}
