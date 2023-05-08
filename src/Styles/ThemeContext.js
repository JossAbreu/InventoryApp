import React,{useState} from 'react';
import { styles } from './ScreenMode';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);



  const FuntionchangeTheme = React.useCallback(() => {
    setIsDarkMode(!isDarkMode);
   
  }, [isDarkMode]);

  const theme = isDarkMode ? styles.dark :  styles.light;

  return (
    <ThemeContext.Provider value={{ theme, FuntionchangeTheme,isDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};
