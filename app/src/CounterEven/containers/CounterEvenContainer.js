import { connect } from 'react-redux'
import CounterEven from '../components/CounterEven'
import { increment, decrement } from '../actions'

const mapStateToProps = (state) => {
  return {
    value: state.counterEven
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  }
}

// Connect the presentational component to the container that knows how
// to update
const CounterEvenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterEven)

export default CounterEvenContainer
