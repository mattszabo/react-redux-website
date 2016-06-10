import { connect } from 'react-redux'
import setNavbarLink from '../actions/NavbarActions'
import ActiveLink from '../../common/components/ActiveLink'

// this method allows us to use the connect function to subscribe to a
// part of the redux state tree and perform some optimisation for us
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.active === state.selectedNavbarItem
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setNavbarLink(ownProps.active))
    }
  }
}

const NavbarLinkState = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveLink)

export default NavbarLinkState
