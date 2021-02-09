import { Collapse } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormComponentPanel from './MedicalFormComponentPanel'
import MedicalFormGeneralPanel from './MedicalFormGeneralPanel'

const { Panel } = Collapse

interface formParams {
  id: number
  formName: string
}

interface P {
  formNames?: formParams[]
}

const MedicalFormEditLeft: FC<P> = ({ ...props }) => {
  const { formNames } = props
  return (
    <div className={styles.medicalFormEditLeftPanel}>
      <Collapse
        defaultActiveKey={['1', '2']}
        expandIconPosition="right"
        className={styles.medicalFormEditLeftPanelCollapse}
      >
        <Panel
          header="GENERAL"
          key="1"
          className={styles.medicalFormEditLeftPanelCollapseGeneral}
        >
          <MedicalFormGeneralPanel />
        </Panel>
        <Panel
          header="COMPONENTS"
          key="2"
          className={styles.medicalFormEditLeftPanelCollapseComponent}
        >
          <MedicalFormComponentPanel formNames={formNames} />
        </Panel>
      </Collapse>
    </div>
  )
}

export default MedicalFormEditLeft
