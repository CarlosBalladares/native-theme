import {makeWithTheme} from '../src/utils/makeWithTheme';
import React from 'react';
import {View, Text} from 'react-native';
import renderer from 'react-test-renderer';

const Context = React.createContext({typography: {color: 'red'}});

test('Make use theme generates a valid useTheme hook', () => {
  const withTheme = makeWithTheme(Context);

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
  const component = renderer.create(
    <Context.Provider value={{typography: {color: 'blue'}}}>
      <EnhancedComp />
    </Context.Provider>,
  );

  const component2 = renderer.create(<EnhancedComp />);
  const el = component.root.findByType(Text);
  expect(el.props.style).toStrictEqual({color: 'blue'});

  const el2 = component2.root.findByType(Text);
  expect(el2.props.style).toStrictEqual({color: 'red'});
});
