import React, { Component } from 'react'
//import classes from './FavoritesRacers.module.css'
import FavoriteList from '../../components/favoritesRacers/FavoriteList/FavoriteList'

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
    let favoriteList = <p>Loading......</p>
    if(this.state.favoritesRacers){
      favoriteList = <FavoriteList racers={this.state.favoritesRacers} />
    }
    return(
      <>
        <h1>Favorites Racers</h1>
        {favoriteList}
      </>
    )
  }
}

export default FavoritesRacers