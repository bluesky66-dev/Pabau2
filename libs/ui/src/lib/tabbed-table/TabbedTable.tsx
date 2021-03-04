import React, { FC, ReactNode } from 'react'
import { TabMenu } from '@pabau/ui'
import styles from './TabbedTable.module.less'
export interface TabbedTableProps {
  tabItems: Array<string>
  tabClick: (tab) => void
  children: ReactNode[]
}

export const TabbedTable: FC<TabbedTableProps> = ({
  tabItems,
  tabClick,
  children,
}) => {
  return (
    <div className={styles.tabbedTableContainer}>
      <TabMenu
        menuItems={tabItems || []}
        tabPosition="top"
        onTabClick={(tab) => tabClick(tab)}
      >
        {children?.map((child) => child)}
      </TabMenu>
    </div>
  )
}

export default TabbedTable
