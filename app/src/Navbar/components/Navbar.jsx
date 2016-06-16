import React from 'react'
import NavbarContainer from '../containers/NavbarContainer'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavbarContainer id='1'>Counter</NavbarContainer>
        <NavbarContainer id='2'>CounterEven</NavbarContainer>
      </ul>
    </nav>
  )
}

export default Navbar
