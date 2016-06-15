import React from 'react'
import NavbarContainer from '../containers/NavbarContainer'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavbarContainer text='Counter' id='1'/>
        <NavbarContainer text='Counter2' id='2'/>
      </ul>
    </nav>
  )
}

export default Navbar
