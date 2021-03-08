import React, { FC, useState, ReactNode } from 'react'
import { Row, Col, Radio, Input, Modal } from 'antd'
import styles from './PabauCare.module.less'
import { Button, Notification, NotificationType } from '@pabau/ui'

/* eslint-disable-next-line */
export interface PabauCareProps {
  tabComponent?: ReactNode
  previewComponent?: ReactNode
  smsComponent?: ReactNode
  onSmsTabChanged?: (index) => void
  displayButtons?: boolean
  displayRadioGroup?: boolean
}

export const PabauCare: FC<PabauCareProps> = ({
  tabComponent,
  previewComponent,
  smsComponent,
  onSmsTabChanged,
  displayButtons = true,
  displayRadioGroup = true,
}) => {
  const [previewStatus, setPreviewStatus] = useState(1)

  function handleSmsTabChanged(value) {
    setPreviewStatus(value)
    if (onSmsTabChanged) {
      onSmsTabChanged(value)
    }
  }

  const [visibleModal, setVisibleModal] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  function showNotification() {
    if (validEmail) {
      Notification(NotificationType.success, 'Test message sent')
      setVisibleModal(false)
    }
  }

  function isEmail(search) {
    const regexp = new RegExp(
      /* eslint-disable-next-line */
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    const searchFind = regexp.test(search)
    setValidEmail(searchFind)
  }

  return (
    <Row className={styles.pabauCarePage}>
      {tabComponent && (
        <Col className={styles.builderColumn}>
          <Row className={styles.headerStyle}>
            <div>BUILDER</div>
          </Row>
          <Row className={styles.tabsAlign}>{tabComponent}</Row>
        </Col>
      )}
      <Col className={styles.buttionGruop}>
        {displayButtons && (
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
        )}

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
                disabled={validEmail ? false : true}
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
        {displayRadioGroup && (
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
        )}
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

export default PabauCare
