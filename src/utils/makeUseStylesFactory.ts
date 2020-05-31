import React from 'react';
import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type Modify<T, R> = Omit<T, keyof R> & R;

type DynamicViewStyle = Modify<
  ViewStyle,
  {
    [key in keyof ViewStyle]: unknown;
  }
>;

type DynamicTextStyle = Modify<
  ViewStyle,
  {
    [key in keyof TextStyle]: DynamicStyleProperty;
  }
>;

type DynamicImageStyle = Modify<
  ViewStyle,
  {
    [key in keyof ImageStyle]: DynamicStyleProperty;
  }
>;

type DynamicStyleProperty = (args: any) => unknown;

type StyleDefinitionFunction = (theme: any) => StyleDefinitionObject;

type StyleDefinitionObject = {
  [key: string]: ViewStyle | TextStyle | ImageStyle;
};

type StylesDefinitionType = StyleDefinitionObject | StyleDefinitionFunction;

type DynamicStyleDefinitionObject = {
  [key: string]: DynamicViewStyle | DynamicTextStyle | DynamicImageStyle;
};
type DynamicStyleDefinitionFunction = (
  theme: any,
) => DynamicStyleDefinitionObject;

type DynamicStylesDefinitionType =
  | DynamicStyleDefinitionObject
  | DynamicStyleDefinitionFunction;

type StylesDefinitionArgs = StylesDefinitionType | DynamicStylesDefinitionType;

type UseStylesType = (args?: any) => StyleDefinitionObject;

type MakeUseStylesType = (definition: StylesDefinitionArgs) => UseStylesType;

const computeDynamicStylesFromFunction = (
  definitions:
    | StyleDefinitionFunction
    | DynamicStyleDefinitionFunction
    | Function,
  args: any,
  theme: any,
): StyleDefinitionObject => {
  const computedFromTheme:
    | StylesDefinitionType
    | DynamicStylesDefinitionType = definitions(theme);
  return computeDynamicStylesFromObject(computedFromTheme, args);
};

const computeDynamicStylesFromObject = (
  definitions: StylesDefinitionType | DynamicStylesDefinitionType,
  args: any,
): StyleDefinitionObject => {
  return Object.fromEntries(
    Object.entries(definitions).map(([name, style]: any) => {
      return [
        name,
        Object.fromEntries(
          Object.entries(style).map((rule: any) => {
            if (typeof rule[1] === 'function') {
              return [rule[0], rule[1](args)];
            } else {
              return rule;
            }
          }),
        ),
      ];
    }),
  );
};

const makeUseStylesFactory = <T extends {}>(
  Context: React.Context<T>,
): MakeUseStylesType => {
  if (Context == null) {
    throw new Error(
      'Please provide a valid React Context instance to create a  makeUseStyles instance',
    );
  }
  const makeUseStyles = (
    stylesDefinitions: StylesDefinitionArgs,
  ): UseStylesType => {
    if (typeof stylesDefinitions === 'function') {
      return (args?: any): StyleDefinitionObject => {
        const theme = React.useContext(Context);
        return React.useMemo(() => {
          const computedStyle = computeDynamicStylesFromFunction(
            stylesDefinitions,
            args,
            theme,
          );
          console.log;
          return StyleSheet.create(computedStyle);
        }, [args, theme]);
      };
    } else if (typeof stylesDefinitions === 'object') {
      return (args?: any): StyleDefinitionObject => {
        const computedStyle = computeDynamicStylesFromObject(
          stylesDefinitions,
          args,
        );
        return React.useMemo(() => StyleSheet.create(computedStyle), [
          computedStyle,
        ]);
      };
    } else {
      throw new Error(
        'NATIVE THEME - Unexpected style definitions make sure that you passed either a function or an object to useStyles',
      );
    }
  };

  return makeUseStyles;
};

export {makeUseStylesFactory, MakeUseStylesType, UseStylesType};
