interface messages {
  create: { success: string, error: string },
  update: { success: string, error: string },
  delete: { success: string, error: string }
}
interface Schema {
  full: string
  fullLower?: string
  short: string
  shortLower?: string
  deleteBtnLabel?: string
  messages?: messages
  fields: Record<string, SchemaItem>
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
  type?: 'string' | 'boolean' | 'number'
  default?: string | number | boolean
  visible?: boolean
}
