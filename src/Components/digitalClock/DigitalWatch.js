import React, { useState, useEffect } from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import Modal from './Modal';

export default function DigitalWatch() {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const [modalOpen, setmodalOpen] = useState(false);

  const resetTime = () => {
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  const openModal = () => {
    setmodalOpen(true);
  };

  const closeModal = () => {
    setmodalOpen(false);
  };

  const saveChanges = (newTime) => {
    setTime(newTime);
  };

  const updateRealTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    setTime({ hours, minutes, seconds });
  };

  useEffect(() => {
  
    updateRealTime();
    const intervalId = setInterval(updateRealTime, 1000); 
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <>
      <div className="app">
        <div className="digital-watch">
          <div id="hours">
            <Hours time={time} />
          </div>
          <div id="colon">:</div>
          <div id="minutes">
            <Minutes time={time} />
          </div>
          <div id="seconds">
            <Seconds time={time} setTime={setTime} />
          </div>
        </div>
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} onSave={saveChanges} />
      <div className='buttons'>
        <button className="open-modal-btn" onClick={openModal}> Set Time</button>
        <button className="reset-btn " onClick={resetTime}> Reset </button>
        <button className="update-real-time-btn" onClick={updateRealTime}>Update Real Time </button>
      </div>
    </>
  );
}
