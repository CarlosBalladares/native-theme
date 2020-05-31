import {makeProvider} from '../src/utils/makeProvider';
import React from 'react';
import {View, Text} from 'react-native';
import renderer from 'react-test-renderer';

const Context = React.createContext({theme: 'initial'});

test('Make Provider Creates a Valid React Context', () => {
  const expected = '123';
  const Provider = makeProvider(Context, {theme: expected});
  const Component = renderer.create(
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
  var json: any = Component.toJSON();
  expect(json.type).toEqual('div');
  expect(json.children[0]).toEqual(expected);
});
