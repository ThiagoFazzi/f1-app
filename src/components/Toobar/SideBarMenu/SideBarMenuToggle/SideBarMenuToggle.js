import React from 'react'
import classes from './SideBarMenuToggle.module.css'

const sideBarMenuToggle = (props) => (
  <div className={classes.SideBarMenuToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
</div>
)

export default sideBarMenuToggle