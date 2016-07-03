import React, { PropTypes } from 'react';
import * as timelinelite from 'gsap'
class AddCounter extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const counterId = Date.now();
    const label = this.refs.label.value || 'Label-' + ('0' + parseInt(this.props.counters.length+1)).slice(-2);
    const step = this.refs.step.value || 1;
    console.log(this.props.addCounter)
    this.props.addCounter(counterId, label, step);
    this.refs.addCounterForm.reset();
  }
  render() {
    return (
      <div>
        <form
          ref='addCounterForm'
          className='counter-form'
          onSubmit={this.handleSubmit.bind(this)}>
            <p>Add a counter:</p>
            <input type='text' ref='label' placeholder='label' />
            <input type='text' ref='step' placeholder='step' />
            <input type='submit' value='Add Counter' className='button'/>
        </form>
      </div>
    );
  }
}

AddCounter.propTypes = {
  addCounter: PropTypes.func.isRequired,
  counters: PropTypes.array.isRequired
}

export default AddCounter;
