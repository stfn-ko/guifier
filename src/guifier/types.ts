import * as z from 'zod'

import { PrimitiveTypes, DataType } from './enums'
import type { Data } from './classes/Data'
import type { Field } from './fields/Field/Field'

/**
 * Represents a javascript object with any structure
 */
export type AnyObject = Record<any, any>

export const ParameterSchema = z.object({
    elementId: z.string(),
    data: z.any(),
    dataType: z.nativeEnum(DataType),
    withoutContainer: z.boolean().optional().default(false),
    flipBackgroundColors: z.boolean().optional().default(false),
    expandFieldsToFullWidth: z.boolean().optional().default(false),
    readOnlyMode: z.boolean().optional().default(false),
    onChange: z.function().optional()
})
/**
 * Represents the object that gets passed to the instantiated Guifier object
 */
export type Parameters = z.input<typeof ParameterSchema>
export type ParametersInternal = z.infer<typeof ParameterSchema>

/**
 * Represents the guifier property contents
 */
export interface Property {
    _path: Array<number | string>
    _key: string | number
    _valueType: PrimitiveTypes
    _value: any
    _fieldType?: string
    _rules?: string[] | AnyObject[]
    _params?: any
}
export const defaultProperty: Property = {
    _path: [],
    _key: '',
    _valueType: PrimitiveTypes.String,
    _value: '',
    _fieldType: undefined
}

/**
 * Represents the FieldsMetaData object
 */
export type FieldsMetaData = Record<string, FieldMetaData>
export interface FieldMetaData {
    staticObject: typeof Field
    getInstantiatedObject: (property: Property, data: Data, params: ParametersInternal) => Field
}