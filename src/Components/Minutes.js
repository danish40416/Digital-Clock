import React, { useEffect, useState } from 'react';

export default function Minutes({ updateMinutes }) {
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        const newMinutes = (prevMinutes + 1) % 60;
        updateMinutes(newMinutes);
        return newMinutes;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [updateMinutes]);

  return <div></div>;
}
