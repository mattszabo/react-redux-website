const navbarList =
  [{
    id: 0,
    url: '/home',
    text: 'Home',
    active: 'true'
  },
  {
    id: 1,
    url: '/todo',
    text: 'Todo',
    active: 'false'
  },
  {
    id: 2,
    url: '/about',
    text: 'About',
    active: 'false'
  }]

const navbarSelection = (state = {navbarList: navbarList}, action) => {
  switch (action.type) {
    case 'SET_NAVBAR_LINK':
      return action.id
    default:
      return state
  }
}

export default navbarSelection
