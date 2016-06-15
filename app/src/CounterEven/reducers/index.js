export default function counterEven(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_BY_TWO':
      return state + 2
    case 'DECREMENT_BY_TWO':
      return state - 2
    default:
      return state
  }
}
