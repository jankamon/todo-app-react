import React from 'react'
import './AddTodoForm.css'
import { useTheme } from '../../ThemeContext';

export default function AddTodoForm() {
  const themeStyle = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className={themeStyle} type="text" placeholder='Create a new todo...'></input>
    </form>
  )
}
