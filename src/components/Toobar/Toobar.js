import React from 'react'
import classes from './Toobar.module.css'
import Logo from '../Logo/Logo'
import Menu from './Menu/Menu'
import SideBarMenuToggle from './SideBarMenu/SideBarMenuToggle/SideBarMenuToggle'

const toobar = (props) => (
  <header className={classes.Toobar}>
    <SideBarMenuToggle clicked={props.sideBarMenuToggleClicked}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <Menu />
    </nav>
  </header>
)

export default toobar