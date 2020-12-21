[native-theme-test](../README.md) › [Globals](../globals.md) › ["utils/makeWithTheme"](_utils_makewiththeme_.md)

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

*Defined in [utils/makeWithTheme.tsx:11](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeWithTheme.tsx#L11)*

#### Type declaration:

* **ref**: *[ForwardedRefType](_utils_makewiththeme_.md#forwardedreftype)‹any›*

* **theme**: *Theme*

___

###  ForwardedRefType

Ƭ **ForwardedRefType**: *function | MutableRefObject‹Theme | null› | null*

*Defined in [utils/makeWithTheme.tsx:7](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeWithTheme.tsx#L7)*

___

###  WithThemeHOC

Ƭ **WithThemeHOC**: *function*

*Defined in [utils/makeWithTheme.tsx:16](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeWithTheme.tsx#L16)*

#### Type declaration:

▸ (`Component`: [WrappedComponent](_utils_makewiththeme_.md#wrappedcomponent)‹Theme›, `injectedTheme?`: Theme): *React.ComponentType‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`Component` | [WrappedComponent](_utils_makewiththeme_.md#wrappedcomponent)‹Theme› |
`injectedTheme?` | Theme |

___

###  WrappedComponent

Ƭ **WrappedComponent**: *React.ComponentType‹[ConsumerProps](_utils_makewiththeme_.md#consumerprops)‹Theme››*

*Defined in [utils/makeWithTheme.tsx:15](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeWithTheme.tsx#L15)*

## Functions

### `Const` makeWithTheme

▸ **makeWithTheme**<**Theme**>(`Context`: Context‹Theme›): *[WithThemeHOC](_utils_makewiththeme_.md#withthemehoc)‹Theme›*

*Defined in [utils/makeWithTheme.tsx:21](https://github.com/CarlosBalladares/native-theme/blob/70169e3/src/utils/makeWithTheme.tsx#L21)*

**Type parameters:**

▪ **Theme**: *object*

**Parameters:**

Name | Type |
------ | ------ |
`Context` | Context‹Theme› |

**Returns:** *[WithThemeHOC](_utils_makewiththeme_.md#withthemehoc)‹Theme›*
