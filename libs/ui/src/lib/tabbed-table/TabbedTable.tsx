import React, { FC, ReactNode } from 'react'
import { TabMenu } from '@pabau/ui'
import styles from './TabbedTable.module.less'

export interface TabbedTableProps {
  tabItems: Array<string>
  children: Array<ReactNode>
}

export const TabbedTable: FC<TabbedTableProps> = ({ tabItems, children }) => {
  return (
    <div className={styles.tabbedTableContainer}>
      <TabMenu menuItems={tabItems} tabPosition="top">
        {children.map((child) => child)}
      </TabMenu>
    </div>
  )
}

export default TabbedTable
