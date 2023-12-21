import React, { useState } from 'react';
import DigitalWatch from './Components/digitalClock/DigitalWatch';
import './App.css';

export default function App() {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });
 
  const resetTime = () => {
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };
  return (
    <>
    <div className="app">
      <div className="container">
        <DigitalWatch time={time} setTime={setTime} />
      </div>
    <button className="reset-btn " onClick={resetTime}> Reset </button>
    </div>
    
    </>
  );
}
