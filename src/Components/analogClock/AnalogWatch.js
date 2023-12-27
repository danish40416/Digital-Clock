import React, { useState, useEffect } from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import TimeSetModal from '../digitalClock/TimeSetModal';
import Classes from './AnalogWatch.module.css'

export default function AnalogWatch ()  {
  const [time, setTime] = useState({seconds:0, minutes:0, hours:0});
  const resetTime = () => {
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  ////Modal///

  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const saveChanges = (newTime) => {
    setTime(newTime);
  };

  ////Real Time////

  const updateRealTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds()%12;

    setTime({ hours, minutes, seconds });
  };

  useEffect(() => {
    updateRealTime();
  },[])
  return (
      <>
        <div className={Classes.analog}>
          <div className={Classes.clock}>
            <div className={Classes.three}>3</div>
            <div className={Classes.six}>6</div>
            <div className={Classes.nine}>9</div>
            <div className={Classes.twelve}>12</div>
            <Hours time={time} />
            <Minutes time={time} />
            <Seconds time={time} setTime={setTime} />
          </div>
        </div>
        <TimeSetModal isOpen={ModalOpen} onClose={closeModal} onSave={saveChanges} />
        <div className={Classes.buttons}>
          <button className={Classes.openModalBtn} onClick={openModal}>Set Time</button>
          <button className={Classes.resetBtn} onClick={resetTime}>Reset</button>
          <button className={Classes.updateRealTimeBtn} onClick={updateRealTime}>Update Real Time</button>
        </div>
      </>
  );
};


