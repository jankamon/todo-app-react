import React from 'react';
import './Todo.css';
import { useTheme } from '../../ThemeContext';

export default function Todo({ todo, removeTodo }) {
    const themeStyle = useTheme();

    return (
        <li className={themeStyle}>
            <span className="circle todo-button" >
                <span className='inner-circle'></span>
            </span>
            <span className='todo-text'>{todo.name}</span>
            <span 
                onClick={() => removeTodo(todo.id)}
                className="remove-button">
            </span>
        </li>
    )
}
