import React        from 'react';
import { render }   from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';
import App from './Main/components/App';
import CounterGrid from './CounterGrid/components/CounterGrid';
import CounterInspector from './Counter/components/CounterInspector';
import AddCounter from './Counter/components/AddCounter';

import css from './styles/main.sass'

// set main as root and pass either CounterGrid or Counter to it as props
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={CounterGrid}></IndexRoute>
        <Route path='/counter/:counterId' component={CounterInspector} />
        <Route path='/addCounter' component={AddCounter} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
