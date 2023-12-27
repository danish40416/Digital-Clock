import React from 'react';

export default function Hours ({ time })  {

  const hours = time.hours % 12;
  const minutes = time.minutes;
  const hourDegrees = (hours + minutes / 60) * 30;

  const handStyle = {
    transform: `rotate(${hourDegrees}deg)`,
  };

  return <div className="hour-hand" style={handStyle}></div>;
};

