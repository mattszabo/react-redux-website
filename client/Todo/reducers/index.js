import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todo = combineReducers({
  todos,
  visibilityFilter
})

export default todo
