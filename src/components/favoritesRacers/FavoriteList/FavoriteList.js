import React from 'react'
import classes from './FavoriteList.module.css'
import FavoriteItem from '../FavoriteItem/FavoriteItem'

const favoriteList = (props) => (
  <ul className={classes.FavoriteList}>
    {props.racers.map((racer, i) => (
      <FavoriteItem racer={racer} key={i} removeItem={props.clickRemoveItem}/>
    ))} 
  </ul>
)

export default favoriteList