import { light, dark } from './modes';
import spacing from './spacing';

const themeColors = {
  primary: '#0069FF',
  primaryDark: '#004cba',
  primaryLight: '#00ede8',
  secondary: '#8e90ff',
  secondaryDark: '#6d6ec9',
  secondaryLight: '#a3a5ff',
  dark: '#030021',
  light: '#E3F3FD'
};

export default {
  light: {
    color: {
      ...light,
      ...themeColors,
      linkText: themeColors.secondary,
      linkHoverText: themeColors.secondaryDark,
      headerText: themeColors.primary,
      siteTitle: themeColors.primary,
      background: themeColors.light
    },
    spacing: {
      ...spacing
    }
  },
  dark: {
    color: {
      ...dark,
      ...themeColors,
      linkText: themeColors.secondary,
      linkHoverText: themeColors.secondaryDark,
      headerText: themeColors.primary,
      background: themeColors.dark,
      siteTitle: themeColors.primary,
      buttonText: themeColors.light
    },
    spacing: {
      ...spacing
    }
  }
};
