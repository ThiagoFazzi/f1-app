import React from 'react'
import classes from './Logo.module.css'
import imgLogo from '../../assets/images/f1-logo.png'

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={imgLogo} alt="f1 logo"/>
  </div>
)

export default logo