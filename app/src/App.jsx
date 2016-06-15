//convert App into a react component and render with <App state={state}/>

import React from 'react';
// import { Router, hashHistory, Redirect, Route } from 'react-router';

// import Layout   from './Layout/Layout';
// import Home     from './Home/Home';
// import About    from './About/About';
// import TodoApp  from './TodoApp/components/TodoApp';
import Counter from './Counter/components/Counter';

// import { createStore, combineReducers }  from 'redux';
// import { Provider }     from 'react-redux';

// import { counter }          from './src/Counter/Counter'

// let store = createStore(combineReducers({
//   counter: counter,
//   todos: todoReducer
// }));
//
// const CounterApp = () => {
// //   return (
//     <Counter
//       value={this.props.store.getState()}
//       onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT' })}
//       onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT' })}
//     /> );
// }

export default class App extends React.Component {
  render() {
    return(
      <Counter
        value={this.props.store.getState()}
        onIncrement={() => this.props.store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => this.props.store.dispatch({ type: 'DECREMENT' })}
      />
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object
}
