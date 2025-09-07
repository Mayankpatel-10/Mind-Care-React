// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="themeToggle">
        <input 
          type="checkbox" 
          id="themeToggle" 
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <div className="slider"></div>
      </label>
      <span className="mode-label">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeToggle;