import React, { PropTypes } from 'react'

class CounterButtons extends React.Component {
  render() {
    const { i, step } = this.props
    return (
      <div className='counter-buttons'>
        <button
          onClick={this.props.incrementCounter.bind(null, i, step)}
          className='likes'
        >+{step}</button>
        <button
          onClick={this.props.decrementCounter.bind(null, i, step)}
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
  i: PropTypes.number.isRequired
}

export default CounterButtons;
