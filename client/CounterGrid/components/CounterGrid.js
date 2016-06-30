import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Counter from '../../Counter/components/Counter';

class CounterGrid extends React.Component {
  render() {
    const { counters } = this.props;
    // console.log(counters);
    return (
      <div>
        <h2 className='main-menu'>
          <Link to='/addCounter'>Add Counter</Link>
        </h2>
        <div className='counter-grid'>
          {Object.keys(counters).map((key) => {
            const counter = counters[key]
            //subCounters
            return <Counter
              {...this.props}
              counter={counter}
              key={key}
              counterId={parseInt(key)}
            />
          })}
        </div>
      </div>
    )
  }
};

CounterGrid.propTypes = {
  counters: PropTypes.object
}

export default CounterGrid;
