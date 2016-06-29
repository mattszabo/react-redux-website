const counter = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        value: state.value + action.step
      };
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        value: state.value - action.step};
    case 'ADD_COUNTER':
      return state;
    case 'REMOVE_COUNTER':
      return state;
    case 'EDIT_COUNTER_STEP':
      return state;
    default:
      return state;
  }
}

function counters(state = [], action) {
  console.log(state, action);
  return state;
}

export default counters
