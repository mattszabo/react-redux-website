const navbar = (state = '1', action) => {
  switch (action.type) {
    case 'UPDATE_SELECTION':
      return action.id
    default:
      return state
  }
}

export default navbar
