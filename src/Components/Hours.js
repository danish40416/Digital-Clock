import React, { useEffect, useState } from 'react';

export default function Hours({ updateHours }) {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHours((prevHours) => {
        const newHours = (prevHours + 1) % 24;
        updateHours(newHours);
        return newHours;
      });
    }, 3600000);

    return () => clearInterval(interval);
  }, [updateHours]);

  return <div></div>;
}
