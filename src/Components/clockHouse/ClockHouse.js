// ClockHouse.js
import React from 'react';
import classes from './ClockHouse.module.css';
import { Link } from 'react-router-dom';

export default function ClockHouse() {
 


  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to Clock House </h1>
      <Link className={classes.house} to='/see-watches'>Cick here to see Clocks</Link>
    </div>
  );
}
