import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Watches.module.css';

export default function Watches() {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Select The Clock</h1>
    
        <div className={classes.watches}>
        <Link className={classes.link} to="digital-watch" >   DigitalWatch </Link>
        <Link className={classes.link} to="analog-watch" > AnalogWatch </Link>
        </div>
      </div>
    
  );
}
