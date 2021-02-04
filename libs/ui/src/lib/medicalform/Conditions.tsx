import React, { FC } from 'react'
import conditionsIcon from '../../assets/images/medicalform_conditions.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const Conditions: FC = () => {
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={conditionsIcon}
        bgcolor="#FAAD14"
        title="Medical Conditions"
        desc="Description"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BasicElement>
  )
}

export default Conditions
