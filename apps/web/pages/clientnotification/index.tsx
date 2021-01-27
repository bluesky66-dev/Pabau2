import React, { FC } from 'react'
import { Typography } from 'antd'
import { Button } from '@pabau/ui'
import { Breadcrumb } from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import ClientNotification from '../../components/ClientNotification/index'

const { Title } = Typography

const Index: FC = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: '#FFF' }}>
        <Breadcrumb
          breadcrumbItems={[
            'Setup',
            'Notification Messages',
            'New Appointment is booked',
          ]}
        />
        <Title>New Appointment is booked</Title>
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          margin: '1em 8px',
          height: '40px',
          minWidth: '124px',
          fontSize: '14px',
        }}
      >
        <Button
          style={{ margin: '1em 8px', height: '40px', fontSize: '14px' }}
          type="default"
        >
          Send Test Email
        </Button>
        <Button
          style={{
            margin: '1em 8px',
            height: '40px',
            fontSize: '14px',
            color: 'white',
          }}
          type="default"
          backgroundColor="#D4D4D4"
        >
          Edit
        </Button>
      </div>
      <ClientNotification />
    </Layout>
  )
}

export default Index
