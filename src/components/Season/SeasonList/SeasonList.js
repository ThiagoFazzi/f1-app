import React from 'react'
import classes from './SeasonList.module.css'
import SeasonItem from '../SeasonItem/SeasonItem'

const seasonList = (props) => (
  <ul className={classes.SeasonList}>
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
    <SeasonItem />
  </ul>
)

export default seasonList