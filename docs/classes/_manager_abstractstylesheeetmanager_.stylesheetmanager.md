[native-theme-test](../README.md) › [Globals](../globals.md) › ["manager/AbstractStylesheeetManager"](../modules/_manager_abstractstylesheeetmanager_.md) › [StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md)

# Class: StyleSheetManager

## Hierarchy

* **StyleSheetManager**

  ↳ [NTStylesheetManager](_manager_ntstylesheetmanager_.ntstylesheetmanager.md)

## Index

### Constructors

* [constructor](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#constructor)

### Properties

* [activeStyleSheets](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#protected-activestylesheets)

### Methods

* [getStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-getstyle)
* [hasStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-hasstyle)
* [removeStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-removestyle)
* [setStyle](_manager_abstractstylesheeetmanager_.stylesheetmanager.md#abstract-setstyle)

## Constructors

###  constructor

\+ **new StyleSheetManager**(): *[StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md)*

Defined in manager/AbstractStylesheeetManager.ts:3

Constructor initialized class styles

**Returns:** *[StyleSheetManager](_manager_abstractstylesheeetmanager_.stylesheetmanager.md)*

## Properties

### `Protected` activeStyleSheets

• **activeStyleSheets**: *Map‹string, [string, [StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject)]›*

Defined in manager/AbstractStylesheeetManager.ts:3

## Methods

### `Abstract` getStyle

▸ **getStyle**(`useStylesID`: string, `hash`: string): *[StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject) | null*

Defined in manager/AbstractStylesheeetManager.ts:21

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useStylesID` | string | id asigned to each useStyles hook function |
`hash` | string | hash assigned to arguments the hook depends on |

**Returns:** *[StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject) | null*

StyleDefinitionObject for the useStylesID and hash, null otherwise

___

### `Abstract` hasStyle

▸ **hasStyle**(`useStylesID`: string, `hash`: string): *boolean*

Defined in manager/AbstractStylesheeetManager.ts:15

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useStylesID` | string | id asigned to each useStyles hook function |
`hash` | string | hash assigned to arguments the hook depends on |

**Returns:** *boolean*

boolean that indicates whether the style has been already computed

___

### `Abstract` removeStyle

▸ **removeStyle**(`useStylesID`: string): *boolean*

Defined in manager/AbstractStylesheeetManager.ts:40

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useStylesID` | string | id asigned to each useStyles hook function |

**Returns:** *boolean*

boolean with value true if style exists and has been removed, false otherwise.

___

### `Abstract` setStyle

▸ **setStyle**(`useStylesID`: string, `hash`: string, `style`: [StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject)): *void*

Defined in manager/AbstractStylesheeetManager.ts:31

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`useStylesID` | string | id asigned to each useStyles hook function |
`hash` | string | hash assigned to arguments the hook depends on |
`style` | [StyleDefinitionObject](../modules/_utils_makeusestylesfactory_.md#styledefinitionobject) | StyleDefinitionObject to save |

**Returns:** *void*

void
