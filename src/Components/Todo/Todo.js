import React from 'react';
import './Todo.css';
import { useTheme } from '../../ThemeContext';

export default function Todo({ todoName }) {
    const themeStyle = useTheme();

    return (
        <li className={themeStyle}>
            <span className="circle todo-button" >
                <span className='inner-circle'></span>
            </span>
            <span className='todo-text'>{todoName}</span>
            <span className="remove-button"></span>
        </li>
    )
}
