import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import CounterButtons from './CounterButtons';
import { findIndexFromId } from '../utils/counterUtils'

class CounterInspector extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const counterId = parseInt(this.props.params.counterId);
    const index = findIndexFromId(this.props.counters, counterId)

    const { label, step, value } = this.props.counters[index];
    const aLabel = this.refs.label.value || label;
    const aStep = this.refs.step.value || step;
    const aValue = this.refs.value.value || value;

    this.props.updateCounter(counterId, aLabel, aStep, aValue);
  }
  render() {
    const counterId = parseInt(this.props.params.counterId);
    const { counters } = this.props;
    const index = findIndexFromId(counters, counterId)
    const counter = counters[index];
    return (
      <figure className='grid-figure'>
        I'm a counter inspector for counterId: {counterId}
        <form
          ref='counterInspectorForm'
          className='counter-inspector-form'
          onSubmit={this.handleSubmit.bind(this)} >
          Label: <input type='text' ref='label' placeholder={counter.label} />
          Step: <input type='text' ref='step' placeholder={counter.step} />
          Value: <input type='text' ref='value' placeholder={counter.value} />
          <input type='submit' value='update' />
        </form>
      </figure>
    )
  }
}

CounterInspector.propTypes = {
  params: PropTypes.object.isRequired,
  counters: PropTypes.array.isRequired,
  updateCounter: PropTypes.func.isRequired
}

export default CounterInspector;
