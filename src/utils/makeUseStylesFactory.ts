import React from 'react';
import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import NTStylesheetManager from '../manager/NTStylesheetManager';
import {deepMerge} from './deepMerge';
import {isCyclic} from './isCyclic';
// import hash from 'shasum-object';
import {v1 as uuidv4} from 'react-native-uuid';
function hash(obj: any): any {
  var cache: any = [];

  function sanitize(obj: any): any {
    if (obj === null) {
      return obj;
    }
    if (
      ['undefined', 'boolean', 'number', 'string', 'function'].indexOf(
        typeof obj,
      ) >= 0
    ) {
      return obj;
    }

    if (typeof obj === 'object' && React.isValidElement(obj)) {
      return '[React element]';
    }
    if (typeof obj === 'object') {
      var keys = Object.keys(obj).sort(),
        values = [];
      for (var i = 0; i < keys.length; i++) {
        var value = obj[keys[i]];
        if (cache.indexOf(value) === -1) {
          values.push(sanitize(value));
          cache.push(value);
        } else {
          values.push('[ Previously hashed object ]');
        }
      }
      return [keys, values];
    }
  }

  return JSON.stringify(sanitize(obj));
}
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

export type StyleDefinitionObject = {
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

type UseStylesType = (
  args?: any,
  overrides?: any,
  ignoreFunction?: (args: any) => any,
) => StyleDefinitionObject;

type MakeUseStylesType = (definition: StylesDefinitionArgs) => UseStylesType;

const StylesheetManager = new NTStylesheetManager();

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
    const uuid = uuidv4();
    if (typeof stylesDefinitions === 'function') {
      return (
        args: any = {},
        themeOverrides: any,
        ignoreFunction?: (args: any) => any,
      ): StyleDefinitionObject => {
        if (themeOverrides !== undefined && isCyclic(themeOverrides)) {
          throw new Error(
            "NATIVE_THEME- themeOverrides can't be a cyclic object. Remove all circular references.",
          );
        }

        const theme = React.useContext(Context);

        const combinedHash =
          hash(
            ignoreFunction != null && typeof ignoreFunction === 'function'
              ? ignoreFunction(args)
              : args,
          ) + hash(theme);

        let styleSheet: StyleDefinitionObject | null = StylesheetManager.getStyle(
          uuid,
          combinedHash,
        );

        if (styleSheet == null) {
          const computedStyle = computeDynamicStylesFromFunction(
            stylesDefinitions,
            args,
            deepMerge(theme, themeOverrides || {}),
          );

          const temp = StyleSheet.create(computedStyle);
          StylesheetManager.setStyle(uuid, combinedHash, temp);
          styleSheet = temp;
        }

        return styleSheet;
      };
    } else if (typeof stylesDefinitions === 'object') {
      return (
        args: any = {},
        ignoreFunction?: (args: any) => any,
      ): StyleDefinitionObject => {
        const combinedHash = hash(
          ignoreFunction != null && typeof ignoreFunction === 'function'
            ? ignoreFunction(args)
            : args,
        );

        let styleSheet: StyleDefinitionObject | null = StylesheetManager.getStyle(
          uuid,
          combinedHash,
        );
        if (styleSheet == null) {
          const computedStyle = computeDynamicStylesFromObject(
            stylesDefinitions,
            args,
          );

          const temp = StyleSheet.create(computedStyle);
          StylesheetManager.setStyle(uuid, combinedHash, temp);
          styleSheet = temp;
        }

        return styleSheet;
      };
    } else {
      throw new Error(
        'NATIVE THEME - Unexpected style definitions make sure that you passed either a function or an object to makeUseStyles',
      );
    }
  };

  return makeUseStyles;
};

export {makeUseStylesFactory, MakeUseStylesType, UseStylesType};
