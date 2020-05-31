import {makeUseStylesFactory} from '../src/utils/makeUseStylesFactory';
import React from 'react';
import renderer from 'react-test-renderer';

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
          return <div>{JSON.stringify(sytles)}</div>;
        }}
      </Context.Consumer>
    </Context.Provider>,
  );
  var json: any = Component.toJSON();
  expect(json.type).toEqual('div');
  expect(json.children[0]).toEqual(expected);
});
