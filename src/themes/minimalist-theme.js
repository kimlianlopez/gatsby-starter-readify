import { light, dark } from './modes';
import spacing from './spacing';

const themeColors = {
  primary: '#4ab2b0',
  primaryDark: '#3c9190',
  primaryLight: '#56ccca',
  secondary: '#b24a4c',
  secondaryDark: '#873739',
  secondaryLight: '#d45759'
};

export default {
  light: {
    color: {
      ...light,
      ...themeColors,
      linkText: themeColors.secondary,
      linkHoverText: themeColors.secondaryDark,
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
      siteTitle: themeColors.primary
    },
    spacing: {
      ...spacing
    }
  }
};
