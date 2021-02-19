import { FC } from 'react'
import { DocumentNode } from '@apollo/client'
import CrudTable from '../CrudTable'

interface editFieldsTypes {
  id?: string
  name?: string
  phone?: string
  website?: string
  country?: string
  city?: string
  street?: string
  post_code?: string
  invoice_template?: string
  invoice_prefix?: string
  invoice_starting_number?: string
  vat_registered?: boolean
}

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery: DocumentNode
  aggregateQuery?: DocumentNode
  tableSearch?: boolean
  updateOrderQuery?: DocumentNode
  showNotificationBanner?: boolean
  createPage?: boolean
  notificationBanner?: React.ReactNode
  createPageOnClick?(): void
  addFilter?: boolean
  setEditPage?(e: editFieldsTypes): void
}

const CrudLayout: FC<P> = ({ ...props }) => <CrudTable {...props} />

export default CrudLayout
