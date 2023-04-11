import React from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';

export default function TodosList({ todos, removeTodo }) {
  

  return (
    <ul>
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id} removeTodo={removeTodo}/>
      })}
    </ul>
  )
}
