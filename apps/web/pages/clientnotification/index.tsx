import React, { FC } from 'react'
import { Typography, Input, Modal } from 'antd'
import { Button, Breadcrumb, PhoneNumberInput, Notification } from '@pabau/ui'
import Layout from '../../components/Layout/Layout'
import ClientNotification from '../../components/ClientNotification/index'
import styles from './index.module.less'

const { Title } = Typography

enum NotificationType {
  info = 'info',
  success = 'success',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  connect = 'connect',
}

const Index: FC = () => {
  const [setIndexTab, setSelectedTab] = React.useState(1)
  const [sendEmail, setSendEmail] = React.useState(false)
  const [valideEmail, setValidEmail] = React.useState(false)

  function handleSendEmailBtn(value) {
    setSendEmail(value)
  }

  function showNotification() {
    if (valideEmail) {
      if (setIndexTab === 1) {
        Notification(NotificationType.success, 'Test message sent')
        setSendEmail(false)
      }
    }
    if (setIndexTab === 2) {
      Notification(NotificationType.success, 'Test SMS sent')
      setSendEmail(false)
    }
  }

  function isEmail(search: string) {
    const regexp = new RegExp(
      /* eslint-disable-next-line */
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    const serchfind = regexp.test(search)
    setValidEmail(serchfind)
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
          className={styles.notificationSendButton}
          style={{ margin: '1em 8px', height: '40px', fontSize: '14px' }}
          type="default"
          onClick={() => handleSendEmailBtn(!sendEmail)}
        >
          {setIndexTab === 1 ? 'Send Test Email' : 'Send Test SMS'}
        </Button>
        <Modal
          title={setIndexTab === 1 ? 'Send Test Email' : 'Send Test Message'}
          visible={sendEmail}
          onCancel={() => setSendEmail(false)}
          centered={true}
          wrapClassName={styles.modal}
          footer={null}
        >
          <div>
            {setIndexTab === 1 ? (
              <div>
                <p style={{ color: '#9292A3' }}>Email</p>
                <Input
                  placeholder="client@email.com"
                  onChange={(event) => isEmail(event.target.value)}
                />
              </div>
            ) : (
              <div>
                <PhoneNumberInput
                  countryCode={'GB'}
                  onChange={(val) => {
                    console.log(val)
                  }}
                />
              </div>
            )}

            <div className={styles.footerBtnGroup}>
              <Button
                type="default"
                style={{ marginRight: '10px' }}
                onClick={() => setSendEmail(false)}
              >
                Cancel
              </Button>
              {setIndexTab === 1 && (
                <Button
                  type="primary"
                  disabled={valideEmail ? false : true}
                  onClick={() => showNotification()}
                >
                  Send
                </Button>
              )}
              {setIndexTab === 2 && (
                <Button type="primary" onClick={() => showNotification()}>
                  Send
                </Button>
              )}
            </div>
          </div>
        </Modal>
        {setIndexTab === 1 && (
          <Button
            className={styles.notificationSaveButton}
            style={{
              margin: '1em 8px',
              height: '40px',
              fontSize: '14px',
            }}
            type="primary"
            onClick={() =>
              Notification(
                NotificationType.success,
                'Success! Notification Source Updated'
              )
            }
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
