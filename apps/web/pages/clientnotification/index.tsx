import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { Button, Breadcrumb, BasicModal } from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import ClientNotification from '../../components/ClientNotification/index'

const { Title } = Typography

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = React.useState(1)
  const [sendEmail, setSendEmail] = React.useState(false)
  function handleSendEmailBtn(value) {
    setSendEmail(value)
  }

  return (
    <Layout>
      <div style={{ backgroundColor: '#FFF' }}>
        <Breadcrumb
          breadcrumbItems={[
            { breadcrumbName: 'Setup', path: 'setup' },
            { breadcrumbName: 'Notification Messages', path: '' },
            { breadcrumbName: 'Upcoming appointment reminder', path: '' },
          ]}
        />
        <Title>Upcoming appointment reminder</Title>
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
          onClick={() => handleSendEmailBtn(!sendEmail)}
        >
          {setIndexTab === 1 ? 'Send Test Email' : 'Send Test SMS'}
        </Button>
        <BasicModal
          title={
            setIndexTab === 1 ? 'Send a Test Email' : 'Send a Test Message'
          }
          visible={sendEmail}
          onCancel={() => setSendEmail(false)}
          centered={true}
          newButtonText={'Send'}
          dangerButtonText={'Cancel'}
        >
          {setIndexTab === 1 ? (
            <div>
              <p style={{ color: '#9292A3' }}>Email:</p>
              <Input placeholder="client@email.com" />
            </div>
          ) : (
            <div>
              <p style={{ color: '#9292A3' }}>Phone Number</p>
              <Input placeholder="phone number" />
            </div>
          )}
        </BasicModal>
        {setIndexTab === 1 && (
          <Button
            style={{
              margin: '1em 8px',
              height: '40px',
              fontSize: '14px',
            }}
            type="primary"
          >
            Save
          </Button>
        )}
      </div>
      <ClientNotification onSeletedTab={(value) => setSelectedTab(value)} />
    </Layout>
  )
}

export default Index
