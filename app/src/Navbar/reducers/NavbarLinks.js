const navbarLink = (state, id) => {
  return Object.assign({}, state, {
    active: id === state.activeId
  })
}

export default navbarLink
