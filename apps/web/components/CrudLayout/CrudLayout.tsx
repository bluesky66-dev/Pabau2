import { FC } from 'react'
import { DocumentNode } from '@apollo/client'
import CrudTable from '../CrudTable'
import pluralize from 'pluralize'
import Layout from '../Layout/Layout'
import { Typography } from 'antd'

const { Title } = Typography

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
}

const CrudLayout: FC<P> = ({ ...props }) => (
  <Layout>
    <Title>{pluralize(props.schema.full || props.schema.short)}</Title>
    <CrudTable {...props} />
  </Layout>
)

export default CrudLayout
