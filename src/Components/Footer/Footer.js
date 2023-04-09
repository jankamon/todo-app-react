import React from 'react';
import './Footer.css';
import { useTheme } from '../../ThemeContext';

export default function Footer() {
  const themeStyle = useTheme();

  return (
    <div id='footer' className={themeStyle}>Drag and drop to reorder list</div>
  )
}
