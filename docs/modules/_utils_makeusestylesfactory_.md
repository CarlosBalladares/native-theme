[native-theme-test](../README.md) › [Globals](../globals.md) › ["utils/makeUseStylesFactory"](_utils_makeusestylesfactory_.md)

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

### Variables

* [StylesheetManager](_utils_makeusestylesfactory_.md#const-stylesheetmanager)

### Functions

* [computeDynamicStylesFromFunction](_utils_makeusestylesfactory_.md#const-computedynamicstylesfromfunction)
* [computeDynamicStylesFromObject](_utils_makeusestylesfactory_.md#const-computedynamicstylesfromobject)
* [hash](_utils_makeusestylesfactory_.md#hash)
* [makeUseStylesFactory](_utils_makeusestylesfactory_.md#const-makeusestylesfactory)

## Type aliases

###  DynamicImageStyle

Ƭ **DynamicImageStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:60](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L60)*

___

###  DynamicStyleDefinitionFunction

Ƭ **DynamicStyleDefinitionFunction**: *function*

*Defined in [utils/makeUseStylesFactory.ts:80](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L80)*

#### Type declaration:

▸ (`theme`: any): *[DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  DynamicStyleDefinitionObject

Ƭ **DynamicStyleDefinitionObject**: *object*

*Defined in [utils/makeUseStylesFactory.ts:77](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L77)*

#### Type declaration:

* \[ **key**: *string*\]: [DynamicViewStyle](_utils_makeusestylesfactory_.md#dynamicviewstyle) | [DynamicTextStyle](_utils_makeusestylesfactory_.md#dynamictextstyle) | [DynamicImageStyle](_utils_makeusestylesfactory_.md#dynamicimagestyle)

___

###  DynamicStyleProperty

Ƭ **DynamicStyleProperty**: *function*

*Defined in [utils/makeUseStylesFactory.ts:67](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L67)*

#### Type declaration:

▸ (`args`: any): *unknown*

**Parameters:**

Name | Type |
------ | ------ |
`args` | any |

___

###  DynamicStylesDefinitionType

Ƭ **DynamicStylesDefinitionType**: *[DynamicStyleDefinitionObject](_utils_makeusestylesfactory_.md#dynamicstyledefinitionobject) | [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction)*

*Defined in [utils/makeUseStylesFactory.ts:84](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L84)*

___

###  DynamicTextStyle

Ƭ **DynamicTextStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:53](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L53)*

___

###  DynamicViewStyle

Ƭ **DynamicViewStyle**: *[Modify](_utils_makeusestylesfactory_.md#modify)‹ViewStyle, object›*

*Defined in [utils/makeUseStylesFactory.ts:46](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L46)*

___

###  MakeUseStylesType

Ƭ **MakeUseStylesType**: *function*

*Defined in [utils/makeUseStylesFactory.ts:96](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L96)*

#### Type declaration:

▸ (`definition`: [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs)): *[UseStylesType](_utils_makeusestylesfactory_.md#usestylestype)*

**Parameters:**

Name | Type |
------ | ------ |
`definition` | [StylesDefinitionArgs](_utils_makeusestylesfactory_.md#stylesdefinitionargs) |

___

###  Modify

Ƭ **Modify**: *Omit‹T, keyof R› & R*

*Defined in [utils/makeUseStylesFactory.ts:44](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L44)*

___

###  StyleDefinitionFunction

Ƭ **StyleDefinitionFunction**: *function*

*Defined in [utils/makeUseStylesFactory.ts:69](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L69)*

#### Type declaration:

▸ (`theme`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`theme` | any |

___

###  StyleDefinitionObject

Ƭ **StyleDefinitionObject**: *object*

*Defined in [utils/makeUseStylesFactory.ts:71](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L71)*

#### Type declaration:

* \[ **key**: *string*\]: ViewStyle | TextStyle | ImageStyle

___

###  StylesDefinitionArgs

Ƭ **StylesDefinitionArgs**: *[StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) | [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype)*

*Defined in [utils/makeUseStylesFactory.ts:88](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L88)*

___

###  StylesDefinitionType

Ƭ **StylesDefinitionType**: *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject) | [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction)*

*Defined in [utils/makeUseStylesFactory.ts:75](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L75)*

___

###  UseStylesType

Ƭ **UseStylesType**: *function*

*Defined in [utils/makeUseStylesFactory.ts:90](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L90)*

#### Type declaration:

▸ (`args?`: any, `overrides?`: any, `ignoreFunction?`: undefined | function): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

**Parameters:**

Name | Type |
------ | ------ |
`args?` | any |
`overrides?` | any |
`ignoreFunction?` | undefined &#124; function |

## Variables

### `Const` StylesheetManager

• **StylesheetManager**: *[NTStylesheetManager](../classes/_manager_ntstylesheetmanager_.ntstylesheetmanager.md)‹›* = new NTStylesheetManager()

*Defined in [utils/makeUseStylesFactory.ts:98](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L98)*

## Functions

### `Const` computeDynamicStylesFromFunction

▸ **computeDynamicStylesFromFunction**(`definitions`: [StyleDefinitionFunction](_utils_makeusestylesfactory_.md#styledefinitionfunction) | [DynamicStyleDefinitionFunction](_utils_makeusestylesfactory_.md#dynamicstyledefinitionfunction) | Function, `args`: any, `theme`: any): *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

*Defined in [utils/makeUseStylesFactory.ts:100](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L100)*

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

*Defined in [utils/makeUseStylesFactory.ts:114](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`definitions` | [StylesDefinitionType](_utils_makeusestylesfactory_.md#stylesdefinitiontype) &#124; [DynamicStylesDefinitionType](_utils_makeusestylesfactory_.md#dynamicstylesdefinitiontype) |
`args` | any |

**Returns:** *[StyleDefinitionObject](_utils_makeusestylesfactory_.md#styledefinitionobject)*

___

###  hash

▸ **hash**(`obj`: any): *any*

*Defined in [utils/makeUseStylesFactory.ts:8](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *any*

___

### `Const` makeUseStylesFactory

▸ **makeUseStylesFactory**<**T**>(`Context`: Context‹T›): *[MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)*

*Defined in [utils/makeUseStylesFactory.ts:136](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeUseStylesFactory.ts#L136)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Context` | Context‹T› |

**Returns:** *[MakeUseStylesType](_utils_makeusestylesfactory_.md#makeusestylestype)*
