function incrementCounter(counterId, step) {
  type: 'INCREMENT_COUNTER',
  counterId,
  step
}

function decrementCounter(counterId, step) {
  type: 'DECREMENT_COUNTER',
  counterId,
  step
}

function addCounter(label, step) {
  type: 'ADD_COUNTER',
  label,
  step
}

function removeCounter(counterId) {
  type: 'REMOVE_COUNTER',
  counterId
}

function editCounterStep(counterId, step) {
  type: 'EDIT_COUNTER_STEP',
  counterId,
  step
}

export {
  incrementCounter,
  decrementCounter,
  addCounter,
  removeCounter,
  editCounterStep
};
