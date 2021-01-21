import { FC } from 'react'
import { DocumentNode } from '@apollo/client'
import CrudTable from '../CrudTable'
import pluralize from 'pluralize'
import Layout from '../Layout/Layout'
import { Typography } from 'antd'
import { Breadcrumb } from '@pabau/ui'
const { Title } = Typography

interface P {
  schema: Schema
  addQuery?: DocumentNode
  deleteQuery?: DocumentNode
  listQuery: DocumentNode
  editQuery?: DocumentNode
}

const CrudLayout: FC<P> = ({ ...props }) => (
  <Layout>
    <div style={{ background: '#FFF' }}>
      <Breadcrumb breadcrumbItems={['Setup', pluralize(props.schema.full || props.schema.short)]} />
      <Title>{pluralize(props.schema.full || props.schema.short)}</Title>
    </div>
    <CrudTable {...props} />
  </Layout>
)

export default CrudLayout
