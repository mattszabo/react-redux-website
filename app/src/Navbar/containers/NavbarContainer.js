import { connect } from 'react-redux'
import NavbarLink from '../components/NavbarLink'

const mapStateToProps = (state, ownProps) => {
  console.log('stuff')
  console.log(state)
  return {
    active: ownProps.id === state.navbar
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onNavbarClick: () => dispatch({
      type: 'UPDATE_SELECTION',
      id: ownProps.id
    })
  }
}

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarLink)

export default NavbarContainer
