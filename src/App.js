import React, { Component } from 'react';
import classes from  './App.module.css';
import Layout from './containers/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <h1>Formule 1 Project</h1>
        </Layout>
      </div>
    );
  }
}

export default App;
