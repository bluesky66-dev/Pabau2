import {
  defaultSelectedFormInfos,
  MedicalForms,
  SelectedForms,
} from '@pabau/ui'
import { Collapse } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormComponentPanel from './MedicalFormComponentPanel'
import MedicalFormGeneralPanel from './MedicalFormGeneralPanel'

const { Panel } = Collapse

interface P {
  refreshDraggedFroms: () => void
  isEditing: () => boolean
  medicalForms: MedicalForms[]
  changeFormName: (formName: string) => void
  formName: string
}

const MedicalFormEditLeft: FC<P> = ({ ...props }) => {
  const {
    refreshDraggedFroms,
    isEditing,
    medicalForms,
    changeFormName,
    formName,
  } = props
  const [selectedFormTypes, setSelectedFormTypes] = useState<SelectedForms>(
    defaultSelectedFormInfos
  )
  const [componentClass, setComponentClass] = useState(
    styles.medicalFormEditLeftPanelCollapseComponentExpend
  )
  const [openPanel, setOpenPanel] = useState<string[]>(['1'])

  const isSelectedFormType = (setting) => {
    const selectedFormType = Object.entries(setting).filter(
      ([key, value]) => value === true
    )
    return selectedFormType.length === 0 ? false : true
  }
  const onSelectFormType = (setting) => {
    refreshDraggedFroms?.()
    setSelectedFormTypes(setting)
    if (isSelectedFormType(setting)) {
      setOpenPanel(['2'])
      setComponentClass(styles.medicalFormEditLeftPanelCollapseComponentExpend)
    } else {
      setOpenPanel(['1'])
      setComponentClass(
        styles.medicalFormEditLeftPanelCollapseComponentCollapse
      )
    }
  }
  const callback = (key) => {
    if (isSelectedFormType(selectedFormTypes)) {
      setOpenPanel(key)
    } else {
      setOpenPanel(['1'])
    }
  }

  useEffect(() => {
    if (openPanel.length === 2)
      setComponentClass(
        styles.medicalFormEditLeftPanelCollapseComponentCollapse
      )
    else
      setComponentClass(styles.medicalFormEditLeftPanelCollapseComponentExpend)
  }, [openPanel])

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
          <MedicalFormGeneralPanel
            isEditing={isEditing}
            onSelectFormType={onSelectFormType}
            changeFormName={changeFormName}
            formName={formName}
          />
        </Panel>
        <Panel header="COMPONENTS" key="2" className={componentClass}>
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
