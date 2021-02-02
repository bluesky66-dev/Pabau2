import React, { FC, useState, useEffect } from 'react'
import { TabMenu, Table, TableType } from '@pabau/ui'
import styles from './TabbedTable.module.less'

interface TableData {
  [key: string]: TableType
}
export interface TabbedTableProps {
  tabItems: Array<string>
  tableData: TableData
}

export const TabbedTable: FC<TabbedTableProps> = ({ tabItems, tableData }) => {
  const [valid, setValid] = useState(false)
  useEffect(() => {
    const broken = tabItems.findIndex((item) => tableData[item] === undefined)
    setValid(broken === -1)
  }, [tabItems, tableData])
  return (
    <div className={styles.tabbedTableContainer}>
      {valid && (
        <TabMenu menuItems={tabItems || []} tabPosition="top">
          {tabItems &&
            tabItems.map((item) => <Table key={item} {...tableData[item]} />)}
        </TabMenu>
      )}
    </div>
  )
}

export default TabbedTable
