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

function addCounter(label, step) {
  return {
    type: 'ADD_COUNTER',
    label,
    step
  }
}

function removeCounter(id) {
  return {
    type: 'REMOVE_COUNTER',
    id
  }
}

function editCounterStep(id, step) {
  return {
    type: 'EDIT_COUNTER_STEP',
    id,
    step
  }
}

export {
  incrementCounter,
  decrementCounter,
  addCounter,
  removeCounter,
  editCounterStep
};
