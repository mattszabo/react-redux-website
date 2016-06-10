import React from 'react'
import NavbarLink from '../containers/NavbarLink'

const Navbar = () => (
  <div className='navbar'>
    <ul>
      <NavbarLink link="SHOW_HOME">
        Home
      </NavbarLink>
      <NavbarLink link="SHOW_TODO">
        Todo
      </NavbarLink>
      <NavbarLink link="SHOW_ABOUT">
        About
      </NavbarLink>
    </ul>
  </div>
)

export default Navbar
