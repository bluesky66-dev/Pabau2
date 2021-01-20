import React, { FC } from 'react'
import styles from './Settings.module.less'
import { Typography, Checkbox } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

const { Title } = Typography

interface AppointmentControlItems {
  type: string
  value: boolean
}

export const AppointmentSettings: FC = () => {
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

  return (
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
}

export default AppointmentSettings
