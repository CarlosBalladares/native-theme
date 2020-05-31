import {makeUseTheme} from '../src/utils/makeUseTheme';
import React from 'react';
import {View, Text} from 'react-native';
import renderer from 'react-test-renderer';

const Context = React.createContext({typography: {color: 'red'}});

test('Make use theme generates a valid useTheme hook', () => {
  const useTheme = makeUseTheme(Context);

  const Comp = function () {
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
    <Context.Provider value={{typography: {color: 'blue'}}}>
      <Comp />
    </Context.Provider>,
  );

  const component2 = renderer.create(<Comp />);
  const el = component.root.findByType(Text);
  expect(el.props.style).toStrictEqual({color: 'blue'});

  const el2 = component2.root.findByType(Text);
  expect(el2.props.style).toStrictEqual({color: 'red'});
});
