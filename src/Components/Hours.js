import React, { useEffect, useState } from 'react';

export default function Hours ({ updateHours }) {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHours = (hours + 1) % 24;
      setHours(newHours);
      updateHours(newHours);
    }, 3600000);

    return () => clearInterval(interval);
  }, [hours, updateHours]);

  return (
    <div>
    </div>
  );
};


