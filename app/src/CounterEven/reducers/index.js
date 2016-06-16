const counterEven = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_BY_TWO':
      return state + action.step
    case 'DECREMENT_BY_TWO':
      return state - action.step
    default:
      return state
  }
}

export default counterEven
