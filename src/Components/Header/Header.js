import React, { useEffect } from 'react'
import './Header.css';
import { useTheme, useThemeUpdate } from '../../ThemeContext';

export default function Header() {
  const toggleTheme = useThemeUpdate();
  const themeStyle = useTheme();
  
  useEffect(() => {
    if(themeStyle === 'light-theme') {
      document.body.style.backgroundColor = "hsl(236, 33%, 92%)";
      document.body.style.color = "hsl(235, 19%, 35%)";
      console.log('light theme')
    } else {
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
      document.body.style.color = "hsl(0, 0%, 98%)";
      console.log('dark theme')
    }

  }, [themeStyle]);

  return (
    <header>
      <h1 className={themeStyle}>TODO</h1>
      <span className={themeStyle} onClick={toggleTheme}></span>
    </header>
  )
}
