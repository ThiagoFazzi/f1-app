import React, { Component } from 'react'
import classes from './FavoritesRacers.module.css'

class FavoritesRacers extends Component {

  state = {
    favoritesRacers: null
  }

  componentDidMount(){
    if(localStorage.length > 0){
      this.setState({
        favoritesRacers: JSON.parse(localStorage.getItem('racers'))
      })
    }
  }

  render(){
    //let favoriteList = <p>Loading......</p>
    //if(this.state.favoritesRacers){
    //  favoriteList = <>
    //}
    return(
      <>
        <h1>Favorites Racers</h1>
        <ul>
          {this.state.favoritesRacers ? console.log(this.state.favoritesRacers) : null}
        </ul>
      </>
    )
  }
}

export default FavoritesRacers