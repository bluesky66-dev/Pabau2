import React, { FC } from 'react'
import { Tabs } from 'antd'
import styles from './TabMenu.module.less'

const { TabPane } = Tabs
interface P {
  tabPosition?: 'top' | 'left'
  menuItems: Array<string>
  minHeight?: string
}

export const TabMenu: FC<P> = ({
  tabPosition = 'left',
  children,
  menuItems,
  minHeight = '100vh',
}) => {
  return (
    <div className={styles.calendarSettings}>
      <Tabs tabPosition={tabPosition} style={{ minHeight }}>
        {Array.isArray(children) &&
          children.map((tab, i) => (
            <TabPane tab={menuItems[i]} key={i}>
              {tab}
            </TabPane>
          ))}
      </Tabs>
    </div>
  )
}

export default TabMenu
