import React, { Component } from 'react'
import classes from './Seasons.module.css'
import SeasonList from '../../components/Season/SeasonList/SeasonList'
import axios from 'axios'

class Seasons extends Component {

  state = {
    seasons: null
  }

  componentDidMount(){
    axios.get('https://ergast.com/api/f1/seasons.json?limit=70')
      .then(response => {
        const seasons = response.data.MRData.SeasonTable.Seasons.filter(seasons => seasons.season >=2009 && seasons.season <=2018)
        this.setState({seasons: seasons})
      })
      .catch(error => console.log(error))
  }

  render(){
    let seasonsList = <p>Loading...</p>
    if(this.state.seasons){
      seasonsList = <SeasonList seasons={this.state.seasons}/>
    }
    return(
      <div className={classes.Seasons}>
        <h1>Seasons</h1>
        {seasonsList}
      </div>
    )
  }
}

export default Seasons