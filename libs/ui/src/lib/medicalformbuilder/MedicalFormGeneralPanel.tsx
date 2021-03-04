import { defaultSelectedFormInfos, FormType, SelectedForms } from '@pabau/ui'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface MedicalFormGeneralProps {
  onSelectFormType: (val: SelectedForms) => void
}

const MedicalFormGeneralPanel: FC<MedicalFormGeneralProps> = ({
  onSelectFormType,
}) => {
  const onChangeSetting = (setting) => {
    onSelectFormType(setting)
  }

  return (
    <div className={styles.medicalFormGeneralPanel}>
      <FormType
        setting={defaultSelectedFormInfos}
        onChangeSetting={onChangeSetting}
      />
    </div>
  )
}

export default MedicalFormGeneralPanel
