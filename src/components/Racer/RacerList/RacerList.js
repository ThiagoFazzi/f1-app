import React from 'react'
import classes from './RacerList.module.css'
import RacerItem from '../RacerItem/RacerItem'



const racerList = (props) => (
  <ul className={classes.RacerList}>
    {props.racers.map((racer, i) => (
      <RacerItem racer={racer} key={i} clicked={props.addFavorites}/>
    ))} 
  </ul>
)

export default racerList