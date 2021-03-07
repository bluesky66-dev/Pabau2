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
    type: 'Allow appointment overlap',
    value: true,
    label: 'Allow appointments to overlap in your calendar with no warning.',
    key: 1,
  },
  {
    type: 'Reminder (Default)',
    value: true,
    label: 'Set the appointment reminder to schedule by default.',
    key: 2,
  },
  {
    type: 'Email confirmation (Default)',
    value: true,
    label: 'Set the appointment email confirmation to send by default.',
    key: 3,
  },
  {
    type: 'SMS confirmation (Default)',
    value: true,
    label: 'Set the appointment SMS confirmation to be sent by default.',
    key: 4,
  },
  {
    type: 'Request feedback (Default)',
    value: true,
    label: 'We will request feedback from all clients by default.',
    key: 5,
  },
]
const AppointmentSettings = () => (
  <div className={styles.calendarSettingsAppointment}>
    <div className={styles.settingContent}>
      <Title className={styles.headerText}>Appointment settings</Title>
      <span className={styles.description}>
        Setup your calendar to automatically have your communication checkbox
        selected as well as allowing your appointments to overlap.
      </span>
    </div>
    <div className={styles.appointmentsControls}>
      {appointmentsControls.map((appointment) => {
        return (
          <div key={appointment.key} className={styles.advancedCheckList}>
            <Checkbox
              key={appointment.key}
              defaultChecked={appointment.value}
              className={styles.advancedCheck}
            >
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
