import React from 'react';
import './TodosOptions.css';
import { useTheme } from '../../ThemeContext';

export default function TodosOptions() {
  const themeStyle = useTheme();

  return (
    <div id='todos-options' className={themeStyle}>
      <div id='items-left'>5 items left</div>
      <div id='filter-options'>
        <div className={themeStyle} id='all'>All</div>
        <div className={themeStyle} id='active'>Active</div>
        <div className={themeStyle} id='completed'>Completed</div>
      </div>
      <div className={themeStyle} id='clear-completed'>Clear Completed</div>
    </div>
  )
}
