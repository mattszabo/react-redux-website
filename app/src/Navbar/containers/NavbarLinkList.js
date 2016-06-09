import { connect } from 'react-redux';
import NavbarLinks from '../components/NavbarLinks';

const mapStateToProps = (state) => {
  return {
    links: state.links
  }
}

const NavbarLinkList = connect(
  mapStateToProps
)(NavbarLinks)

export default NavbarLinkList
