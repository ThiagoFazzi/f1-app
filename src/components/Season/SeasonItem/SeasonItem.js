import React from 'react'
import classes from './SeasonItem.module.css'
import { Link } from 'react-router-dom'

const seasonItem = (props) => (
  <Link to={`${process.env.PUBLIC_URL}/racers/${props.season}`} className={classes.SeasonItem}>
    <li >
      {props.season}
    </li>
  </Link>
)

export default seasonItem