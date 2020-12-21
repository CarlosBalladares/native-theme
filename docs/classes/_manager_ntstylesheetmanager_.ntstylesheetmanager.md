[native-theme-test](../README.md) › [Globals](../globals.md) › ["manager/NTStylesheetManager"](../modules/_manager_ntstylesheetmanager_.md) › [NTStylesheetManager](_manager_ntstylesheetmanager_.ntstylesheetmanager.md)

# Class: NTStylesheetManager

## Hierarchy

* [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md)

  ↳ **NTStylesheetManager**

## Index

### Constructors

* [constructor](_manager_ntstylesheetmanager_.ntstylesheetmanager.md#constructor)

### Properties

* [activeStyleSheets](_manager_ntstylesheetmanager_.ntstylesheetmanager.md#protected-activestylesheets)

### Methods

* [getStyle](_manager_ntstylesheetmanager_.ntstylesheetmanager.md#getstyle)
* [hasStyle](_manager_ntstylesheetmanager_.ntstylesheetmanager.md#hasstyle)
* [removeStyle](_manager_ntstylesheetmanager_.ntstylesheetmanager.md#removestyle)
* [setStyle](_manager_ntstylesheetmanager_.ntstylesheetmanager.md#setstyle)

## Constructors

###  constructor

\+ **new NTStylesheetManager**(): *[NTStylesheetManager](_manager_ntstylesheetmanager_.ntstylesheetmanager.md)*

*Overrides [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md).[constructor](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#constructor)*

Defined in manager/NTStylesheetManager.ts:3

**Returns:** *[NTStylesheetManager](_manager_ntstylesheetmanager_.ntstylesheetmanager.md)*

## Properties

### `Protected` activeStyleSheets

• **activeStyleSheets**: *Map‹string, [string, [StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject)]›*

*Inherited from [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md).[activeStyleSheets](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#protected-activestylesheets)*

Defined in manager/AbstractStylesheeetManager.ts:3

## Methods

###  getStyle

▸ **getStyle**(`useStylesID`: string, `hash`: string): *[StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject) | null*

*Overrides [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md).[getStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-getstyle)*

Defined in manager/NTStylesheetManager.ts:21

**Parameters:**

Name | Type |
------ | ------ |
`useStylesID` | string |
`hash` | string |

**Returns:** *[StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject) | null*

___

###  hasStyle

▸ **hasStyle**(`useStylesID`: string, `hash`: string): *boolean*

*Overrides [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md).[hasStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-hasstyle)*

Defined in manager/NTStylesheetManager.ts:8

**Parameters:**

Name | Type |
------ | ------ |
`useStylesID` | string |
`hash` | string |

**Returns:** *boolean*

___

###  removeStyle

▸ **removeStyle**(`useStylesID`: string): *boolean*

*Overrides [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md).[removeStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-removestyle)*

Defined in manager/NTStylesheetManager.ts:45

**Parameters:**

Name | Type |
------ | ------ |
`useStylesID` | string |

**Returns:** *boolean*

___

###  setStyle

▸ **setStyle**(`useStylesID`: string, `hash`: string, `style`: [StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject)): *void*

*Overrides [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md).[setStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-setstyle)*

Defined in manager/NTStylesheetManager.ts:37

**Parameters:**

Name | Type |
------ | ------ |
`useStylesID` | string |
`hash` | string |
`style` | [StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject) |

**Returns:** *void*
