import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import {
  Button,
  Breadcrumb,
  BasicModal,
  PhoneNumberInput,
  Notification,
} from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import ClientNotification from '../../components/ClientNotification/index'

const { Title } = Typography

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = React.useState(1)
  const [sendEmail, setSendEmail] = React.useState(false)

  function handleSendEmailBtn(value) {
    setSendEmail(value)
  }

  function showNotification() {
    if (setIndexTab === 1) {
      Notification('success', 'Test a message')
    } else {
      Notification('success', 'Test a message')
    }
  }

  return (
    <Layout>
      <div style={{ backgroundColor: '#FFF' }}>
        <Breadcrumb
          breadcrumbItems={[
            'Setup',
            'Notification Messages',
            'Upcoming appointment reminder',
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
          onOk={() => showNotification()}
        >
          {setIndexTab === 1 ? (
            <div>
              <p style={{ color: '#9292A3' }}>Email:</p>
              <Input placeholder="client@email.com" />
            </div>
          ) : (
            <div>
              {/* <p style={{ color: '#9292A3' }}>Phone Number</p> */}
              <PhoneNumberInput
                countryCode={'GB'}
                onChange={(val) => {
                  console.log(val)
                }}
              />
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
