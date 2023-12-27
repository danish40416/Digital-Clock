import React  from 'react';
import classes from './AnalogWatch.module.css'

export default function Minutes ({ time })  {


  const minutes = time.minutes;
  const seconds = time.seconds;
  const minuteDegrees = (minutes + seconds / 60) * 6;

  const handStyle = {
    transform: `rotate(${minuteDegrees}deg)`,
  };

  return <div className={classes.minuteHand} style={handStyle}></div>;
};
