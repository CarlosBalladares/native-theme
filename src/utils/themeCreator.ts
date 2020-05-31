import React from 'react';
import {makeProvider} from './makeProvider';
import {makeUseTheme} from './makeUseTheme';
import {makeWithTheme} from './makeWithTheme';
import {makeUseStylesFactory} from './makeUseStylesFactory';

const themeCreator = (theme: any): any => {
  const ThemeContext = React.createContext(theme);
  const ThemeProvider = makeProvider(ThemeContext, theme);
  const useTheme = makeUseTheme(ThemeContext);
  const withTheme = makeWithTheme(ThemeContext);
  const makeUseStyles = makeUseStylesFactory(ThemeContext);
  return {ThemeContext, ThemeProvider, useTheme, withTheme, makeUseStyles};
};

export {themeCreator};
