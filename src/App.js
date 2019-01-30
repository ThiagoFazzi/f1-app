import React, { Component } from 'react';
import classes from  './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import Seasons from './containers/Season/Seasons'
import Racers from './containers/Racer/Racers'
import FavoritesRacers from './containers/FavoritesRacers/FavoritesRacers'


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={Seasons} />
            <Route path="/favorites" exact component={FavoritesRacers} />
            <Route path="/racers/:season" exact component={Racers} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
