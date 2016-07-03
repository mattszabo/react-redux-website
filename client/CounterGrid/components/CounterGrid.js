import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Counter from '../../Counter/components/Counter';
import AddCounter from '../../Counter/components/AddCounter'

class CounterGrid extends React.Component {
  render() {
    const { counters } = this.props;
    return (
      <div>
        <AddCounter {...this.props} />
        <div className='counter-grid'>
          {counters.map((counter) => {
            return <Counter
              {...this.props}
              counter={counter}
              key={counter.id}
              counterId={counter.id}
            />
          })}
        </div>
      </div>
    )
  }
};

CounterGrid.propTypes = {
  counters: PropTypes.array
}

export default CounterGrid;
