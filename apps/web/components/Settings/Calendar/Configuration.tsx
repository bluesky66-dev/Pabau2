import React from 'react'
import styles from './calendar.module.less'
import { TimeInput } from '@pabau/ui'
import { Select, Typography, Row, Col } from 'antd'
import moment from 'moment'

const { Title } = Typography
const options = [
  { value: '5 minutes' },
  { value: '10 minutes' },
  { value: '15 minutes' },
  { value: '20 minutes' },
  { value: '30 minutes' },
]

const optionslist = [
  { value: '1 minutes' },
  { value: '2 minutes' },
  { value: '5 minutes' },
  { value: '10 minutes' },
  { value: '2 hours' },
]
const Configuration = () => (
  <div className={styles.calendarSettingsConfiguration}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Configuration</Title>
      <span className={styles.description}>
        Configure your calendars start and end time, as well as setting how big
        your appointment time slots are.
      </span>
    </div>
    <div className={styles.configurationControls}>
      <Row>
        <Col xs={24}>
          <Title level={4} className={styles.titleTextStyle}>
            Time slot size
          </Title>
          <Select
            className={styles.timeSlotSelect}
            placeholder="Please select"
            defaultValue={['15 minutes']}
            options={options}
          />
          <Row className={styles.timeInputSpace}>
            <Col xs={24} md={12} className={styles.colRightSpace}>
              <TimeInput
                label="Start time"
                defaultValue={moment('13:45', 'HH:mm')}
              />
            </Col>
            <Col xs={24} md={12} className={styles.colLeftSpace}>
              <TimeInput
                label="End time"
                defaultValue={moment('13:45', 'HH:mm')}
              />
            </Col>
          </Row>
          <Row className={styles.timeInputSpace}>
            <Col xs={24}>
              <Title level={4} className={styles.titleTextStyle}>
                Auto lock
              </Title>
              <Select
                className={styles.timeSlotSelect}
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['1 minutes']}
                options={optionslist}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
)

export default Configuration
