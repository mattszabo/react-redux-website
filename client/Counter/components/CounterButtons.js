import React, { PropTypes } from 'react'

class CounterButtons extends React.Component {
  render() {
    const { counterId, step } = this.props
    return (
      <div>
        <button
          className='button counter-button button-blue'
          onClick={this.props.incrementCounter.bind(null, counterId, step)}
        ><span>+{step}</span></button>
        <button
          className='button counter-button button-red'
          onClick={this.props.decrementCounter.bind(null, counterId, step)}
        ><span>-{step}</span></button>
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
