import React, { FC, useRef } from 'react'
import { Typography, Input, Modal, Menu, Dropdown, Checkbox, Row } from 'antd'
import { Button, Breadcrumb, PhoneNumberInput, Notification } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import ClientNotification from '../../../components/ClientNotification/index'
import styles from './index.module.less'
import CommonHeader from '../../setup/CommonHeader'
import { DownOutlined, LeftOutlined } from '@ant-design/icons'
import { renderToString } from 'react-dom/server'
import AppointmentEmailPreview from './email-preview'
import { apiURL } from '../../../baseUrl'
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
  const [validEmail, setValidEmail] = React.useState(false)
  const [visible, setVisible] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const ref = useRef()

  function handleSendEmailBtn(value) {
    setSendEmail(value)
  }

  const showNotification = () => {
    if (validEmail && setIndexTab === 1) {
      setSendEmail(false)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const propsData = ref?.current?.propsData() || {}
      const {
        requestConfirm,
        allowRescheduling,
        allowCancellation,
        displayPolicy,
        showService,
        showEmployeeName,
        addMedicalHisButton,
        selectLanguage,
        backGroundColor,
        buttonColor,
        informationMessage,
        medicalMessage,
        standardTapIndex,
        activeSocialIcons,
      } = propsData

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': apiURL,
        },
        body: JSON.stringify({
          bodyContent: `${renderToString(
            <AppointmentEmailPreview
              requestConfirm={requestConfirm}
              allowRescheduling={allowRescheduling}
              allowCancellation={allowCancellation}
              displayPolicy={displayPolicy}
              showService={showService}
              showEmployeeName={showEmployeeName}
              addMedicalHisButton={addMedicalHisButton}
              selectLanguage={selectLanguage}
              backGroundColor={backGroundColor}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              medicalMessage={medicalMessage}
              standardTapIndex={standardTapIndex}
              activeSocialIcons={activeSocialIcons}
            />
          )}`,
          email: email,
          subject: 'TEST',
        }),
      }
      fetch(`${apiURL}/notification-email`, requestOptions).then((res) => {
        if (res.status === 201) {
          Notification(NotificationType.success, 'Test Email sent')
        } else {
          Notification(NotificationType.error, 'Test Email failed')
        }
      })
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
    const searchFind = regexp.test(search)
    setValidEmail(searchFind)
    if (searchFind) {
      setEmail(search)
    }
  }
  const menu = (
    <Menu className={styles.menuListUl}>
      <Menu.Item className={styles.menuListItem}>
        <Row>
          <Checkbox value="enable_reminder">
            Enable reminders via email
          </Checkbox>
        </Row>
      </Menu.Item>
      <Menu.Item className={styles.menuListItem}>
        <Row>
          <Checkbox value="enable_reminder">Enable reminders via sms</Checkbox>
        </Row>
      </Menu.Item>
    </Menu>
  )

  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.appointmentWrapper}>
          <span className={styles.hideSection}>
            <Breadcrumb
              breadcrumbItems={[
                { path: '', breadcrumbName: 'Setup' },
                {
                  path: '/client-notifications',
                  breadcrumbName: 'Notification Messages',
                },
                {
                  path: '/client-notifications/appointment-reminder',
                  breadcrumbName: 'Upcoming appointment reminder',
                },
              ]}
            />
          </span>
          <Title>
            <span className={`${styles.backArrow} ${styles.hideSection}`}>
              <LeftOutlined className={styles.leftIcon} />
            </span>
            Upcoming appointment reminder
          </Title>
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
          <span className={styles.hideSection}>
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              onVisibleChange={handleVisibleChange}
              visible={visible}
              arrow
            >
              <Button size={'large'}>
                Enable settings <DownOutlined />
              </Button>
            </Dropdown>
          </span>
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
                    disabled={validEmail ? false : true}
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
        </div>
        <ClientNotification
          ref={ref}
          onSeletedTab={(value) => setSelectedTab(value)}
        />
      </Layout>
    </>
  )
}

export default Index
