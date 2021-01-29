import React from 'react'

import { SettingsMenu, Button } from '@pabau/ui'
import { Card } from 'antd'
import CommonHeader from '../setup/CommonHeader'
import { Layout } from '@pabau/ui'
import Configuration from '../../components/Settings/Calendar/Configuration'
import AppointmentSettings from '../../components/Settings/Calendar/AppointmentSettings'
import Appearance from '../../components/Settings/Calendar/Appearance'
import Advanced from '../../components/Settings/Calendar/Advanced'
import styles from './calendar.module.less'
import { RightOutlined } from '@ant-design/icons'

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

  return (
    <div>
      <CommonHeader />
      <Layout>
        <Card className={styles.calendarCard}>
          <div className={styles.mainTabWrapper}>
            <div className={styles.titleWrapper}>
              <p className={styles.tabWrap}>
                {'Setup'}
                <span>
                  <RightOutlined /> Marketing Source
                </span>
              </p>
              <h1>Calendar settings</h1>
            </div>
            <div className={styles.saveBtn}>
              <Button type="primary">Save Changes</Button>
            </div>
          </div>
          <SettingsMenu items={generalSettingsMenu1} />
        </Card>
      </Layout>
    </div>
  )
}

export default Calendar
