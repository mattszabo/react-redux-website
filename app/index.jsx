import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// import Counter from './src/Counter/components/Counter'
import counter from './src/Counter/reducers'
// import todoReducer from './src/TodoApp/reducers/todoReducer'
import App from './src/App'

const store = createStore(counter)

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
  )
}

render()
store.subscribe(render)
