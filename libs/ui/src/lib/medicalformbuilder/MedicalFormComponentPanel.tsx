import { Tabs } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormLeftSidebarBasicPanels from './MedicalFormLeftSidebarBasicPanels'
import MedicalFormLeftSidebarCustomPanels from './MedicalFormLeftSidebarCustomPanels'

const { TabPane } = Tabs

const MedicalFormComponentPanel: FC = () => {
  return (
    <div className={styles.MedicalFormComponentPanel}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<span className={styles.tabName}>Basic</span>} key="1">
          <MedicalFormLeftSidebarBasicPanels />
        </TabPane>
        <TabPane tab={<span className={styles.tabName}>Custom</span>} key="2">
          <MedicalFormLeftSidebarCustomPanels />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default MedicalFormComponentPanel
