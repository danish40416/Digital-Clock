import React, { useEffect } from 'react';

export default function Minutes({ time, setTime }) {
  useEffect(() => {
    setTime((prevTime) => {
      
      const minutes = prevTime.seconds >=60 ? prevTime.minutes + 1 : prevTime.minutes;
      const hours = prevTime.minutes === 60 ? prevTime.hours + 1 : prevTime.hours;
      return { ...prevTime,minutes,hours};
    });
  }, [ setTime]);
  const newminutes=time.minutes<10  ? `0${time.minutes}`: time.minutes

  return <div>{newminutes}</div>;
}
