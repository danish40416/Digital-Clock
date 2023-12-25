import React, { useEffect, useState } from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import Modal from './TimeSetModal';
import classes from './DigitalWatch.module.css'

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
    <div className={classes.app}>
      <div className={classes.digitalWatch}>
        <div id={classes.hours}>
          <Hours time={time} />
        </div>
        <div id={classes.colon}>:</div>
        <div id={classes.minutes}>
          <Minutes time={time} />
        </div>
        <div id={classes.seconds}>
          <Seconds time={time} setTime={setTime} />
        </div>
      </div>
      </div>
      <Modal isOpen={ModalOpen} onClose={closeModal} onSave={saveChanges} />
      <div className={classes.buttons}>
      <button className={classes.openModalBtn} onClick={openModal}> Set Time</button>
      <button className={classes.resetBtn} onClick={resetTime}> Reset </button>
      <button className={classes.updateRealTimeBtn} onClick={updateRealTime}>Update Real Time </button>
      </div>
      </>
  );
}
