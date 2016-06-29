import React from 'react';
import { Link } from 'react-router';

const Counter = React.createClass({
  render() {
    console.log('hola');
    console.log({this.props})
    return (
      <div className='single-counter'>
        I'm a Counter
        {this.props.counters.map((v,i) => {
          <p>{v}hi</p>
        })}
      </div>
    )
  }
});

export default Counter;
