import {
  AddSuggestion,
  defaultSelectedFormInfos,
  FormType,
  SelectedForms,
} from '@pabau/ui'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormName from './MedicalFormName'

interface MedicalFormGeneralProps {
  onSelectFormType: (val: SelectedForms) => void
}

const MedicalFormGeneralPanel: FC<MedicalFormGeneralProps> = ({
  onSelectFormType,
}) => {
  const onChangeSetting = (setting) => {
    onSelectFormType(setting)
  }
  const onSelectServices = (services) => {
    console.log(services)
  }
  const serviceOptions = ['Category', 'All inclusive']
  const defaultServices = []
  return (
    <div className={styles.medicalFormGeneralPanel}>
      <MedicalFormName label="Form name" desc="Enter your form name" />
      <AddSuggestion
        label="Which service should this form be used for?"
        defaultSelected={defaultServices}
        options={serviceOptions}
        onChange={onSelectServices}
      />
      <FormType
        setting={defaultSelectedFormInfos}
        onChangeSetting={onChangeSetting}
      />
    </div>
  )
}

export default MedicalFormGeneralPanel
