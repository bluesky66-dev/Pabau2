import React, { useState } from 'react'
import { Card, Typography, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {
  Breadcrumb,
  Button,
  Layout,
  Notification,
  NotificationType,
} from '@pabau/ui'
import TaxRateList from '../../components/Setup/TaxRate/TaxRateList'
import styles from './tax-rate.module.less'
import CreateTaxRateModal from '../../components/Setup/TaxRate/CreateTaxRateModal'
import { gql, useMutation } from '@apollo/client'

/* eslint-disable-next-line */
export interface TaxRateProps {}

const cardBodyStyle = {
  padding: '20px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}

const LIST_QUERY = gql`
  query Taxes($offset: Int, $limit: Int) {
    tax_rates(offset: $offset, limit: $limit, order_by: { order: asc }) {
      id
      name
      is_active
      value
      glCode
      order
    }
  }
`

const ADD_MUTATION = gql`
  mutation insert_tax_rates_one(
    $name: String
    $value: Int
    $isActive: Boolean = true
    $glCode: String
  ) {
    insert_tax_rates_one(
      object: {
        name: $name
        value: $value
        is_active: $isActive
        glCode: $glCode
      }
    ) {
      id
    }
  }
`

export function TaxRate(props: TaxRateProps) {
  const { Title, Paragraph, Text } = Typography
  const [showCreateTax, setShowCreateTax] = useState(false)

  const [addMutation] = useMutation(ADD_MUTATION, {
    onCompleted() {
      Notification(
        NotificationType.success,
        `Success! You have successfully created a tax rate`
      )
    },
    onError(err) {
      console.log(err)
      Notification(NotificationType.error, `Error! While creating a tax rate`)
    },
  })

  const onCreate = async (values) => {
    await addMutation({
      variables: { ...values, value: Number.parseInt(values.value) },
      optimisticResponse: {},
      update: (proxy) => {
        const existing = proxy.readQuery({
          query: LIST_QUERY,
        })
        if (existing) {
          const key = Object.keys(existing)[0]
          proxy.writeQuery({
            query: LIST_QUERY,
            data: {
              [key]: [...existing[key], values],
            },
          })
        }
      },
    })
  }

  return (
    <Layout active={'setup/tax-rate'}>
      <Card bodyStyle={{ padding: 0 }} style={{ borderBottomWidth: 0 }}>
        <Row className={styles.headerContainer}>
          <Col>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Tax Rate', path: '' },
              ]}
            />
            <Title>Tax Rate</Title>
          </Col>
          <Col>
            <Button type="primary" onClick={() => setShowCreateTax(true)}>
              New Tax Rate
            </Button>
          </Col>
        </Row>
      </Card>
      <TaxRateList
        listQuery={LIST_QUERY}
        onCreateTaxRate={() => setShowCreateTax(true)}
      />

      <Card className={styles.bottomCard}>
        <Title style={{ paddingBottom: 8 }}>
          Tax Defaults (Issuing Companies)
        </Title>
        <Paragraph type="secondary" style={{ maxWidth: 500 }}>
          Setup the default taxes for your business, you can still override
          defaults in the settings of individual products and services
        </Paragraph>

        <Card bodyStyle={cardBodyStyle} style={{ marginTop: 32 }}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <Text strong style={{ marginBottom: 12 }}>
              M-A Hair Dressing & Spa
            </Text>
            <Paragraph type="secondary" style={{ marginBottom: -2 }}>
              Products Default: No tax
            </Paragraph>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              Services Default: No tax
            </Paragraph>
          </div>
          <Button size="small">Edit</Button>
        </Card>

        <Card bodyStyle={cardBodyStyle} className={styles.subCard}>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <Text strong style={{ marginBottom: 12 }}>
              Illusions Beauty Salon
            </Text>
            <Paragraph type="secondary" style={{ marginBottom: -2 }}>
              Products Default: VATs
            </Paragraph>
            <Paragraph type="secondary" style={{ marginBottom: 0 }}>
              Services Default: VAT20
            </Paragraph>
          </div>
          <Button size="small">Edit</Button>
        </Card>
        <Button type="text" style={{ marginTop: 20, color: '#54B2D3' }}>
          Add New <PlusOutlined />
        </Button>
      </Card>

      <CreateTaxRateModal
        visible={showCreateTax}
        onCancel={() => setShowCreateTax(false)}
        onSave={onCreate}
      />
    </Layout>
  )
}

export default TaxRate
