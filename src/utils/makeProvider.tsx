/**
 * @file Declares a provider component for the theming library.
 * @author Carlos Balladares
 */

import React from 'react';

// TYPES
interface ProviderProps<T> {
  children: React.ReactNode;
  theme?: T;
}
type ProviderType<T> = React.SFC<ProviderProps<T>>;

// COMPONENT
const makeProvider = <T extends {}>(
  initialTheme: T,
  Context: React.Context<T>,
): ProviderType<T> => {
  const Component: ProviderType<T> = (props: ProviderProps<T>) => (
    <Context.Provider value={props.theme || initialTheme}>
      {props.children}
    </Context.Provider>
  );
  Component.displayName = 'ThemeProvider';
  return Component;
};

export {makeProvider, ProviderProps, ProviderType};
