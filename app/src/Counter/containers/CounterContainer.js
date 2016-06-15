import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' })
  }
}

// Container component that will render the presentation component
const Value = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Value
