import React, { FC } from 'react'
import { Tabs } from 'antd'
import styles from './TabMenu.module.less'

const { TabPane } = Tabs
interface P {
  tabPosition?: 'top' | 'left'
  menuItems: Array<string>
  minHeight?: string
  onChange?: (key: number | string) => void
}

export const TabMenu: FC<P> = ({
  tabPosition = 'left',
  children,
  menuItems,
  minHeight = '100vh',
  onChange,
}) => {
  const tabClick = (active: number | string) => {
    if (onChange) {
      onChange(active)
    }
  }
  return (
    <div className={styles.calendarSettings}>
      <Tabs tabPosition={tabPosition} style={{ minHeight }} onChange={tabClick}>
        {Array.isArray(children) &&
          children?.map((tab, i) => (
            <TabPane tab={menuItems[i]} key={i}>
              {tab}
            </TabPane>
          ))}
      </Tabs>
    </div>
  )
}

export default TabMenu
