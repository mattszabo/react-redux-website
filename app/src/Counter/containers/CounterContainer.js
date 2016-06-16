import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { increment, decrement } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

// Container component that will render the presentation component
const Value = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Value
