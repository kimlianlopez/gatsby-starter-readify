import { light, dark } from './modes';
import spacing from './spacing';

const themeColors = {
  primary: '#7978ae',
  primaryDark: '#5c5b85',
  primaryLight: '#9398cf',
  secondary: '#54966d',
  secondaryDark: '#3b6b4d',
  secondaryLight: '#83caa9',
  light: '#eef2c6',
  dark: '#2d2d40'
};

export default {
  light: {
    color: {
      ...light,
      ...themeColors,
      linkText: themeColors.secondary,
      linkHoverText: themeColors.secondaryDark,
      headerText: themeColors.secondary,
      background: themeColors.light,
      siteTitle: themeColors.primary
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
      headerText: themeColors.secondary,
      background: themeColors.dark,
      text: themeColors.light,
      siteTitle: themeColors.light
    },
    spacing: {
      ...spacing
    }
  }
};
