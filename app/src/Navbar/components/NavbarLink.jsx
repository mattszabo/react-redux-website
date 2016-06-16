import React, {PropTypes} from 'react'

class NavbarLink extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { active, onNavbarClick, children } = this.props
    let style = active ? 'active' : ''
    return (
      <li className={style}>
        <a href='#' onClick={onNavbarClick}>{children}</a>
      </li>
    )
  }
}
NavbarLink.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onNavbarClick: PropTypes.func.isRequired
}

export default NavbarLink
