import React, { useEffect, useState } from 'react';

export default function Seconds ({ updateSeconds })  {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeconds = (seconds + 1) % 60;
      setSeconds(newSeconds);
      updateSeconds(newSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, updateSeconds]);

  return (
    <div>
    </div>
  );
};



