[native-theme](../README.md) › [Globals](../globals.md) › ["utils/makeUseStylesFactory"](_utils_makeusestylesfactory_.md)

# Module: "utils/makeUseStylesFactory"

## Index

### Type aliases

* [DynamicImageStyle](_utils_makeusestylesfactory_.md#dynamicimagestyle)
* [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction)
* [DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject)
* [DynamicStyleProperty](_utils_makeusestylesfactory_.md#dynamicstyleproperty)
* [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype)
* [DynamicTextStyle](_utils_makeusestylesfactory_.md#dynamictextstyle)
* [DynamicViewStyle](_utils_makeusestylesfactory_.md#dynamicviewstyle)
* [MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)
* [Modify](_utils_makeusestylesfactory_.md#modify)
* [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction)
* [StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)
* [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs)
* [StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype)
* [UseStylesType](_utils_makeusestylesfactory_.md#usestylestype)

### Functions

* [computeDynamicStylesFromFunction](_utils_makeusestylesfactory_.md#const-computedynamicstylesfromfunction)
* [computeDynamicStylesFromObject](_utils_makeusestylesfactory_.md#const-computedynamicstylesfromobject)
* [makeUseStylesFactory](_utils_makeusestylesfactory_.md#const-makeusestylesfactory)

## Type aliases

###  DynamicImageStyle

Ƭ **DynamicImageStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:20](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L20)*

___

###  DynamicStyleDefinitionFunction

Ƭ **DynamicStyleDefinitionFunction**: *function*

*Defined in [utils/makeUseStylesFactory.ts:40](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L40)*

#### Type declaration:

▸ (`theme`: any): *[DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  DynamicStyleDefinitionObject

Ƭ **DynamicStyleDefinitionObject**: *object*

*Defined in [utils/makeUseStylesFactory.ts:37](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L37)*

#### Type declaration:

* \[ **key**: *string*\]: [DynamicViewStyle](_utils_makeusestylesfactory_.md#dynamicviewstyle) | [DynamicTextStyle](_utils_makeusestylesfactory_.md#dynamictextstyle) | [DynamicImageStyle](_utils_makeusestylesfactory_.md#dynamicimagestyle)

___

###  DynamicStyleProperty

Ƭ **DynamicStyleProperty**: *function*

*Defined in [utils/makeUseStylesFactory.ts:27](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L27)*

#### Type declaration:

▸ (`args`: any): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

___

###  DynamicStylesDefinitionType

Ƭ **DynamicStylesDefinitionType**: *[DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject) | [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction)*

*Defined in [utils/makeUseStylesFactory.ts:44](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L44)*

___

###  DynamicTextStyle

Ƭ **DynamicTextStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:13](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L13)*

___

###  DynamicViewStyle

Ƭ **DynamicViewStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:6](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L6)*

___

###  MakeUseStylesType

Ƭ **MakeUseStylesType**: *function*

*Defined in [utils/makeUseStylesFactory.ts:52](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L52)*

#### Type declaration:

▸ (`definition`: [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs)): *[UseStylesType](_utils_makeusestylesfactory_.md#usestylestype)*

**Parameters:**

Name | Type |
------ | ------ |
`definition` | [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs) |

___

###  Modify

Ƭ **Modify**: *Omit‹T, keyof R› & R*

*Defined in [utils/makeUseStylesFactory.ts:4](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L4)*

___

###  StyleDefinitionFunction

Ƭ **StyleDefinitionFunction**: *function*

*Defined in [utils/makeUseStylesFactory.ts:29](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L29)*

#### Type declaration:

▸ (`theme`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  StyleDefinitionObject

Ƭ **StyleDefinitionObject**: *object*

*Defined in [utils/makeUseStylesFactory.ts:31](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L31)*

#### Type declaration:

* \[ **key**: *string*\]: ViewStyle | TextStyle | ImageStyle

___

###  StylesDefinitionArgs

Ƭ **StylesDefinitionArgs**: *[StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) | [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype)*

*Defined in [utils/makeUseStylesFactory.ts:48](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L48)*

___

###  StylesDefinitionType

Ƭ **StylesDefinitionType**: *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject) | [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction)*

*Defined in [utils/makeUseStylesFactory.ts:35](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L35)*

___

###  UseStylesType

Ƭ **UseStylesType**: *function*

*Defined in [utils/makeUseStylesFactory.ts:50](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L50)*

#### Type declaration:

▸ (`args?`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |

## Functions

### `Const` computeDynamicStylesFromFunction

▸ **computeDynamicStylesFromFunction**(`definitions`: [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction) | [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction) | Function, `args`: any, `theme`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

*Defined in [utils/makeUseStylesFactory.ts:54](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction) &#124; [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction) &#124; Function |
`args` | any |
`theme` | any |

**Returns:** *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

___

### `Const` computeDynamicStylesFromObject

▸ **computeDynamicStylesFromObject**(`definitions`: [StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) | [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype), `args`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

*Defined in [utils/makeUseStylesFactory.ts:68](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) &#124; [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype) |
`args` | any |

**Returns:** *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

___

### `Const` makeUseStylesFactory

▸ **makeUseStylesFactory**<**T**>(`Context`: Context‹T›): *[MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)*

*Defined in [utils/makeUseStylesFactory.ts:90](https://github.com/indigo-org/native-theme/blob/1f1a57d/src/utils/makeUseStylesFactory.ts#L90)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Context` | Context‹T› |

**Returns:** *[MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)*
