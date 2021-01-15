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
}

const styles = {
  fontFamily: 'Circular-Std-Bold',
  fontSize: '20px',
  lineHeight: '25px',
  color: 'var(--grey-text-color)',
}

const CrudLayout: FC<P> = ({ ...props }) => (
  <Layout>
    <Breadcrumb breadcrumbItems={['Setup', pluralize(props.schema.full || props.schema.short)]} />
    <Title style={styles}>{pluralize(props.schema.full || props.schema.short)}</Title>
    <CrudTable {...props} />
  </Layout>
)

export default CrudLayout
