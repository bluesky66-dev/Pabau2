import React, { FC } from 'react'
import styles from './Settings.module.less'
import { Select, Typography, Input, Row, Col } from 'antd'

const { Title } = Typography

export const Configuration: FC = () => {
  const options = [
    { value: '15 minutes' },
    { value: '30 minutes' },
    { value: '45 minutes' },
  ]
  return (
    <div className={styles.calendarSettingsConfiguration}>
      <div className={styles.settingContent}>
        <Title className={styles.headerText}>Configuration</Title>
        <span className={styles.description}>
          Configure your calendars start and end time, as well as <br /> setting
          how big your appointment time slots are.
        </span>
      </div>
      <div className={styles.configurationControls}>
        <Row>
          <Col md={12}>
            <Title level={4} className={styles.titleTextStyle}>
              Time slot size
            </Title>
            <Select
              className={styles.timeSlotSelect}
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['15 minutes']}
              options={options}
            />
            <Row className={styles.timeInputSpace}>
              <Col md={12} className={styles.colRightSpace}>
                <Title level={4} className={styles.titleTextStyle}>
                  Start time
                </Title>
                <Input placeholder="" defaultValue="13:45" />
              </Col>
              <Col md={12} className={styles.colLeftSpace}>
                <Title level={4} className={styles.titleTextStyle}>
                  End time
                </Title>
                <Input defaultValue="13:45" />
              </Col>
            </Row>
            <Row className={styles.timeInputSpace}>
              <Col md={24}>
                <Title level={4} className={styles.titleTextStyle}>
                  Auto lock
                </Title>
                <Select
                  className={styles.timeSlotSelect}
                  style={{ width: '100%' }}
                  placeholder="Please select"
                  defaultValue={['15 minutes']}
                  options={options}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Configuration
