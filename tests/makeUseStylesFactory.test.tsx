import React from 'react';
import renderer from 'react-test-renderer';
import {View} from 'react-native';

import {makeUseStylesFactory} from '../src/utils/makeUseStylesFactory';

const Context = React.createContext({theme: 'initial'});

test('Make Provider Creates a Valid React Context', () => {
  const expected = '123';

  const makeUseStyles = makeUseStylesFactory(Context);

  const useStyles = makeUseStyles({
    primary: {
      test: 's',
    },
  });

  const Component = renderer.create(
    <Context.Provider value={{theme: 'test'}}>
      <Context.Consumer>
        {() => {
          const sytles = useStyles();
          return <View>{JSON.stringify(sytles)}</View>;
        }}
      </Context.Consumer>
    </Context.Provider>,
  );
  const el = Component.root.findByType(View);

  console.log(el.props.children);
});
