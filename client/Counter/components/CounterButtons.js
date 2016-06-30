import React, { PropTypes } from 'react'

class CounterButtons extends React.Component {
  render() {
    const { counterId, step } = this.props
    return (
      <div className='counter-buttons'>
        <button
          onClick={this.props.incrementCounter.bind(null, counterId, step)}
          className='likes'
        >+{step}</button>
        <button
          onClick={this.props.decrementCounter.bind(null, counterId, step)}
          className='likes'
        >-{step}</button>
      </div>
    )
  }
}

CounterButtons.propTypes = {
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  counterId: PropTypes.number.isRequired
}

export default CounterButtons;
