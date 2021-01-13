import { FC } from 'react'
import { DocumentNode } from '@apollo/client'
import CrudTable from '../CrudTable'
import pluralize from 'pluralize'
import Layout from '../Layout/Layout'

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
}

const CrudLayout: FC<P> = ({ ...props }) => (
  <Layout>
    <h1>{pluralize(props.schema.full || props.schema.short)}</h1>
    <CrudTable {...props} />
  </Layout>
)

export default CrudLayout
