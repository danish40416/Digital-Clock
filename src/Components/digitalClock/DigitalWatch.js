import React, { useEffect, useState } from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import Modal from '../reusable/TimeSetModal';
import classes from './DigitalWatch.module.css'
import Buttons from '../reusable/Buttons';

const { app, digitalWatch, hours, minutes, seconds, colon } = classes;

export default function DigitalWatch() {

  ///Reset Time////
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });

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
    const seconds = currentTime.getSeconds();

    setTime({ hours, minutes, seconds });
  };

  useEffect(() => {
    updateRealTime(); 
  },[])

  return (
    <>
    <div className={app}>
      <div className={digitalWatch}>
        <div id={hours}>
          <Hours time={time} />
        </div>
        <div id={colon}>:</div>
        <div id={minutes}>
          <Minutes time={time} />
        </div>
        <div id={seconds}>
          <Seconds time={time} setTime={setTime} />
        </div>
      </div>
      </div>
      <Modal isOpen={ModalOpen} onClose={closeModal} onSave={saveChanges} />
      <Buttons openModal={openModal} resetTime={resetTime} updateRealTime={updateRealTime} />
      </>
  );
}
