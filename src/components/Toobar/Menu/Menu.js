import React from 'react'
import classes from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem'

const menu = (props) => (
  <ul className={classes.Menu}>
    <MenuItem link='/'>Seasons</MenuItem>
    <MenuItem link='/'>Favorite List</MenuItem>
  </ul>
)

export default menu