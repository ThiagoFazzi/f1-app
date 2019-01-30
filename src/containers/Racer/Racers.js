import React, { Component } from 'react'
import classes from './Racers.module.css'
import axios from 'axios'

class Racers extends Component {

  state ={
    season: null,
    racers: null
  }

  componentDidMount(){
    axios.get(`http://ergast.com/api/f1/${this.props.match.params.season}/driverStandings.json`)
      .then(response => {
        const data = response.data.MRData.StandingsTable.StandingsLists[0]
        const season = data.season
        //console.log(data.DriverStandings)

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
        console.log(this.state.season)
        console.log(this.state.racers)
      })
      .catch(error => console.log(error))
    
  }

  render(){
    let seasonTitle = <p>Loading Racers......</p>
    if(this.state.season){
      seasonTitle = <h1>Racers by Seasons {this.state.season}</h1>
    }
    return(
      <>
      {seasonTitle}
      </>
    )
  }
}

export default Racers