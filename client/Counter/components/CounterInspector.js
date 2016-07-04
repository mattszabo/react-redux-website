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
      <figure className='counter-form inpsect-counter-form'>
      <h2>Inspecting counterId: <strong>{counterId}</strong></h2>
        <form
          ref='counterInspectorForm'
          className='counter-inspector-form'
          onSubmit={this.handleSubmit.bind(this)} >
          <label>Label: </label><input type='text' ref='label' defaultValue={counter.label} />
          <label>Step: </label><input type='text' ref='step' defaultValue={counter.step} />
          <label>Value: </label><input type='text' ref='value' defaultValue={counter.value} />
          <input className='button block' type='submit' value='update' />
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
