import hoistNonReactStatics from 'hoist-non-react-statics';
import {makeProvider} from './makeProvider';
import React from 'react';
import {deepMerge} from './deepMerge';
import {isCyclic} from './isCyclic';

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
    const Temp: React.FunctionComponent<{
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
        if (isCyclic(injectedTheme)) {
          throw new Error(
            'NATIVE THEME - Theme Overrides cannot be cyclic objects.',
          );
        }

        const NextProvider = makeProvider(Context, injectedTheme);
        return (
          <Context.Consumer>
            {(theme: Theme) => (
              <NextProvider>
                <Context.Consumer>
                  {(newInjectedTheme: Theme) => (
                    <Component
                      ref={fwdRef}
                      {...rest}
                      theme={deepMerge(theme, newInjectedTheme)}
                    />
                  )}
                </Context.Consumer>
              </NextProvider>
            )}
          </Context.Consumer>
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
