import React, { PropTypes } from 'react'
import NavbarLink from './NavbarLink'

const NavbarLinks = ({ links }) => (
  <ul>
    {links.map(link =>
      <NavbarLink
        key={link.id}
        {...link}
      />
    )}
  </ul>
)

NavbarLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onNavbarLinkClick: PropTypes.func.isRequired
}

export default NavbarLinks
