import { connect } from 'react-redux'
import { setNavbarFilter } from '../actions/TodoActions'
import Navbar from '../components/Navbar'

const getVisiblenavLinks = (navLinks) => {
  return navLinks;
}

const mapStateToProps = (state) => {
  return {
    navLinks: getVisiblenavLinks(state.navLinks, state.navbarFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(setNavbarFilter(id))
    }
  }
}

const NavbarLinks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)

export default NavbarLinks
