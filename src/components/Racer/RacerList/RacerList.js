import React from 'react'
import classes from './RacerList.module.css'

const racerList = (props) => (
  <ul>
    {props.racers.map((racer, i) => <li key={i}>{racer.driver}</li> )}
  </ul>
)

export default racerList