import React, { FC } from 'react'
import conditionsIcon from '../../assets/images/medicalform_conditions.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerConditions: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={conditionsIcon}
        bgcolor="#FAAD14"
        title="Medical Conditions"
      />
    </InnerElement>
  )
}

export default InnerConditions
