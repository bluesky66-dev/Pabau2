import React from 'react'
import styles from './calendar.module.less'
import { Typography, Checkbox } from 'antd'
import { HelpTooltip } from '@pabau/ui'

const { Title } = Typography

interface AppointmentControlItems {
  type: string
  value: boolean
  label: string
  key: number
}
const appointmentsControls: AppointmentControlItems[] = [
  {
    type: 'Allow appointments to overlap',
    value: true,
    label: 'Allow appointments to overlap',
    key: 1,
  },
  {
    type: 'Appointment reminder',
    value: true,
    label: 'Appointment reminder',
    key: 2,
  },
  {
    type: 'Email confirmation',
    value: true,
    label: 'Email confirmation',
    key: 3,
  },
  {
    type: 'SMS confirmation',
    value: true,
    label: 'SMS confirmation',
    key: 4,
  },
  {
    type: 'Request feedback',
    value: true,
    label: 'Request feedback',
    key: 5,
  },
]
const AppointmentSettings = () => (
  <div className={styles.calendarSettingsAppointment}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appointment settings</Title>
      <span className={styles.description}>
        Setup your calendar to automatically have your communication <br />{' '}
        checkbox selected as well as allowing your appointments to <br />{' '}
        overlap.
      </span>
    </div>
    <div className={styles.appointmentsControls}>
      {appointmentsControls.map((appointment) => {
        return (
          <div key={appointment.key}>
            <Checkbox key={appointment.key} defaultChecked={appointment.value}>
              <span className={styles.appointmentText}>{appointment.type}</span>
            </Checkbox>
            <HelpTooltip helpText={appointment.label} />
            <br />
          </div>
        )
      })}
    </div>
  </div>
)

export default AppointmentSettings
