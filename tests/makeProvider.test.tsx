import {makeProvider} from '../src/utils/makeProvider';
import React from 'react';
import {View, Text} from 'react-native';
import renderer from 'react-test-renderer';

const Context = React.createContext({theme: 'initial'});

test('Make Provider Creates a Valid React Context', () => {
  const expected = '123';
  const Provider = makeProvider(Context, {theme: expected});
  const component = renderer.create(
    <Provider>
      <Context.Consumer>
        {(props) => (
          <View>
            <Text>{props.theme}</Text>
          </View>
        )}
      </Context.Consumer>
    </Provider>,
  );
  const el = component.root.findByType(Text);
  expect(el.props.children).toBe(expected);
});
