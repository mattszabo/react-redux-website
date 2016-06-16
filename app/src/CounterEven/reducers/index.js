const counterEven = (state = {value: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT_BY_TWO':
      return {...state, value: state.value + action.step}
    case 'DECREMENT_BY_TWO':
      return {...state, value: state.value - action.step}
    default:
      return state
  }
}

export default counterEven
