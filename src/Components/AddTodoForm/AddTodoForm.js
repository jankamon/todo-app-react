import React, { useRef } from 'react';
import './AddTodoForm.css';
import { useTheme } from '../../ThemeContext';

export default function AddTodoForm({ addTodo, todoNameRef }) {
  const themeStyle = useTheme();



  return (
    <form onSubmit={addTodo}>
      <label className={themeStyle} htmlFor="input">
        <span className="circle"></span>
      </label>
      <input 
        ref={todoNameRef}
        className={themeStyle} 
        type="text" 
        name="input" 
        placeholder='Create a new todo...'>
      </input>
    </form>
  )
}
