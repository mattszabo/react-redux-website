import React from 'react';
import { Router, hashHistory, Redirect, Route } from 'react-router';

import Layout from './Layout/Layout';
import TodoApp from './TodoApp';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/todolist" />
    <Route path="/" component={Layout}>
      <Route path="todolist" component={TodoApp} />
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
