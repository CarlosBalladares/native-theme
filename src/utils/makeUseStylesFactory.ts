import React from 'react';
import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

type StyleDefinitionObject = {
  [key: string]: ViewStyle | TextStyle | ImageStyle;
};

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

type UseStylesType = (
  definition: StylesDefinitionArgs,
) => StyleDefinitionObject;

type MakeUseStylesType = (theme: any) => UseStylesType;

const computeDynamicStylesFromFunction = (
  definitions: StyleDefinitionFunction | DynamicStyleDefinitionFunction,
  args: any,
  theme: any,
): StyleDefinitionObject => {
  return Object.fromEntries(
    Object.entries(definitions(theme)).map((styleEntry: any) => {
      if (typeof styleEntry[1] === 'function') {
        return [styleEntry[0], styleEntry[1](args)];
      } else {
        return styleEntry;
      }
    }),
  );
};

const computeDynamicStylesFromObject = (
  definitions: StylesDefinitionType | DynamicStylesDefinitionType,
  args: any,
): StyleDefinitionObject => {
  return Object.fromEntries(
    Object.entries(definitions).map((styleEntry: any) => {
      if (typeof styleEntry[1] === 'function') {
        return [styleEntry[0], styleEntry[1](args)];
      } else {
        return styleEntry;
      }
    }),
  );
};

const makeUseStylesFactory = <T extends {}>(
  Context: React.Context<T>,
): MakeUseStylesType => {
  const makeUseStyles = (
    stylesDefinitions: StylesDefinitionArgs,
  ): UseStylesType => {
    if (typeof stylesDefinitions === 'function') {
      return (args: any): StyleDefinitionObject => {
        const theme = React.useContext(Context);
        return React.useMemo(() => {
          const computedStyle = computeDynamicStylesFromFunction(
            stylesDefinitions,
            args,
            theme,
          );
          return StyleSheet.create(computedStyle);
        }, [args, theme]);
      };
    } else if (typeof stylesDefinitions === 'object') {
      return (args: any): StyleDefinitionObject => {
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
