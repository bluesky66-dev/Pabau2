import { ReactNode } from 'react'

interface Schema {
  full: string
  fullLower?: string
  short: string
  shortLower?: string
  fields: Record<string, SchemaItem | undefined>
}
interface SchemaItem {
  full?: string
  fullLower?: string
  short?: string
  shortLower?: string
  min?: number
  example?: string
  description?: string
  extra?: ReactNode
}
