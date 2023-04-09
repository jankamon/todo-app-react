import React from 'react';
import './TodosOptions.css';
import { useTheme } from '../../ThemeContext';

export default function TodosOptions() {
  const themeStyle = useTheme();

  return (
    <div id='todos-options' className={themeStyle}>
      <div id='items-left'>5 items left</div>
      <div id='filter-options'>
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
      <div id='clear-completed'>Clear Completed</div>
    </div>
  )
}
