import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import counter from './src/Counter/reducers'
import counterEven from './src/CounterEven/reducers'
import App from './src/App'

const store = createStore(combineReducers({counter, counterEven}))

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}

render()
store.subscribe(render)
