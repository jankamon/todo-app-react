import React from 'react';
import './TodosOptions.css';
import { useTheme } from '../../ThemeContext';

export default function TodosOptions({ todos, clearCompleted, showAll, showActive, showCompleted }) {
  const themeStyle = useTheme();

  return (
    <div id='todos-options' className={themeStyle}>
      <div id='items-left'>
        {todos.filter(todo => !todo.complete).length} items left
      </div>
      <div id='filter-options'>
        <div className={themeStyle} id='all' onClick={showAll}>All</div>
        <div className={themeStyle} id='active' onClick={showActive}>Active</div>
        <div className={themeStyle} id='completed' onClick={showCompleted}>Completed</div>
      </div>
      <div 
        className={themeStyle} 
        id='clear-completed'
        onClick={clearCompleted}
        >Clear Completed</div>
    </div>
  )
}
