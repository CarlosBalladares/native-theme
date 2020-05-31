[native-theme](../README.md) › [Globals](../globals.md) › ["utils/makeWithTheme"](_utils_makewiththeme_.md)

# Module: "utils/makeWithTheme"

## Index

### Type aliases

* [ConsumerProps](_utils_makewiththeme_.md#consumerprops)
* [ForwardedRefType](_utils_makewiththeme_.md#forwardedreftype)
* [WithThemeHOC](_utils_makewiththeme_.md#withthemehoc)
* [WrappedComponent](_utils_makewiththeme_.md#wrappedcomponent)

### Functions

* [makeWithTheme](_utils_makewiththeme_.md#const-makewiththeme)

## Type aliases

###  ConsumerProps

Ƭ **ConsumerProps**: *object*

*Defined in [utils/makeWithTheme.tsx:8](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeWithTheme.tsx#L8)*

#### Type declaration:

* **ref**: *[ForwardedRefType](_utils_makewiththeme_.md#forwardedreftype)‹any›*

* **theme**: *T*

___

###  ForwardedRefType

Ƭ **ForwardedRefType**: *function | MutableRefObject‹T | null› | null*

*Defined in [utils/makeWithTheme.tsx:4](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeWithTheme.tsx#L4)*

___

###  WithThemeHOC

Ƭ **WithThemeHOC**: *function*

*Defined in [utils/makeWithTheme.tsx:13](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeWithTheme.tsx#L13)*

#### Type declaration:

▸ (`Component`: [WrappedComponent](_utils_makewiththeme_.md#wrappedcomponent)‹T›): *React.ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [WrappedComponent](_utils_makewiththeme_.md#wrappedcomponent)‹T› |

___

###  WrappedComponent

Ƭ **WrappedComponent**: *React.ComponentType‹[ConsumerProps](_utils_makewiththeme_.md#consumerprops)‹T››*

*Defined in [utils/makeWithTheme.tsx:12](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeWithTheme.tsx#L12)*

## Functions

### `Const` makeWithTheme

▸ **makeWithTheme**<**T**>(`Context`: Context‹T›): *[WithThemeHOC](_utils_makewiththeme_.md#withthemehoc)‹T›*

*Defined in [utils/makeWithTheme.tsx:17](https://github.com/indigo-org/native-theme/blob/1e03566/src/utils/makeWithTheme.tsx#L17)*

**Type parameters:**

▪ **T**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Context` | Context‹T› |

**Returns:** *[WithThemeHOC](_utils_makewiththeme_.md#withthemehoc)‹T›*
