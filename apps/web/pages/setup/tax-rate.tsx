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

/* eslint-disable-next-line */
export interface TaxRateProps {}

const cardBodyStyle = {
  padding: '20px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}

export function TaxRate(props: TaxRateProps) {
  const { Title, Paragraph, Text } = Typography
  const [showCreateTax, setShowCreateTax] = useState(false)

  return (
    <Layout active={'setup/tax-rate'}>
      <Card bodyStyle={{ padding: 0 }}>
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
        <TaxRateList />
      </Card>

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
        onSave={() => {
          Notification(
            NotificationType.success,
            'Success! You have successfully added a tax rate'
          )
        }}
      />
    </Layout>
  )
}

export default TaxRate
