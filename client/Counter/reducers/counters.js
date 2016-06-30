const findIndexFromId = (state = [], id) => {
  for(let i=0; i < state.length; i++) {
    if(id === state[i].id) {
      return i;
    }
  }
}


const counters = (state = [], action) => {
  const { id, step, type } = action;
  const i = findIndexFromId(state, id);
  switch (type) {

    case 'INCREMENT_COUNTER':
      return [
        ...state.slice(0,i),
        {...state[i], value: state[i].value + step},
        ...state.slice(i+1)
      ];

    case 'DECREMENT_COUNTER':
      return [
        ...state.slice(0,i),
        {...state[i], value: state[i].value - step},
        ...state.slice(i+1)
      ];

    case 'ADD_COUNTER':
      return [
        ...state,
        {
          id: Date.now(),
          label: action.label,
          step: parseInt(action.step),
          value: 0,
          counters: []
        }
      ];

    case 'REMOVE_COUNTER':
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ]

    case 'EDIT_COUNTER_STEP':
      return state;

    default:
      return state;
  }
}

export default counters
