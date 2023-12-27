
import React  from 'react';

export default function Hours({ time }) {
    const newHours = time.Hours < 10  ? `0${time.Hours}`: time.Hours

    return <div>{newHours}</div>;
}

