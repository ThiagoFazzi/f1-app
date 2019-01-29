import React from 'react'
import classes from './SeasonItem.module.css'
import { Link } from 'react-router-dom'

const seasonItem = (props) => (
  <Link to={'/'} className={classes.SeasonItem}>
    <li>
      <div>image</div>
      <p>{props.season}</p>
    </li>
  </Link>
)

export default seasonItem