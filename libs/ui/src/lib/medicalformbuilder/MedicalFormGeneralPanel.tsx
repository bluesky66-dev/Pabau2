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
  isEditing: () => boolean
  onSelectFormType: (val: SelectedForms) => void
  changeFormName: (formName: string) => void
  formName: string
}

const MedicalFormGeneralPanel: FC<MedicalFormGeneralProps> = ({
  isEditing,
  onSelectFormType,
  changeFormName,
  formName,
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
      <MedicalFormName
        changeFormName={changeFormName}
        label="Form name"
        desc="Enter your form name"
        name={formName}
      />
      <AddSuggestion
        label="Which service should this form be used for?"
        defaultSelected={defaultServices}
        options={serviceOptions}
        onChange={onSelectServices}
      />
      <FormType
        isEditing={isEditing}
        setting={defaultSelectedFormInfos}
        onChangeSetting={onChangeSetting}
      />
    </div>
  )
}

export default MedicalFormGeneralPanel
