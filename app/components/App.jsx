import React from 'react';
import { Router, hashHistory, Redirect, Route } from 'react-router';

import Layout from './Layout/Layout';
import TodoApp from './TodoApp/TodoApp';
import Home from './Home/Home';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/todoapp" />
    <Route path="/" component={Layout}>
      <Route path="todoapp" component={Home} />
      <Route path="home" component={TodoApp} />
    </Route>
  </Router>
);

export default class App extends React.Component {
  render() {
    return(
      app
    );
  }
}
