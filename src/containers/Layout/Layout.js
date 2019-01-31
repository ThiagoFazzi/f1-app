import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toobar from '../../components/Toobar/Toobar'
import SideBarMenu from '../../components/Toobar/SideBarMenu/SideBarMenu'

class Layout extends Component {

  state = {
    showSideBarMenu: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideBarMenu: false})
  }

  sideBarMenuToggleClickedHandler = () => {
    this.setState((prevState) => {
      return {showSideBarMenu: !prevState.showSideBarMenu}
    })
  }

  render(){
    return(
      <>
        <Toobar sideBarMenuToggleClicked={this.sideBarMenuToggleClickedHandler}/>
        <SideBarMenu open={this.state.showSideBarMenu} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layout