import hoistNonReactStatics from 'hoist-non-react-statics';
import {makeProvider} from './makeProvider';
import React from 'react';

import type {Theme} from '../types';

type ForwardedRefType<Theme> =
  | ((instance: Theme | null) => void)
  | React.MutableRefObject<Theme | null>
  | null;
type ConsumerProps<Theme> = {
  theme: Theme;
  ref: ForwardedRefType<any>;
};
type WrappedComponent<Theme> = React.ComponentType<ConsumerProps<Theme>>;
type WithThemeHOC<Theme> = (
  Component: WrappedComponent<Theme>,
  injectedTheme?: Theme,
) => React.ComponentType<any>;

const makeWithTheme = <Theme extends {}>(
  Context: React.Context<Theme>,
): WithThemeHOC<Theme> => {
  return (Component, injectedTheme): React.ComponentType<any> => {
    const Temp: React.SFC<{
      fwdRef: ForwardedRefType<any>;
    }> = (props: any) => {
      const {fwdRef, ...rest} = props;
      if (injectedTheme == null) {
        return (
          <Context.Consumer>
            {(theme: Theme) => (
              <Component ref={fwdRef} {...rest} theme={theme} />
            )}
          </Context.Consumer>
        );
      } else {
        const NextProvider = makeProvider(Context, injectedTheme);
        return (
          <NextProvider>
            <Context.Consumer>
              {(newInjectedTheme: Theme) => (
                <Component ref={fwdRef} {...rest} theme={newInjectedTheme} />
              )}
            </Context.Consumer>
          </NextProvider>
        );
      }
    };
    const FwdRef = React.forwardRef<any>((props: any, ref: any) => {
      return <Temp {...props} fwdRef={ref} />;
    });
    FwdRef.displayName = `withTheme(${Component.displayName})`;

    hoistNonReactStatics(FwdRef, Component);

    return FwdRef;
  };
};

export {makeWithTheme, WithThemeHOC};
