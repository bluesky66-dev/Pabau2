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
}
interface SchemaItem {
  full?: string
  fullLower?: string
  short?: string
  shortLower?: string
  min?: number
  example?: string | number
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
    | 'icon'
  defaultvalue?: string | number | boolean
  visible?: boolean
  radio?: RadioItems[]
}

interface RadioItems {
  label: string
  value: string
}
