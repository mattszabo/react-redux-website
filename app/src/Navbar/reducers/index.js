const navbar = (state = {selectedId: '1'} , action) => {
  switch (action.type) {
    case 'UPDATE_SELECTION':
      return {...state, selectedId: action.id}
    default:
      return state
  }
}

export default navbar
