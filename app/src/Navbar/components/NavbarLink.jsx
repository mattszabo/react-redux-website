import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavbarLink = ({ onClick, active, text, url }) => (
  <li
    onClick={onClick}
    style={{
      className: active ? 'active' : ''
    }}
  >
    <Link to={url}>{text}</Link>
  </li>
)

NavbarLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default NavbarLink
