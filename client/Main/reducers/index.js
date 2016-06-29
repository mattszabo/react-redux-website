import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counters from '../../Counter/reducers';

// everything we want in our state, including routing which gives us routing history
const rootReducer = combineReducers({
  counters,
  routing: routerReducer
})

export default rootReducer;
