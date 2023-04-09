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
      {/* add span with circle */}
      <label className={themeStyle} htmlFor="input">
        <span className="circle"></span>
      </label>
      <input className={themeStyle} type="text" name="input" placeholder='Create a new todo...'></input>
    </form>
  )
}
