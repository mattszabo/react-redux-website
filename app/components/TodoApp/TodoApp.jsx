import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/TodoApp/AddTodo'
import VisibleTodoList from '../../containers/TodoApp/VisibleTodoList'

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
