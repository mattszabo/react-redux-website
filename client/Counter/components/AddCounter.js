import React, { PropTypes } from 'react';

class AddCounter extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs);
    const label = this.refs.label.value;
    const step = this.refs.step.value;
    const counterId = Date.now();
    this.props.addCounter(counterId, label, step);
    this.refs.addCounterForm.reset();
  }
  render() {
    return (
      <div>
        I can add counters:
        <form
          ref='addCounterForm'
          className='add-counter-form'
          onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='label' placeholder='label' />
          <input type='text' ref='step' placeholder='step' />
          <input type='submit' value='Add Counter' />
        </form>
      </div>
    );
  }
}

AddCounter.propTypes = {
  addCounter: PropTypes.func
}

export default AddCounter;
