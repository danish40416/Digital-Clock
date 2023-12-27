
import React from 'react';


const Buttons = ({ openModal, resetTime, updateRealTime }) => {
  return (
    <div className='buttons'>
      <button className='openModalBtn' onClick={openModal}>
        Set Time
      </button>
      <button className='resetBtn' onClick={resetTime}>
        Reset
      </button>
      <button className='updateRealTimeBtn' onClick={updateRealTime}>
        Update Real Time
      </button>
    </div>
  );
};

export default Buttons;
