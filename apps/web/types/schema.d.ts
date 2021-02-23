interface messages {
  create: { success: string; error: string }
  update: { success: string; error: string }
  delete: { success: string; error: string }
}
interface Schema {
  full: string
  fullLower?: string
  short: string
  shortLower?: string
  deleteBtnLabel?: string
  messages?: messages
  fields: Record<string, SchemaItem>
  shemaType?: string
  createButtonLabel?: string
}
/* eslint-disable @typescript-eslint/no-explicit-any */
interface SchemaItem {
  full?: string
  fullLower?: string
  short?: string
  shortLower?: string
  min?: number
  example?: string | number | any
  description?: string
  extra?: JSX.Element
  cssWidth?: string
  type?:
    | 'string'
    | 'boolean'
    | 'number'
    | 'radio-group'
    | 'color-picker'
    | 'checkbox'
    | 'days-checkbox'
    | 'icon'
    | 'select'
    | 'time'
  defaultvalue?: string | number | boolean
  visible?: boolean
  required?: boolean
  radio?: TypeValues[]
  selectOptions?: TypeValues[]
  col?: number
}

interface TypeValues {
  label: string
  value: string
}
