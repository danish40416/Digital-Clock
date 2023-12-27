import React  from 'react';

export default function Minutes ({ time })  {


  const minutes = time.minutes;
  const seconds = time.seconds;
  const minuteDegrees = (minutes + seconds / 60) * 6;

  const handStyle = {
    transform: `rotate(${minuteDegrees}deg)`,
  };

  return <div className="minute-hand" style={handStyle}></div>;
};


