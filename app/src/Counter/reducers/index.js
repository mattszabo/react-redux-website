const counter = (state = {value: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, value: state.value + action.step}
    case 'DECREMENT':
      return {...state, value: state.value - action.step}
    default:
      return state
  }
}

export default counter
