import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/TodoApp/AddTodo'
import VisibleTodoList from '../../containers/TodoApp/VisibleTodoList'

const TodoApp = () => (
  <div className='todoApp'>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp
