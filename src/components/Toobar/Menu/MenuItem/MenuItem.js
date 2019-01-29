import React from 'react'
import classes from './MenuItem.module.css'
import { Link } from 'react-router-dom'

const menuItem = (props) => (
  <li className={classes.MenuItem}>
    <Link 
      to={{pathname: props.link}}
      className={props.active ? classes.active : null}>{props.children}</Link>
  </li>
)

export default menuItem