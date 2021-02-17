import React from 'react'
import {
  SettingsMenu,
  Button,
  Notification,
  NotificationType,
  Breadcrumb,
} from '@pabau/ui'
import { Card } from 'antd'
import CommonHeader from '../setup/CommonHeader'
import { Layout } from '@pabau/ui'
import Configuration from '../../components/Settings/Calendar/Configuration'
import AppointmentSettings from '../../components/Settings/Calendar/AppointmentSettings'
import Appearance from '../../components/Settings/Calendar/Appearance'
import Advanced from '../../components/Settings/Calendar/Advanced'
import styles from './calendar.module.less'

/* eslint-disable-next-line */
export interface CalendarProps { }

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

  const onSaveChange = () => {
    Notification(NotificationType['success'], 'Saved Successfully')
  }

  return (
    <div>
      <CommonHeader />
      <Layout>
        <Card className={styles.calendarCard}>
          <div className={styles.mainTabWrapper}>
            <div className={styles.titleWrapper}>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  { breadcrumbName: 'Marketing Source', path: '' },
                ]}
              />
              <h1>Calendar settings</h1>
            </div>
            <div className={styles.saveBtn}>
              <Button type="primary" onClick={onSaveChange}>
                Save Changes
              </Button>
            </div>
          </div>
          <SettingsMenu items={generalSettingsMenu1} />
        </Card>
      </Layout>
    </div>
  )
}

export default Calendar
