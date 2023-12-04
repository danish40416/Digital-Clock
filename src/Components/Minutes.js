import React, { useEffect, useState } from 'react';

export default function Minutes ({ updateMinutes })  {
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMinutes = (minutes + 1) % 60;
      setMinutes(newMinutes);
      updateMinutes(newMinutes);
    }, 60000);

    return () => clearInterval(interval);
  }, [minutes, updateMinutes]);

  return (
    <div>
    </div>
  );
};


