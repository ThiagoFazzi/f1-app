import React from'react'
import classes from './SideBarMenu.module.css'
import Menu from '../Menu/Menu'
//import Backdrop from '../../UI/Backdrop/Backdrop'
 
const sideBarMenu = (props) => {
  let attachedClasses = [classes.SideBarMenu, classes.Close]
  if(props.open){
    attachedClasses = [classes.SideBarMenu, classes.Open]
  }
  return(
    <>
      {/*<Backdrop show={props.open} clicked={props.closed}/>*/}
      <div className={attachedClasses.join(' ')}>
        <nav>
          <Menu />
        </nav>
      </div>
    </>
  )
}

export default sideBarMenu