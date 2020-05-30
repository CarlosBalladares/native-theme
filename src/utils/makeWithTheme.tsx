import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';

type ForwardedRefType<T> =
  | ((instance: T | null) => void)
  | React.MutableRefObject<T | null>
  | null;
type ConsumerProps<T> = {
  theme: T;
  ref: ForwardedRefType<any>;
};
type WrappedComponent<T> = React.ComponentType<ConsumerProps<T>>;
type WithThemeHOC<T> = (
  Component: WrappedComponent<T>,
) => React.ComponentType<any>;

const makeWithTheme = <T extends {}>(
  Context: React.Context<T>,
): WithThemeHOC<T> => {
  return (Component: WrappedComponent<T>): React.ComponentType<any> => {
    const Temp: React.SFC<{
      fwdRef: ForwardedRefType<any>;
    }> = (props) => {
      const {fwdRef, ...rest} = props;
      return (
        <Context.Consumer>
          {(theme: T) => <Component ref={fwdRef} {...rest} theme={theme} />}
        </Context.Consumer>
      );
    };
    const FwdRef = React.forwardRef<any>((props, ref) => {
      return <Temp {...props} fwdRef={ref} />;
    });
    FwdRef.displayName = `withTheme(${Component.displayName})`;

    hoistNonReactStatics(FwdRef, Component);

    return FwdRef;
  };
};

export {makeWithTheme, WithThemeHOC};
