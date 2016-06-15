import { connect } from 'react-redux'
import CounterEven from '../components/CounterEven'

const mapStateToProps = (state) => {
  return {
    value: state.counterEven
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT_BY_TWO' }),
    onDecrement: () => dispatch({ type: 'DECREMENT_BY_TWO' })
  }
}

// Connect the presentational component to the container that knows how
// to update
const CounterEvenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterEven)

export default CounterEvenContainer
