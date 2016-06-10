import { connect } from 'react-redux'
import { setNavbarLink } from '../actions/NavbarActions'
import ActiveLink from '../../common/components/ActiveLink'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.navbarFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setNavbarLink(ownProps.link))
    }
  }
}

const NavbarLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveLink)

export default NavbarLink
