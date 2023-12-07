import React, { useEffect } from 'react';

export default function Hours({ time, setTime }) {
  useEffect(() => {
    setTime((prevTime) => {
     
      const hours = prevTime.minutes >= 60 && prevTime.seconds >= 60 ? prevTime.hours + 1 : prevTime.hours;

      return { ...prevTime, hours };
    });
  }, [ setTime]);

  return <div>{time.hours} hours</div>;
}
