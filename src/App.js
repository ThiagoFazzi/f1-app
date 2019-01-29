import React, { Component } from 'react';
import classes from  './App.module.css';
import { BrowserRouter } from 'react-router-dom'
import Layout from './containers/Layout/Layout'


class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout>
            <h1>Formule 1 Project</h1>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
