import React, { FC } from 'react'
import { Tabs } from 'antd'
import styles from './CalendarSettings.module.less'
import { Configuration, AppointmentSettings, Appearance, Advanced } from './layouts'

const { TabPane } = Tabs

export const CalendarSettings: FC = () => {
  const calendarSettingsMenu = [
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
    <div className={styles.calendarSettings}>
      <Tabs defaultActiveKey="2" tabPosition={'left'} style={{ minHeight: '100vh' }}>
        {calendarSettingsMenu.map((menu, i) => (
          <TabPane tab={menu.menuName} key={i}>
            {menu.component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default CalendarSettings
