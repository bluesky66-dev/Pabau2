import React, { FC } from 'react'
import vaccineHistoryIcon from '../../assets/images/medicalform_vaccinehistory.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerVaccineHistory: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={vaccineHistoryIcon}
        bgcolor="#FAAD14"
        title="Vaccine history"
      />
    </InnerElement>
  )
}

export default InnerVaccineHistory
