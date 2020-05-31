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

*Defined in [utils/makeUseStylesFactory.ts:24](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L24)*

___

###  DynamicStyleDefinitionFunction

Ƭ **DynamicStyleDefinitionFunction**: *function*

*Defined in [utils/makeUseStylesFactory.ts:41](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L41)*

#### Type declaration:

▸ (`theme`: any): *[DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  DynamicStyleDefinitionObject

Ƭ **DynamicStyleDefinitionObject**: *object*

*Defined in [utils/makeUseStylesFactory.ts:37](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L37)*

#### Type declaration:

* \[ **key**: *string*\]: [DynamicViewStyle](_utils_makeusestylesfactory_.md#dynamicviewstyle) | [DynamicTextStyle](_utils_makeusestylesfactory_.md#dynamictextstyle) | [DynamicImageStyle](_utils_makeusestylesfactory_.md#dynamicimagestyle)

___

###  DynamicStyleProperty

Ƭ **DynamicStyleProperty**: *function*

*Defined in [utils/makeUseStylesFactory.ts:31](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L31)*

#### Type declaration:

▸ (`args`: any): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

___

###  DynamicStylesDefinitionType

Ƭ **DynamicStylesDefinitionType**: *[DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject) | [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction)*

*Defined in [utils/makeUseStylesFactory.ts:45](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L45)*

___

###  DynamicTextStyle

Ƭ **DynamicTextStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:17](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L17)*

___

###  DynamicViewStyle

Ƭ **DynamicViewStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:10](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L10)*

___

###  MakeUseStylesType

Ƭ **MakeUseStylesType**: *function*

*Defined in [utils/makeUseStylesFactory.ts:55](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L55)*

#### Type declaration:

▸ (`theme`: any): *[UseStylesType](_utils_makeusestylesfactory_.md#usestylestype)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  Modify

Ƭ **Modify**: *Omit‹T, keyof R› & R*

*Defined in [utils/makeUseStylesFactory.ts:8](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L8)*

___

###  StyleDefinitionFunction

Ƭ **StyleDefinitionFunction**: *function*

*Defined in [utils/makeUseStylesFactory.ts:33](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L33)*

#### Type declaration:

▸ (`theme`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  StyleDefinitionObject

Ƭ **StyleDefinitionObject**: *object*

*Defined in [utils/makeUseStylesFactory.ts:4](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L4)*

#### Type declaration:

* \[ **key**: *string*\]: ViewStyle | TextStyle | ImageStyle

___

###  StylesDefinitionArgs

Ƭ **StylesDefinitionArgs**: *[StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) | [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype)*

*Defined in [utils/makeUseStylesFactory.ts:49](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L49)*

___

###  StylesDefinitionType

Ƭ **StylesDefinitionType**: *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject) | [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction)*

*Defined in [utils/makeUseStylesFactory.ts:35](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L35)*

___

###  UseStylesType

Ƭ **UseStylesType**: *function*

*Defined in [utils/makeUseStylesFactory.ts:51](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L51)*

#### Type declaration:

▸ (`definition?`: [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs)): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`definition?` | [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs) |

## Functions

### `Const` computeDynamicStylesFromFunction

▸ **computeDynamicStylesFromFunction**(`definitions`: [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction) | [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction), `args`: any, `theme`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

*Defined in [utils/makeUseStylesFactory.ts:57](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction) &#124; [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction) |
`args` | any |
`theme` | any |

**Returns:** *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

___

### `Const` computeDynamicStylesFromObject

▸ **computeDynamicStylesFromObject**(`definitions`: [StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) | [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype), `args`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

*Defined in [utils/makeUseStylesFactory.ts:73](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) &#124; [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype) |
`args` | any |

**Returns:** *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

___

### `Const` makeUseStylesFactory

▸ **makeUseStylesFactory**<**T**>(`Context`: Context‹T›): *[MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)*

*Defined in [utils/makeUseStylesFactory.ts:88](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeUseStylesFactory.ts#L88)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Context` | Context‹T› |

**Returns:** *[MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)*
