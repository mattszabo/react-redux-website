import React, {PropTypes} from 'react'

class NavbarLink extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    const { active, onNavbarClick } = this.props
    let style = active ? 'active' : ''
    return (
      <li className={style}>
        <a href='#' onClick={onNavbarClick}>{this.props.text}</a>
      </li>
    )
  }
}
NavbarLink.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onNavbarClick: PropTypes.func.isRequired
}

export default NavbarLink
