import React, { FC } from 'react'
import drugsIcon from '../../assets/images/medicalform_drugs.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const Drugs: FC = () => {
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={drugsIcon}
        bgcolor="#FAAD14"
        title="Drugs"
        desc="Description"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BasicElement>
  )
}

export default Drugs
