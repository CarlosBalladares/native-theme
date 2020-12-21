[native-theme-test](README.md) › [Globals](globals.md)

# native-theme-test

<img src="https://raw.githubusercontent.com/CarlosBalladares/native-theme/master/assets/cb-native-theme2.png?token=ADRAE2G4MBHKDEGSP27B2ZC63UWOU">
<hr/>

<img src="https://github.com/carlosballadares/native-theme/workflows/CI/badge.svg"><img src="https://img.shields.io/npm/l/native-theme">

# native-theme

A small library that provides a set of utilities to create react native stylesheets intuitively, inspired by `react-jss` and `@material-ui/styles`.

## Rationale

`native-theme` makes writting `react-native` stylesheets intuitive by providing familiar `useStyles` syntax from `react-jss` and a set of theming primitives that can be applied to any `react-native` project.

## Usage

### Installation
```
$ npm i native-theme
```
```
$ yarn add native-theme
```

### useStyles

The `useStyles` hook allows you to create stylesheets and use them as hooks.
Styles can be declared as a function of theme and arguments.The stylesheets get memoized and get re-computed only after the theme or arguments passed to the hook change.

```javascript
import {makeUseStyles} from 'native-theme';

// Dynamic styles
const useStyles = makeUseStyles((theme) => ({
  primary: {
    color: ({red}) => (red ? 'red' : 'yellow'),
    padding: theme.container.padding /** Access theme variables*/,
  },
}));

const UseStylesComp = function (props) {
  const styles = useStyles(props);
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.primary}>Hello world</Text>
    </TouchableWithoutFeedback>
  );
};

export default UseStylesComp;
```

### ThemeProvider

Wrap your App in a ThemeProvider to access the theme anywhere in the component tree without needing to pass props, the theme can be accessed via `useStyles`, `useTheme` or `withTheme`

```javascript
import {ThemeProvider} from 'native-theme';

const App = () => {
  return (
    <ThemeProvider theme={{typography: {color: 'red'}}}>
      <SomeComponent />
    </ThemeProvider>
  );
};

export default App;
```

### useTheme

The `useTheme` hook allows you to access the theme object provided by the nearest `ThemeProvider` up the component tree. If the app has more tham one `ThemeProvider`, the closest gets used.

```javascript
import {useTheme} from 'native-theme';

const UseThemeComp = function (props) {
  const theme = useTheme(props);
  return (
    <TouchableWithoutFeedback>
      <Text style={{color: theme.typography.color}}>Hello world</Text>
    </TouchableWithoutFeedback>
  );
};

export default UseThemeComp;
```

### withTheme

The `withTheme` HOC allows you to enhance a component by giving it access to the theme value from the nearest `ThemeProvider` via props.

```javascript
import {withTheme} from 'native-theme';

const Comp = function ({theme}) {
  return (
    <TouchableWithoutFeedback>
      <Text style={{color: theme.typography.color}}>Hello world</Text>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(Comp);
```

## Code health

- coverage >90%
- unit tests for all core functions
- Written in typescript
- Continous integration
- Minimal dependencies
