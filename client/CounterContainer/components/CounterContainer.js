import React from 'react';
import { Link } from 'react-router';

import Counter from '../../Counter/components/Counter'

const CounterContainer = React.createClass({
  render() {
    const { counter } = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-counter-wrap'>
          <Link to={`/counter/${counter.id}`}>
            <h2>{counter.label}</h2>
          </Link>
          <p>Value: {counter.value}</p>
        </div>
      </figure>
    )
  }
});

export default CounterContainer;
