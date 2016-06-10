import { connect } from 'react-redux'
import NavbarLinks from '../components/NavbarLinks'

// this method allows us to use the connect function to subscribe to a
// part of the redux state tree and perform some optimisation for us
const mapStateToProps = (state) => {
  return {
    navbarLinks: state.navbarLinks
  }
}

const NavbarState = connect(
  mapStateToProps
)(NavbarLinks)

export default NavbarState
