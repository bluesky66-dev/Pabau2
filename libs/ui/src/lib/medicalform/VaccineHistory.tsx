import React, { FC } from 'react'
import vaccineHistoryIcon from '../../assets/images/medicalform_vaccinehistory.svg'
import BaiscElement from './BaiscElement'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const VaccineHistory: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={vaccineHistoryIcon}
        bgcolor="#FAAD14"
        title="Vaccine history"
        desc="Description"
      />
      <MedicalFormBottom needLeft={false} />
    </BaiscElement>
  )
}

export default VaccineHistory
