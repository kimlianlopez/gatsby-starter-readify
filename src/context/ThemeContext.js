import React, { useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import getTheme from '../utils/themes';

const defaultTheme = {
  name: 'green',
  darkMode: false
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme.name);
  const [darkMode, setDarkMode] = useState(defaultTheme.darkMode);

  const currentTheme = {
    setTheme,
    darkMode,
    setDarkMode,
    themeName: theme,
    ...getTheme(theme)[!!darkMode ? 'dark' : 'light']
  };

  return (
    <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
  );
};

export { ThemeProvider };
