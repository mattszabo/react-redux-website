import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import counter from './src/Counter/reducers'
import counterEven from './src/CounterEven/reducers'
import navbar from './src/Navbar/reducers'
import App from './src/App'

import './styles/main.sass'

const store = createStore(combineReducers({
  counter,
  counterEven,
  navbar
}))

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
