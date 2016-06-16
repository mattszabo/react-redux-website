import { connect } from 'react-redux'
import NavbarLink from '../components/NavbarLink'
import updateSelection from '../actions/'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.id === state.navbar
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNavbarClick: () => dispatch(updateSelection(ownProps.id))
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarLink)

export default NavbarContainer
