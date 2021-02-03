interface Schema {
  full: string
  fullLower?: string
  short: string
  shortLower?: string
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
}
