import { FC } from 'react'
import { DocumentNode } from '@apollo/client'
import CrudTable from '../CrudTable'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery: DocumentNode
  searchQuery: DocumentNode
}

const CrudLayout: FC<P> = ({ ...props }) => <CrudTable {...props} />

export default CrudLayout
