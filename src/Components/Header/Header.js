import React, { useEffect } from 'react'
import './Header.css';
import { useTheme, useThemeUpdate } from '../../ThemeContext';

export default function Header() {
  const toggleTheme = useThemeUpdate();
  const themeStyle = useTheme();

  // Toggle body class
  useEffect(() => {
    if(themeStyle === 'light-theme') {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }

  }, [themeStyle]);

  return (
    <header>
      <h1 className={themeStyle}>TODO</h1>
      <span className={themeStyle} onClick={toggleTheme}></span>
    </header>
  )
}
