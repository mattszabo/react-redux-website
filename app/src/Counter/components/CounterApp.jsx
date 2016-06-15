import React from 'react'
import Counter from './Counter'

class CounterApp extends React.Component {
  render() {
    const { store } = this.context;
    return (
      <Counter
        value={store.getState().counter}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    )
  }

}
CounterApp.contextTypes = {
  store: React.PropTypes.object
}

export default CounterApp
