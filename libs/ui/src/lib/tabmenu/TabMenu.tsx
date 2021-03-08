import React, { FC, ReactNode } from 'react'
import { Tabs } from 'antd'
import { TabsProps } from 'antd/lib/tabs'
import styles from './TabMenu.module.less'

const { TabPane } = Tabs
interface P extends TabsProps {
  tabPosition?: 'top' | 'left'
  menuItems: Array<ReactNode>
  minHeight?: string
}

export const TabMenu: FC<P> = ({
  tabPosition = 'left',
  children,
  menuItems,
  minHeight = '100vh',
  ...props
}) => {
  return (
    <div className={styles.calendarSettings}>
      <Tabs {...props} tabPosition={tabPosition} style={{ minHeight }}>
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
