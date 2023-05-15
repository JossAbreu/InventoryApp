// ThemeContext.js
import React, { useState, createContext } from 'react';
import { styles } from './ScreenMode';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeText, setThemeText] = useState('Light Mode');

  const FuntionchangeTheme = () => {
    setIsDarkMode(!isDarkMode);
    setThemeText(isDarkMode ? 'Light Mode' : 'Dark Mode');
  };

  const theme = isDarkMode ? styles.dark : styles.light;

  return (
    <ThemeContext.Provider value={{ theme, FuntionchangeTheme, isDarkMode, themeText }}>
      {children}
    </ThemeContext.Provider>
  );
};
