import { camelCase } from 'lodash';

import minimalist from './minimalist-theme';
import starlitMeadow from './starlitMeadow-theme';
import deepBlue from './deepBlue-theme';

export const themes = {
  minimalist,
  starlitMeadow,
  deepBlue
};

const getTheme = theme => {
  return themes[camelCase(theme)];
};

export default getTheme;
