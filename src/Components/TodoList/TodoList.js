import React, { useState } from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';
import { useTheme } from '../../ThemeContext';

export default function TodosList({ todos }) {
  

  return (
    <ul>
      {todos.map(todo => {
        return <Todo todoName={todo.name} key={todo.id}/>
      })}
    </ul>
  )
}
