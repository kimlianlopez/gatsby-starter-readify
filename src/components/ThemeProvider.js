import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import getTheme from '../utils/themes';

export default ({ theme, children }) => {
  const [currentTheme, setTheme] = useState(theme);

  return (
    <ThemeProvider theme={getTheme(currentTheme)}>{children}</ThemeProvider>
  );
};
