import React, { Component } from 'react'
import classes from './Seasons.module.css'
import SeasonList from '../../components/Season/SeasonList/SeasonList'

class Seasons extends Component {

  render(){
    return(
      <div className={classes.Seasons}>
        <h1>Seasons</h1>
        <SeasonList />
      </div>
    )
  }
}

export default Seasons