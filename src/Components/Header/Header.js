import React from 'react'
import './Header.css';
import { useTheme, useThemeUpdate } from '../../ThemeContext';

export default function Header() {
  const toggleTheme = useThemeUpdate();
  const themeStyle = useTheme();

  return (
    <header>
      <h1 className={themeStyle}>TODO</h1>
      <span className={themeStyle} onClick={toggleTheme}></span>
    </header>
  )
}
