import React, { Component } from 'react'
import classes from './Layout.module.css'

class Layout extends Component {

  render(){
    return(
      <>
        <div>Toolbar</div>
        <div>SideDrawer</div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout