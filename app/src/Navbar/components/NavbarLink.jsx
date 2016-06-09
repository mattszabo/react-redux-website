import React, { PropTypes } from 'react'

const NavbarLink = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    className={{
      textDecoration: active ? 'active' : ''
    }}
  >
    {text}
  </li>
)

NavbarLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default NavbarLink
