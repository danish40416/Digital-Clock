import React  from 'react';

export default function Minutes({ time }) {
  const newMinutes = time.minutes < 10  ? `0${time.minutes}`: time.minutes

  return <div>{newMinutes}</div>;
}
