import {themeCreator} from '../src/utils/themeCreator';
import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import renderer from 'react-test-renderer';

test('Make use theme generates a valid useTheme hook', () => {
  const {ThemeProvider, useTheme, withTheme, makeUseStyles} = themeCreator({});

  const useStyles = makeUseStyles((theme) => ({
    primary: {
      color: ({red}) => (red ? 'red' : 'yellow'),
      padding: theme.container.padding,
    },
  }));

  const UseStylesComp = function (props) {
    const styles = useStyles(props);
    return (
      <TouchableWithoutFeedback>
        <Text style={styles.primary}>{JSON.stringify(styles)}</Text>
      </TouchableWithoutFeedback>
    );
  };
  const Comp = function ({theme}) {
    return (
      <View>
        <Text style={{color: theme.typography.color}}>
          {JSON.stringify(theme)}
        </Text>
      </View>
    );
  };

  const EnhancedComp = withTheme(Comp);

  const UseThemeComponent = function () {
    const theme = useTheme();
    return (
      <View>
        <Text style={{color: theme.typography.color}}>
          {JSON.stringify(theme)}
        </Text>
      </View>
    );
  };

  const component = renderer.create(
    <ThemeProvider
      theme={{
        typography: {color: 'blue'},
        container: {backgroundColor: 'orange', padding: 20},
      }}>
      <ThemeProvider
        theme={{
          typography: {color: 'gray'},
          container: {backgroundColor: 'orange', padding: 20},
        }}>
        <EnhancedComp />
      </ThemeProvider>

      <UseStylesComp red={false} />
      <UseThemeComponent />
    </ThemeProvider>,
  );

  const el = component.root.findAllByType(Text);

  var res = el.map((els) => els.props.style.color);
  expect(res).toStrictEqual(['gray', 'yellow', 'blue']);
});
