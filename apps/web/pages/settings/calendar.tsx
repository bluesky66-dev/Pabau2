import React from 'react'

import './calendar.module.less'
import { SettingsMenu } from '@pabau/ui'
import styles from './calendar.module.less'
import { Select, Typography, Input, Row, Col, Checkbox } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

/* eslint-disable-next-line */
export interface CalendarProps {}
const options = [{ value: '15 minutes' }, { value: '30 minutes' }, { value: '45 minutes' }]
const Configuration = () => (
  <div className={styles.calendarSettingsConfiguration}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Configuration</Title>
      <span className={styles.description}>
        Configure your calendars start and end time, as well as <br /> setting how big your
        appointment time slots are.
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
interface AppointmentControlItems {
  type: string
  value: boolean
}
const appointmentsControls: AppointmentControlItems[] = [
  {
    type: 'Allow appointments to overlap',
    value: true,
  },
  {
    type: 'Appointment reminder',
    value: true,
  },
  {
    type: 'Email confirmation',
    value: true,
  },
  {
    type: 'SMS confirmation',
    value: true,
  },
  {
    type: 'Request feedback',
    value: true,
  },
]
const AppointmentSettings = () => (
  <div className={styles.calendarSettingsAppointment}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appointment settings</Title>
      <span className={styles.description}>
        Setup your calendar to automatically have your communication <br /> checkbox selected as
        well as allowing your appointments to <br /> overlap.
      </span>
    </div>
    <div className={styles.appointmentsControls}>
      {appointmentsControls.map((appointment, index) => {
        return (
          <>
            <Checkbox defaultChecked={appointment.value}>
              <span className={styles.appointmentText}>{appointment.type}</span>
            </Checkbox>
            <QuestionCircleOutlined className={styles.appointmentIcon} />
            <br />
          </>
        )
      })}
    </div>
  </div>
)
const Appearance = () => (
  <div className={styles.calendarSettingsAppearance}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appearance</Title>
      <span className={styles.description}>
        Customize the look and feel of the appointment card such <br /> as changing the layout of
        both the tooltip and the <br /> appointment card itself.
      </span>
    </div>
    <div className={styles.appearancesControls}>{}</div>
  </div>
)
const Advanced = () => (
  <div className={styles.calendarSettingsAdvanced}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Advanced</Title>
      <span className={styles.description}>configure any further settings.</span>
    </div>
    <div className={styles.appearancesControls}>{}</div>
  </div>
)
export function Calendar(props: CalendarProps) {
  const generalSettingsMenu1 = [
    {
      menuName: 'Configuration',
      component: <Configuration />,
    },
    {
      menuName: 'Appointment settings',
      component: <AppointmentSettings />,
    },
    {
      menuName: 'Appearance',
      component: <Appearance />,
    },
    {
      menuName: 'Advanced',
      component: <Advanced />,
    },
  ]
  return (
    <div>
      <h1>Calendar settings</h1>
      <SettingsMenu items={generalSettingsMenu1} />
    </div>
  )
}

export default Calendar
