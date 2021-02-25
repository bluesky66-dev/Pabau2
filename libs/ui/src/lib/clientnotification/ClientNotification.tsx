import React, { FC } from 'react'
import { Row, Col, Radio, Input, Modal } from 'antd'
import styles from './ClientNotification.module.less'
import { Button, Notification } from '@pabau/ui'

enum NotificationType {
  info = 'info',
  success = 'success',
  error = 'error',
  warning = 'warning',
  loading = 'loading',
  connect = 'connect',
}

interface P {
  tabComponent?: React.ReactNode
  previewComponent?: React.ReactNode
  smsComponent?: React.ReactNode
  onSmsTabChanged?: (index) => void
}

export const ClientNotification: FC<P> = ({
  tabComponent,
  previewComponent,
  smsComponent,
  onSmsTabChanged,
}) => {
  const [previewStatus, setPreviewStatus] = React.useState(1)

  function handleSmsTabChanged(value) {
    setPreviewStatus(value)
    if (onSmsTabChanged) {
      onSmsTabChanged(value)
    }
  }

  const [visibleModal, setVisibleModal] = React.useState(false)
  const [valideEmail, setValidEmail] = React.useState(false)

  function showNotification() {
    if (valideEmail) {
      Notification(NotificationType.success, 'Test message sent')
      setVisibleModal(false)
    }
  }

  function isEmail(search) {
    const regexp = new RegExp(
      /* eslint-disable-next-line */
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    const serchfind = regexp.test(search)
    setValidEmail(serchfind)
  }

  return (
    <Row className={styles.notificationPage}>
      <Col className={styles.builderColumn}>
        <Row className={styles.headerStyle}>
          <div>BUILDER</div>
        </Row>
        <Row className={styles.tabsAlign}>{tabComponent}</Row>
      </Col>
      <Col className={styles.buttionGruop}>
        <Row>
          <Col span={12} style={{ padding: '10px' }}>
            <Button
              onClick={() => setVisibleModal(true)}
              type="default"
              style={{ width: '100%' }}
            >
              Send Test Email
            </Button>
          </Col>
          <Col span={12} style={{ padding: '10px' }}>
            <Button type="primary" style={{ width: '100%' }}>
              Save
            </Button>
          </Col>
        </Row>

        <Modal
          title={'Send Test Email'}
          visible={visibleModal}
          onCancel={() => setVisibleModal(false)}
          centered={true}
          wrapClassName={styles.modal}
          footer={null}
        >
          <div>
            <p style={{ color: '#9292A3' }}>Email</p>
            <Input
              placeholder="client@email.com"
              onChange={(event) => isEmail(event.target.value)}
            />

            <div className={styles.footerBtnGroup}>
              <Button
                type="default"
                style={{ marginRight: '10px' }}
                onClick={() => setVisibleModal(false)}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                disabled={valideEmail ? false : true}
                onClick={() => showNotification()}
              >
                Send
              </Button>
            </div>
          </div>
        </Modal>
      </Col>
      <Col className={styles.previewColumn}>
        <Row className={styles.headerStyle}>
          <div>PREVIEW</div>
        </Row>
        <Row justify="center" className={styles.previewButtonGroup}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button
              className={styles.radioLeftButton}
              value="a"
              onClick={() => handleSmsTabChanged(1)}
            >
              Email
            </Radio.Button>
            <Radio.Button
              className={styles.radioRightButton}
              value="b"
              onClick={() => handleSmsTabChanged(2)}
            >
              SMS Text
            </Radio.Button>
          </Radio.Group>
        </Row>
        {previewStatus === 1 && (
          <Row justify="center">
            <div className={styles.previewCard}>{previewComponent}</div>
          </Row>
        )}
        {previewStatus === 2 && (
          <Row justify="center">
            <div className={styles.previewSms}>{smsComponent}</div>
          </Row>
        )}
      </Col>
    </Row>
  )
}

export default ClientNotification
