// only updates the counter object that was clicked
const counter = (state = [], action) => {
  const { id, step, type } = action;

  switch (type) {
    case 'INCREMENT_COUNTER':
      return {...state, value: state.value + step};

    case 'DECREMENT_COUNTER':
        return {...state, value: state.value - step};

    case 'ADD_COUNTER':
    console.log('state');
    constole.log(state);
      return {
        label: action.label,
        step: action.step,
        value: 0,
        counters: {}
      };

    case 'REMOVE_COUNTER':
      return state;

    case 'EDIT_COUNTER_STEP':
      return state;

    default:
      return state;
  }
}

function counters(state = [], action) {
  if(typeof action.id !== 'undefined') {
    const { id } = action;
    return {
      ...state,
      [id]: counter(state[id], action)
    }
  }
  return state;
}

export default counters
