import React from 'react'
import classes from './RacerItem.module.css'

const racerItem = (props) => (
  <li className={classes.RacerItem} onClick={() => props.clicked(props.racer)} onTouchStart={() => props.clicked(props.racer)}>
    <div className={classes.Position}>
      {props.racer.position}
    </div>
    <div className={classes.ImageFlag}>
      <img src={require(`../../../assets/images/flags/${props.racer.nationality}.png`)} alt={props.racer.nationality}/>
    </div>
    <div className={classes.Driver}>
      {props.racer.driver}
    </div>
    <div className={classes.ImageTeam}>
      <img src={require(`../../../assets/images/teams/${props.racer.teamId}.jpg`)} alt={props.racer.team}/>
    </div>
    <div className={classes.Team}>
      {props.racer.team}
    </div>
    <div className={classes.Point}>
      Points: {props.racer.totalPoints}
    </div>
  </li>
)

export default racerItem 