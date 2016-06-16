export const increment = (step) => {
  return {
    type: 'INCREMENT',
    step
  }
}

export const decrement = (step) => {
  return {
    type: 'DECREMENT',
    step
  }
}
