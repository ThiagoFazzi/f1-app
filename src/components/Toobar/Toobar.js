import React from 'react'
import classes from './Toobar.module.css'
import Logo from '../Logo/Logo'
import Menu from './Menu/Menu'

const toobar = (props) => (
  <header className={classes.Toobar}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <Menu />
    </nav>
  </header>
)

export default toobar