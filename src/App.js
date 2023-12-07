import React, { useState } from 'react';
import Seconds from './Components/Seconds';
import Minutes from './Components/Minutes';
import Hours from './Components/Hours';

export default function App() {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });

  const resetTime = () => {
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  return (
    <div className="App">
      <Seconds time={time} setTime={setTime} />
      <Minutes time={time} setTime={setTime} />
      <Hours time={time} setTime={setTime} />
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}

 
