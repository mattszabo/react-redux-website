import React from 'react'
import CounterEven from './CounterEven'

class CounterEvenApp extends React.Component {
  render() {
    const { store } = this.context;
    return (
      <CounterEven
        value={store.getState().counterEven}
        onIncrement={() => store.dispatch({ type: 'INCREMENT_BY_TWO' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT_BY_TWO' })}
      />
    );
  }
}
CounterEvenApp.contextTypes = {
  store: React.PropTypes.object
}

export default CounterEvenApp
