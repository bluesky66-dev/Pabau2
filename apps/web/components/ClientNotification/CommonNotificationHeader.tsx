import React, { FC } from 'react'
import { Typography, Input, Modal, Menu, Dropdown, Checkbox, Row } from 'antd'
import {
  Button,
  Breadcrumb,
  PhoneNumberInput,
  Notification,
  NotificationType,
  BreadcrumbItemInterface,
} from '@pabau/ui'
import { useFormik } from 'formik'
import styles from '../../pages/client-notifications/style.module.less'
import CommonHeader from '../../pages/setup/common-header'
import { DownOutlined, LeftOutlined } from '@ant-design/icons'
import * as Yup from 'yup'

const { Title } = Typography

interface p {
  setIndexTab: number
  handleNotificationSubmit?(val: string): void
  title: string
  breadcrumbItems: BreadcrumbItemInterface[]
}

const CommonNotificationHeader: FC<p> = ({
  setIndexTab,
  breadcrumbItems,
  title,
  handleNotificationSubmit,
}) => {
  const [sendEmail, setSendEmail] = React.useState(false)
  const [visible, setVisible] = React.useState(false)

  const handleVisibleChange = (flag) => {
    setVisible(flag)
  }

  const handleShowNotification = () => {
    setSendEmail(false)
  }

  const sendEmailForm = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address'),
    }),
    onSubmit: (val) => {
      handleNotificationSubmit?.(val.email)
      setSendEmail(false)
    },
  })

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
            onClick={() => setSendEmail(!sendEmail)}
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
            <form onSubmit={sendEmailForm.handleSubmit}>
              <div>
                {setIndexTab === 1 ? (
                  <div>
                    <p style={{ color: '#9292A3' }}>Email</p>
                    <Input
                      placeholder="client@email.com"
                      onChange={sendEmailForm.handleChange('email')}
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
                      htmlType="submit"
                      disabled={
                        sendEmailForm.errors.email === undefined &&
                        sendEmailForm.values.email !== ''
                          ? false
                          : true
                      }
                      //onClick={() => handleShowNotification()}
                    >
                      Send
                    </Button>
                  )}
                  {setIndexTab === 2 && (
                    <Button
                      type="primary"
                      htmlType="submit"
                      onClick={() => handleShowNotification()}
                    >
                      Send
                    </Button>
                  )}
                </div>
              </div>
            </form>
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
