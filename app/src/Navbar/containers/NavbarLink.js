import { connect } from 'react-redux'
import ActiveLink from '../../common/components/ActiveLink'
import { updateSelection } from '../actions/NavbarActions';

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.active === state.activeId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNavbarLinkClick: (id) => {
      dispatch(updateSelection(id))
    }
  }
}

const NavbarLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveLink)

export default NavbarLink
