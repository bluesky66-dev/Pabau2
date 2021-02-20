import React, { FC, ReactNode } from 'react'
import { TabMenu } from '@pabau/ui'
import styles from './TabbedTable.module.less'
export interface TabbedTableProps {
  tabItems: Array<string>
  children: ReactNode[]
  onTabChange?: (key: number | string) => void
}

export const TabbedTable: FC<TabbedTableProps> = ({
  tabItems,
  children,
  onTabChange,
}) => {
  const onChangeTab = (key: number | string) => {
    if (onTabChange) {
      onTabChange(key)
    }
  }

  return (
    <div className={styles.tabbedTableContainer}>
      <TabMenu
        menuItems={tabItems || []}
        tabPosition="top"
        onChange={onChangeTab}
      >
        {children?.map((child) => child)}
      </TabMenu>
    </div>
  )
}

export default TabbedTable
