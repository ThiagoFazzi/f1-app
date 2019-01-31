import React from 'react'
import classes from './FavoriteItem.module.css'

const favoriteItem = (props) => (
  <li className={classes.FavoriteItem} onClick={() => props.removeItem(props.racer)}>
    <div className={classes.ImageFlag}>
      <img src={require(`../../../assets/images/flags/${props.racer.nationality}.png`)} alt={props.racer.nationality}/>
    </div>
    <div className={classes.Driver}>
      {props.racer.driver}
    </div>
  </li>
)

export default favoriteItem 