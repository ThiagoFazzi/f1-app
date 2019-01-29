import React from 'react'
import classes from './Toobar.module.css'

const toobar = (props) => (
  <header className={classes.Toobar}>
    <div className={classes.Logo}>
      Logo
    </div>
    <nav className={classes.DesktopOnly}>
      Menu itens
    </nav>
  </header>
)

export default toobar