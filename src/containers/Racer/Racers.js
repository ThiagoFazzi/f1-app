import React, { Component } from 'react'
import classes from './Racers.module.css'
import axios from 'axios'
import RacerList from '../../components/Racer/RacerList/RacerList'

class Racers extends Component {

  state ={
    season: null,
    racers: null
  }

  componentDidMount(){
    axios.get(`https://ergast.com/api/f1/${this.props.match.params.season}/driverStandings.json`)
      .then(response => {
        const data = response.data.MRData.StandingsTable.StandingsLists[0]
        const season = data.season

        const racers = data.DriverStandings.map(racer => ({
          position: racer.position,
          driverId: racer.Driver.driverId,
          driver: `${racer.Driver.givenName} ${racer.Driver.familyName}`,
          nationality: racer.Driver.nationality,
          totalPoints: racer.points,
          permanentNumber: racer.Driver.permanentNumber,
          team: racer.Constructors[0].name,
          teamId: racer.Constructors[0].constructorId,
        }))

        this.setState({
          season: season,
          racers: racers
        })
      })
      .catch(error => console.log(error))
    
  }

  addRacerToFavoritesHandler = (racer) => {
    let favoriteRacers = []
    if(localStorage.length > 0){
      favoriteRacers = JSON.parse(localStorage.getItem('racers'))
    }
    if(!favoriteRacers.some(item => item.driverId === racer.driverId)){
      favoriteRacers.push(racer)
      localStorage.setItem('racers', JSON.stringify(favoriteRacers))
    }
  }

  render(){
    let seasonTitle = <p>Loading ......</p>
    let racers = <p>Loading Racers......</p>
    if(this.state.season){
      seasonTitle =  <h1>Racers by Seasons {this.state.season}</h1>     
    }
    if(this.state.racers){
      racers = <RacerList racers={this.state.racers} addFavorites={this.addRacerToFavoritesHandler}/>
    }
    return(
      <div className={classes.Racers}>
      {seasonTitle}
      {racers}
      </div>
    )
  }
}

export default Racers