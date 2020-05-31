import React from 'react';
import renderer from 'react-test-renderer';
import {View, TouchableWithoutFeedback} from 'react-native';
import type {Theme_T} from '../src/constants/defaultTheme';
import {makeUseStylesFactory} from '../src/utils/makeUseStylesFactory';

/**
 * Most complex scenario, user defines styles as a function of theme with
 * dynamic style properties
 */
test('makeUseStylesFactory creates makeUseStyles and useStyles with DynamicStyleDefinitionFunction', () => {
  const Context = React.createContext({theme: 'initial'} as Theme_T);
  const makeUseStyles = makeUseStylesFactory(Context);
  const useStyles = makeUseStyles((theme) => ({
    primary: {
      alignItems: ({alignStart}) =>
        alignStart ? 'flex-start' : theme.primary.alignItems,
      backgroundColor: 'blue',
    },
  }));

  const Comp = function (props) {
    const styles = useStyles(props);
    return (
      <TouchableWithoutFeedback>
        <View style={styles.primary}>{JSON.stringify(styles)}</View>
      </TouchableWithoutFeedback>
    );
  };

  const Component = renderer.create(
    <Context.Provider value={{primary: {alignItems: 'flex-end'}}}>
      <Comp alignStart={false} />
    </Context.Provider>,
  );
  const el = Component.root.findByType(View);
  expect(el.props.style).toStrictEqual({
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  });

  const Component2 = renderer.create(
    <Context.Provider value={{primary: {alignItems: 'flex-start'}}}>
      <Comp alignStart={true} />
    </Context.Provider>,
  );

  const el2 = Component2.root.findByType(View);
  expect(el2.props.style).toStrictEqual({
    alignItems: 'flex-start',
    backgroundColor: 'blue',
  });
});

/**
 * Second Most Complex scenario the use defines styles with dynamic properties
 */
test('makeUseStylesFactory creates makeUseStyles and useStyles with DynamicStyleDefinitionObject', () => {
  const Context = React.createContext({theme: 'initial'} as Theme_T);
  const makeUseStyles = makeUseStylesFactory(Context);
  const useStyles = makeUseStyles({
    primary: {
      alignItems: ({alignStart}) => (alignStart ? 'flex-start' : 'flex-end'),
      backgroundColor: 'blue',
    },
  });

  const Comp = function (props) {
    const styles = useStyles(props);
    return (
      <TouchableWithoutFeedback>
        <View style={styles.primary}>{JSON.stringify(styles)}</View>
      </TouchableWithoutFeedback>
    );
  };

  const Component = renderer.create(
    <Context.Provider value={{primary: {alignItems: 'flex-end'}}}>
      <Comp alignStart={false} />
    </Context.Provider>,
  );
  const el = Component.root.findByType(View);
  expect(el.props.style).toStrictEqual({
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  });

  const Component2 = renderer.create(
    <Context.Provider value={{primary: {alignItems: 'flex-start'}}}>
      <Comp alignStart={true} />
    </Context.Provider>,
  );

  const el2 = Component2.root.findByType(View);
  expect(el2.props.style).toStrictEqual({
    alignItems: 'flex-start',
    backgroundColor: 'blue',
  });
});

/**
 * Simple scenario, user defines styles as a function of theme
 */
test('makeUseStylesFactory creates makeUseStyles and useStyles with StyleDefinitionFunction', () => {
  const Context = React.createContext({theme: 'initial'} as Theme_T);
  const makeUseStyles = makeUseStylesFactory(Context);
  const useStyles = makeUseStyles((theme) => ({
    primary: {
      alignItems: theme.primary.alignItems,
      backgroundColor: 'blue',
    },
  }));

  const Comp = function (props) {
    const styles = useStyles(props);
    return (
      <TouchableWithoutFeedback>
        <View style={styles.primary}>{JSON.stringify(styles)}</View>
      </TouchableWithoutFeedback>
    );
  };

  const Component = renderer.create(
    <Context.Provider value={{primary: {alignItems: 'flex-end'}}}>
      <Comp alignStart={false} />
    </Context.Provider>,
  );
  const el = Component.root.findByType(View);
  expect(el.props.style).toStrictEqual({
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  });
});

/**
 * Simplest scenario, user defines styles as plain JSON object
 */
test('makeUseStylesFactory creates makeUseStyles and useStyles with StyleDefinitionObject', () => {
  const Context = React.createContext({theme: 'initial'} as Theme_T);
  const makeUseStyles = makeUseStylesFactory(Context);
  const useStyles = makeUseStyles({
    primary: {
      alignItems: 'flex-end',
      backgroundColor: 'blue',
    },
  });

  const Comp = function (props) {
    const styles = useStyles(props);
    return (
      <TouchableWithoutFeedback>
        <View style={styles.primary}>{JSON.stringify(styles)}</View>
      </TouchableWithoutFeedback>
    );
  };

  const Component = renderer.create(
    <Context.Provider value={null}>
      <Comp alignStart={false} />
    </Context.Provider>,
  );
  const el = Component.root.findByType(View);
  expect(el.props.style).toStrictEqual({
    alignItems: 'flex-end',
    backgroundColor: 'blue',
  });
});
