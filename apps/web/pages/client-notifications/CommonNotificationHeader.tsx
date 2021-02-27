import React, { FC } from 'react'
import { Typography, Input, Modal, Menu, Dropdown, Checkbox, Row } from 'antd'
import {
  Button,
  Breadcrumb,
  PhoneNumberInput,
  Notification,
  BreadcrumbItemInterface,
} from '@pabau/ui'
import styles from './style.module.less'
import CommonHeader from '../setup/common-header'
import { DownOutlined, LeftOutlined } from '@ant-design/icons'

const { Title } = Typography

enum NotificationType {
  info = 'info',
  success = 'success',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  connect = 'connect',
}

interface p {
  setIndexTab: number
  showNotification(): void
  setEmail(val: string): void
  title: string
  breadcrumbItems: BreadcrumbItemInterface[]
}

const CommonNotificationHeader: FC<p> = ({
  setIndexTab,
  showNotification,
  breadcrumbItems,
  title,
  setEmail,
}) => {
  const [sendEmail, setSendEmail] = React.useState(false)
  const [validEmail, setValidEmail] = React.useState(false)
  const [visible, setVisible] = React.useState(false)

  function handleSendEmailBtn(value) {
    setSendEmail(value)
  }

  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const handleShowNotification = () => {
    showNotification()
    setSendEmail(false)
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

  return (
    <>
      <CommonHeader />
      <div>
        <div className={styles.appointmentWrapper}>
          <span className={styles.hideSection}>
            <Breadcrumb breadcrumbItems={breadcrumbItems} />
          </span>
          <Title>
            <span className={`${styles.backArrow} ${styles.hideSection}`}>
              <LeftOutlined className={styles.leftIcon} />
            </span>
            {title}
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
                    onClick={() => handleShowNotification()}
                  >
                    Send
                  </Button>
                )}
                {setIndexTab === 2 && (
                  <Button
                    type="primary"
                    onClick={() => handleShowNotification()}
                  >
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
      </div>
    </>
  )
}

export default CommonNotificationHeader
