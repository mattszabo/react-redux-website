import { findIndexFromId } from '../utils/counterUtils'

const counters = (state = [], action) => {
  const { id, step, type, label, value } = action;
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

    case 'UPDATE_COUNTER':
    console.log(action);
    return [
      ...state.slice(0,i),
      {...state[i], value: parseInt(value), label, step: parseInt(step)},
      ...state.slice(i+1)
    ];

    default:
      return state;
  }
}

export default counters
