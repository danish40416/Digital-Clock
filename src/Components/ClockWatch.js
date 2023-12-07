import React, { useEffect } from 'react';

///// Seconds //////

function Seconds({ time, setTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const seconds = prevTime.seconds + 1 >= 60 ? 0 : prevTime.seconds + 1;
        const minutes = seconds === 0 ? prevTime.minutes + 1 : prevTime.minutes;
        const hours = minutes === 60 ? prevTime.hours + 1 : prevTime.hours;

        return { seconds, minutes, hours };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setTime]);

  return <div>{time.seconds}</div>;
}

////// Minutes ///////

function Minutes({ time, setTime }) {
  useEffect(() => {
    setTime((prevTime) => {
      const minutes = prevTime.seconds >= 60 ? prevTime.minutes + 1 : prevTime.minutes;
      const hours = prevTime.minutes === 60 ? prevTime.hours + 1 : prevTime.hours;

      return { ...prevTime, minutes, hours };
    });
  }, [setTime]);

  return <div>{time.minutes}</div>;
}

////// Hours ////////

function Hours({ time, setTime }) {
  useEffect(() => {
    setTime((prevTime) => {
      const hours = prevTime.minutes >= 60 && prevTime.seconds >= 60 ? prevTime.hours + 1 : prevTime.hours;

      return { ...prevTime, hours };
    });
  }, [setTime]);

  return <div>{time.hours}</div>;
}



export default function ClockWatch({ time, setTime }) {
  const resetTime = () => {
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  return (
    <div className="appss">
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
    <button className="reset-button btn btn-danger" onClick={resetTime}>
        Reset
      </button>
    </div>
  
  );
}
