import {
  defaultSelectedFormInfos,
  MedicalForms,
  SelectedForms,
} from '@pabau/ui'
import { Collapse } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormComponentPanel from './MedicalFormComponentPanel'
import MedicalFormGeneralPanel from './MedicalFormGeneralPanel'

const { Panel } = Collapse

interface P {
  medicalForms: MedicalForms[]
}

const MedicalFormEditLeft: FC<P> = ({ ...props }) => {
  const { medicalForms } = props
  const [selectedFormTypes, setSelectedFormTypes] = useState<SelectedForms>(
    defaultSelectedFormInfos
  )
  const [openPanel, setOpenPanel] = useState<string[]>(['1', '2'])

  const onSelectFormType = (setting) => {
    setSelectedFormTypes(setting)
    setOpenPanel(['2'])
  }
  const callback = (key) => {
    // console.log(key)
    setOpenPanel(key)
  }
  return (
    <div className={styles.medicalFormEditLeftPanel}>
      <Collapse
        expandIconPosition="right"
        className={styles.medicalFormEditLeftPanelCollapse}
        activeKey={openPanel}
        onChange={callback}
      >
        <Panel
          header="GENERAL"
          key="1"
          className={styles.medicalFormEditLeftPanelCollapseGeneral}
        >
          <MedicalFormGeneralPanel onSelectFormType={onSelectFormType} />
        </Panel>
        <Panel
          header="COMPONENTS"
          key="2"
          className={styles.medicalFormEditLeftPanelCollapseComponent}
        >
          <MedicalFormComponentPanel
            selectedFormTypes={selectedFormTypes}
            medicalForms={medicalForms}
          />
        </Panel>
      </Collapse>
    </div>
  )
}

export default MedicalFormEditLeft
