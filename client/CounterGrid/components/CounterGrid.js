import React from 'react';
import { Link } from 'react-router';

import CounterContainer from '../../CounterContainer/components/CounterContainer';

const CounterGrid = React.createClass({
  render() {
    const { counters } = this.props;
    return (
      <div className='counter-grid'>
        {counters.map((counter, i) =>
          <CounterContainer
            {...this.props}
            counter={counter}
            key={i}
            i={i}
          />)
        }
      </div>
    )
  }
});

export default CounterGrid;
