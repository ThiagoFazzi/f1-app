import React, { Component } from 'react'
import classes from './FavoritesRacers.module.css'
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

  removeFavoriteRacerItemHandler = (racer) => {
    let favoriteRacers = JSON.parse(localStorage.getItem('racers'))
    const newFavoritesRacers = favoriteRacers.filter(item => item.driverId !== racer.driverId)
    localStorage.setItem('racers', JSON.stringify(newFavoritesRacers))
    this.setState({favoritesRacers: newFavoritesRacers})
  }

  render(){
    let favoriteList = <p>Loading......</p>
    if(this.state.favoritesRacers){
      favoriteList = <FavoriteList racers={this.state.favoritesRacers} clickRemoveItem={this.removeFavoriteRacerItemHandler}/>
    }
    return(
      <div className={classes.FavoritesRacers}>
        <h1>Favorites Racers</h1>
        {favoriteList}
      </div>
    )
  }
}

export default FavoritesRacers