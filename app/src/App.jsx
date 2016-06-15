import React from 'react';
import Counter from './Counter/components/Counter';
import CounterEven from './CounterEven/components/CounterEven'

export default class App extends React.Component {
  render() {
    const { store } = this.context;
    console.log(store)
    return(
      <div>
        <Counter
          value={this.props.store.getState().counter}
          onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT' })}
        />
      <CounterEven
          value={this.props.store.getState().counterEven}
          onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT_BY_TWO' })}
          onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT_BY_TWO' })}
        />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object
}
