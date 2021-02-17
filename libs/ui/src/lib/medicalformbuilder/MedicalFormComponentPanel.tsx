import { MedicalForms, SelectedForms } from '@pabau/ui'
import { Tabs } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormLeftSidebarBasicPanels from './MedicalFormLeftSidebarBasicPanels'
import MedicalFormLeftSidebarCustomPanels from './MedicalFormLeftSidebarCustomPanels'

const { TabPane } = Tabs

interface P {
  selectedFormTypes: SelectedForms
  medicalForms: MedicalForms[]
}

interface HideForm {
  [key: string]: string[]
}

const hideFormInfos: HideForm = {
  medicalHistory: [
    'basic_labtests',
    'basic_vaccinehistory',
    'basic_vaccinescheduler',
    'basic_traveldestination',
    'basic_drugs',
  ],
  consent: [
    'basic_vaccinescheduler',
    'basic_vaccinehistory',
    'basic_traveldestination',
    'basic_labtests',
  ],
  treatmentForm: [],
  epaper: [],
  presciption: [
    'basic_labtests',
    'basic_vaccinehistory',
    'basic_vaccinescheduler',
    'basic_traveldestination',
    'basic_conditions',
    'basic_drawing',
  ],
  labForm: [
    'basic_drugs',
    'basic_conditions',
    'basic_vaccinehistory',
    'basic_vaccinescheduler',
    'basic_traveldestination',
    'basic_drawing',
  ],
}

const MedicalFormComponentPanel: FC<P> = ({ ...props }) => {
  const { selectedFormTypes, medicalForms } = props
  const hideForms: string[] = []

  const checkedFormTypes = Object.entries(selectedFormTypes)
    .filter(([key, value]) => value === true)
    .map((item) => hideFormInfos[item[0]])

  checkedFormTypes.map((itemFormTypes) =>
    itemFormTypes.map((itemFormType) => hideForms.push(itemFormType))
  )

  const basicMedicalForms = medicalForms.filter(
    (item) =>
      item.formType === 'basic' && hideForms.indexOf(item.formName) === -1
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
