import React from 'react'
import classes from './AnalogWatch.module.css';

export default function AnalogWatch() {
  return (
   <div className={classes.analog}>
    <div className={classes.clock}>

      <div className={classes.num} id={classes.three}>3</div>
      <div className={classes.num} id={classes.six}>6</div>
      <div className={classes.num} id={classes.nine}>9</div>
      <div className={classes.num} id={classes.twelve}>12</div>
      <div className={classes.origin} >
        <div className={classes.hour}></div>

      </div>
    </div>
  </div>
  )
}
