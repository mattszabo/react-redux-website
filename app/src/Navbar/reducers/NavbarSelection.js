const NavbarSelection = (state = 'SHOW_HOME', action) => {
  switch (action.type) {
    case 'SET_NAVBAR_LINK':
      return action.id
    default:
      return state
  }
}

export default NavbarSelection
