import React from 'react'
import styles from './calendar.module.less'
import { TimeInput } from '@pabau/ui'
import { Select, Typography, Row, Col } from 'antd'
import moment from 'moment'

const { Title } = Typography
const options = [
  { value: '15 minutes' },
  { value: '30 minutes' },
  { value: '45 minutes' },
]
const Configuration = () => (
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
              <TimeInput
                label="Start time"
                defaultValue={moment('13:45', 'HH:mm')}
              />
            </Col>
            <Col md={12} className={styles.colLeftSpace}>
              <TimeInput
                label="End time"
                defaultValue={moment('13:45', 'HH:mm')}
              />
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

export default Configuration
