import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Counter from '../../Counter/components/Counter';

class CounterGrid extends React.Component {
  render() {
    const { counters } = this.props;
    return (
      <div>
        <h2 className='main-menu'>
          <Link to='/addCounter'>Add Counter</Link>
        </h2>
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
