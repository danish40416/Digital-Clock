import React from 'react';
import DigitalWatch from './Components/digitalClock/DigitalWatch';
import AnalogWatch from './Components/analogClock/AnalogWatch';
import './App.css';

export default function App() {
  console.log('abc')

  return (
    <div> 
       {/* <DigitalWatch /> */}
       <AnalogWatch/>
    </div>

  );
}
