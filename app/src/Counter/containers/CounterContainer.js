import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../actions'

const mapStateToProps = (state) => ({
  value: state.counter.value
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment(1)),
  onDecrement: () => dispatch(decrement(1))
})

// Container component that will render the presentation component (Counter),
// passing props from the map methods
const Value = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Value
