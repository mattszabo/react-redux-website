import React, { Component, PropTypes } from 'react'

class CounterEven extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Value: {value}
        {' '}
        <button onClick={onIncrement}>
          +2
        </button>
        {' '}
        <button onClick={onDecrement}>
          -2
        </button>
      </p>
    )
  }
}

CounterEven.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default CounterEven
