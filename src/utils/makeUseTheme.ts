/**
 * @file Declares a hook to
 * @author Carlos Balladares
 */

import React from 'react';

type useThemeType<T> = () => T;

const makeUseTheme = <T extends {}>(
  Context: React.Context<T>,
): useThemeType<T> => {
  return () => {
    const theme = React.useContext(Context);
    return theme;
  };
};

export {makeUseTheme, useThemeType};
