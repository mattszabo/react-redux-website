import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory, Redirect, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

<<<<<<< HEAD
import Layout from './Layout/Layout';
import TodoApp from './TodoApp/TodoApp';
=======
import todoReducer from '../reducers/Todo';
import Layout  from './Layout/Layout';
import TodoApp from './Todo/TodoApp';
import Home    from './Home/Home';

const store = createStore(
  combineReducers({
    ...todoReducer,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(hashHistory, store);
>>>>>>> master

const app = (
  <Provider store={store}>
    <Router history={history}>
      <Redirect from="/" to="/layout" />
      <Route path="/" component={Layout}>
        <Route path="home" component={Home} />
        <Route path="todo" component={TodoApp} />
      </Route>
    </Router>
  </Provider>
);

export default class App extends React.Component {
  render() {
    return(
      app
    );
  }
}
