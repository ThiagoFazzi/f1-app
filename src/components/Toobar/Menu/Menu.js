import React from 'react'
import classes from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem'

const menu = (props) => (
  <ul className={classes.Menu}>
    <MenuItem link={`${process.env.PUBLIC_URL}/`}>Seasons</MenuItem>
    <MenuItem link={`${process.env.PUBLIC_URL}/favorites`}>Favorite Racers</MenuItem>
  </ul>
)

export default menu