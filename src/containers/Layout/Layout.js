import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toobar from '../../components/Toobar/Toobar'

class Layout extends Component {

  render(){
    return(
      <>
        <Toobar />
        <div>SideDrawer</div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout