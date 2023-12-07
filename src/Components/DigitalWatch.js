import React  from 'react';
import Hours from './Hours';
import Minutes from './Minutes';a
import Seconds from './Seconds';

export default function DigitalWatch({ time, setTime }) {
  return (
  <div className="app">
    <div className="container">
      <div className="box bg-primary">
        <Hours time={time} setTime={setTime} />
      </div>
      <div className='colon' >:</div>

      <div className="box bg-primary">
        <Minutes time={time} setTime={setTime} />
      </div>
      <div className='colon' >:</div>
      <div className="box bg-info">
        <Seconds time={time} setTime={setTime} />
      </div>
    </div>
  </div>
  );
}
