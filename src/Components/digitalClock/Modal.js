import React, { useState } from 'react';

export default function Modal({ isOpen, onClose, onSave }) {
  const [modalTime, setModalTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const handleSave = () => {

    onSave(modalTime);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <label htmlFor="modalHours">Hours:</label>
        <input type="number"  value={modalTime.hours}
          onChange={(e) => setModalTime({ ...modalTime, hours: parseInt(e.target.value.slice(0,2))  })} />

        <label htmlFor="modalMinutes">Minutes:</label>
        <input type="number"  value={modalTime.minutes}
          onChange={(e) => setModalTime({ ...modalTime, minutes: parseInt(e.target.value.slice(0,2))  })} />

        <label htmlFor="modalSeconds">Seconds:</label>
        <input type="number"  value={modalTime.seconds}
          onChange={(e) => setModalTime({ ...modalTime, seconds: parseInt(e.target.value.slice(0,2))  })} />

        <button onClick={handleSave}>Save Changes</button>
        <button className="close" onClick={onClose}> Close Modal </button>
      </div>
    </div>
  );
}
