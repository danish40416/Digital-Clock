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
      <div className={classes.origin} >.</div>

      <div className={classes.hoursWrapper}>
        <div className={classes.hoursHand}>
          <div className={classes.hand}></div>
        </div>
      </div>

      <div class={classes.minutesWrapper}>
        <div class={classes.minutesHand}>
          <div class={classes.hand}></div>
        </div>
      </div>

      <div class={classes.secondsWrapper}>
        <div class={classes.secondsHand}>
          <div class={classes.hand}></div>
        </div>
      </div>
    </div>
  </div>
  )
}
