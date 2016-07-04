import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import CounterButtons from './CounterButtons';

class Counter extends React.Component {
  handleClick() {
    const { counterId } = this.props;
    this.props.removeCounter(counterId);
  }
  render() {
    const { counterId, counter } = this.props;
    return (
      <figure className='grid-figure'>
        <div className='counter-header'>
          <div className='remove-counter'>
            <a onClick={this.handleClick.bind(this)}>&times;</a>
          </div>
        </div>
        <div className='grid-counter'>
          <Link to={`/counter/${counterId}`}>
            <h2>{counter.label}</h2>
          </Link>
          <p className='likes-heart'>{counter.value}</p>
        </div>
        <figcaption>
          <CounterButtons {...this.props} counterId={counterId} step={counter.step}/>
        </figcaption>
      </figure>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  counterId: PropTypes.number.isRequired,
  removeCounter: PropTypes.func.isRequired
}

export default Counter;
