import React, { Component } from 'react';
import classes from  './App.module.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import Seasons from './containers/Season/Seasons'


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={Seasons} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
