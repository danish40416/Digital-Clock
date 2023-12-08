import React  from 'react';

export default function Hours({ time }) {

  const newHours = time.hours < 10 ? `0${time.hours}` : time.hours;

  return <div>{newHours}</div>;
}
