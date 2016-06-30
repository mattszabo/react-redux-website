function incrementCounter(id, step) {
  return {
    type: 'INCREMENT_COUNTER',
    id,
    step
  }
}

function decrementCounter(id, step) {
  return {
    type: 'DECREMENT_COUNTER',
    id,
    step
  }
}

function addCounter(id, label, step) {
  return {
    type: 'ADD_COUNTER',
    label,
    step,
    id
  }
}

function removeCounter(id) {
  return {
    type: 'REMOVE_COUNTER',
    id
  }
}

function updateCounter(id, label, step, value) {
  return {
    type: 'UPDATE_COUNTER',
    id,
    label,
    step,
    value
  }
}

export {
  incrementCounter,
  decrementCounter,
  addCounter,
  removeCounter,
  updateCounter
};
