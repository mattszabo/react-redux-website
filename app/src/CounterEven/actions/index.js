export const increment = (step) => {
  return {
    type: 'INCREMENT_BY_TWO',
    step
  }
}

export const decrement = (step) => {
  return {
    type: 'DECREMENT_BY_TWO',
    step
  }
}
