import React, { useState } from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';

export default function DigitalWatch ()  {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  const ResetTime=()=>{
    setHours(0);
    setMinutes(0);
    setSeconds(0);

  }
  return (
    <div>
       <Hours updateHours={setHours} />
      <Minutes updateMinutes={setMinutes}/>
      <Seconds updateSeconds={setSeconds} />
      <div>
        <h2>Time: {hours}h {minutes}m {seconds}s</h2>
      </div>
      <button onClick={ResetTime}>Reset Time</button>

    </div>
  );
};

