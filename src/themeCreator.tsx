import React from "react";
import { StyleSheet } from "react-native";
import hoistNonReactStatics from "hoist-non-react-statics";

const makeProvider = (initialTheme, Context) => {
  return (props) => {
    <Context.Provider theme={props.theme || initialTheme}>
      {props.children}
    </Context.Provider>;
  };
};

const makeUseTheme = (Context) => {
  return () => {
    const theme = React.useContext(Context);
    return theme;
  };
};

const makeWithTheme = (Context) => {
  return (Component) => {
    const Temp = ({ fwdref, ...rest }) => {
      <Context.Consumer>
        <Component {...rest} ref={fwdref} />
      </Context.Consumer>;
    };

    const FwdRef = React.forwardRef((props, ref) => {
      return <Temp {...props} fwdref={ref} />;
    });

    FwdRef.displayName = `withTheme(${Component.displayName})`;

    hoistNonReactStatics(FwdRef, Component);

    return FwdRef;
  };
};

const makeUseStylesCreator = (Context) => {
  const makeUseStyles = (stylesDefinitions) => {};
};

const themeCreator = (theme) => {
  const ThemeContext = React.createContext(theme);
  const ThemeProvider = makeProvider(theme, ThemeContext);
  const useTheme = makeUseTheme(ThemeContext);
  const withTheme = makeWithTheme(ThemeContext);

  return { ThemeContext, ThemeProvider, useTheme, withTheme };
};

export default themeCreator;
