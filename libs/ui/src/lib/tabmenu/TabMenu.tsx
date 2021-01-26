import React, { FC } from 'react'
import { Tabs } from 'antd'
import styles from './TabMenu.module.less'

const { TabPane } = Tabs

interface P {
  tabPosition: 'top' | 'left'
}

export const TabMenu: FC<P> = ({ tabPosition = 'left' }) => {
  const calendarSettingsMenu = [
    {
      menuName: 'Tab 1',
      component: <div>1</div>,
    },
    {
      menuName: 'Tab 2',
      component: <div>2</div>,
    },
    {
      menuName: 'Tab 3',
      component: <div>3</div>,
    },
    {
      menuName: 'Tab 4',
      component: <div>4</div>,
    },
  ]
  return (
    <div className={styles.calendarSettings}>
      <Tabs
        defaultActiveKey="2"
        tabPosition={tabPosition}
        style={{ minHeight: '100vh' }}
      >
        {calendarSettingsMenu.map((menu, i) => (
          <TabPane tab={menu.menuName} key={i}>
            {menu.component}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default TabMenu
