import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import CounterButtons from './CounterButtons';

class CounterInspector extends React.Component {
  render() {
    const { counterId } = this.props.params;
    const { counters } = this.props;
    const counter = counters[counterId];
    return (
      <figure className='grid-figure'>
        I'm a counter inspector for counterId: {counterId}
        <h2>Name: {counter.label}</h2>
        <h2>Step: {counter.step}</h2>
        <h2>Value: {counter.value}</h2>
        <CounterButtons {...this.props} i={counterId} step={counter.step}/>
      </figure>
    )
  }
}

CounterInspector.propTypes = {
  params: PropTypes.object.isRequired,
  counters: PropTypes.object
}

export default CounterInspector;
