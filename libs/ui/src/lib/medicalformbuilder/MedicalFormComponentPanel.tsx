import { MedicalForms } from '@pabau/ui'
import { Tabs } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormLeftSidebarBasicPanels from './MedicalFormLeftSidebarBasicPanels'
import MedicalFormLeftSidebarCustomPanels from './MedicalFormLeftSidebarCustomPanels'

const { TabPane } = Tabs

interface P {
  medicalForms: MedicalForms[]
}

const MedicalFormComponentPanel: FC<P> = ({ ...props }) => {
  const { medicalForms } = props

  const basicMedicalForms = medicalForms.filter(
    (item) => item.formType === 'basic'
  )

  const customMedicalForms = medicalForms.filter(
    (item) => item.formType === 'custom'
  )

  return (
    <div className={styles.MedicalFormComponentPanel}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<span className={styles.tabName}>Basic</span>} key="1">
          <MedicalFormLeftSidebarBasicPanels medicalForms={basicMedicalForms} />
        </TabPane>
        <TabPane tab={<span className={styles.tabName}>Custom</span>} key="2">
          <MedicalFormLeftSidebarCustomPanels
            medicalForms={customMedicalForms}
          />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default MedicalFormComponentPanel
