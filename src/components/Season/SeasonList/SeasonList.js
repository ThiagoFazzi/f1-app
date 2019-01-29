import React from 'react'
import classes from './SeasonList.module.css'
import SeasonItem from '../SeasonItem/SeasonItem'

const seasonList = (props) => (
  <ul className={classes.SeasonList}>
    {props.seasons.map((season, i) => <SeasonItem key={i} season={season.season}/>)}
  </ul>
)

export default seasonList