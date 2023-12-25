import React from 'react';
import Watches from './Components/watches/Watches';
import DigitalWatch from './Components/digitalClock/DigitalWatch';
import AnalogWatch from './Components/analogClock/AnalogWatch';
import ClockHouse from './Components/clockHouse/ClockHouse';
import './App.css';
import { Routes,Route } from 'react-router-dom';

export default function App() {
 

  return (
    <div>
    <Routes>
      <Route path='/' element={<ClockHouse />} />
      <Route path='see-watches' element={<Watches />} />
      <Route path='/see-watches/digital-watch' element={<DigitalWatch />} />
      <Route path='/see-watches/analog-watch' element={<AnalogWatch />} />
    </Routes>
  </div>

  );
}
