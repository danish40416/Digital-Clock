import React, { useState } from 'react';
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import Modal from './Modal';

export default function DigitalWatch({ time, setTime }) {
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

 
  return (
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
      <button className="open-modal-btn" onClick={openModal}>
        Set Time
      </button>

      <Modal isOpen={ModalOpen} onClose={closeModal} onSave={saveChanges} />
    </div>
    
  
  );
}
