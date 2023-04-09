import React from 'react';
import './Todos.css';
import { useTheme } from '../../ThemeContext';

export default function TodosList() {
  const themeStyle = useTheme();
  
  return (
    <ul>
      <li className={themeStyle}>
        <span className="circle todo-button" >
          <span className='inner-circle'>
          </span>
        </span>
        <span className='todo-text'>Todo item</span>
        <span className="remove-button"></span>
      </li>
    </ul>
  )
}
