/*
INPUT TYPES
single select
multi select
boolean
numeric
range
*/

export type SelectorProps<T> = {
    propertyId: string,
    value: T,
    setValue: (propertyId: string, value: T) => void
}